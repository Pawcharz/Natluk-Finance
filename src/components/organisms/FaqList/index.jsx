import ReactDOM from "react-dom";
import React from "react";
//SCSS
import './FaqList.scss';

import FaqMenu from "../../molecules/FaqMenu";
import FaqCategoryList from "../../molecules/FaqCategoryList";
import FaqDisplayer from "../../organisms/FaqDisplayer";

const categoriesEnum = Object.freeze({
    GENERAL: 'GENERAL',
    NC: 'NC',
    METAMASK: 'METAMASK',
    OTHERS: 'OTHERS'
})
const questionsData = [
    {
        question: 'How does crypto Work?',
        answer: "Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that can enable anyone anywhere to send and receive payments.",
        category: categoriesEnum.GENERAL,
    },
    {
        question: 'Where to buy crypto?',
        answer: 'The best way to buys cryptocurrencies is to trade them for fiat on a Crypto Exchange like Binance.',
        category: categoriesEnum.GENERAL,
    },
    {
        question: 'NC Coin - what is it all about?',
        answer: 'NatLuk is Decentralized community of technology, started in 2020 due to covid. In our center of interest you can find things like Digital Transformation, Data Science, Automation and solve complex problems with digital tools like software engineering with Artificial Intelligence or Machine Learning. In our group we have wide selection of professionals around the globe working for best companies in the world like Google, Intel, PwC, Accenture, Santander, Caterpillar, Comarch as well we have some represents that are working for Polish Space Agency! We have many PhD professionals as well as many students. We are passionate in what we do, we are not afraid of any challenges, we are a team who works together, communicate well and delivers pure value while priorities and technology changes very often, we are on the top of that, and as soon there is something new, we know about it.',
        category: categoriesEnum.NC,
    },
    {
        question: 'How to add NC to metamask?',
        answer: "You need to paste NC adress into your metamask under the 'Import Tokens' link",
        category: categoriesEnum.METAMASK,
    },
    {
        question: 'Where can I check NC price chart?',
        answer: 'In this tutorial we show You how to Set-up MetaMask crypto wallet.',
        category: categoriesEnum.NC,
    },
    {
        question: 'Do I need Matic to add NC to Liquidity pool?',
        answer: 'Yes, You`ll need the same value of Matic as your NC coins to add them.',
        category: categoriesEnum.NC,
    },
    {
        question: 'How does gas fees works? ',
        answer: 'Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on the Ethereum blockchain. ... A higher gas limit means that You must do more work to execute a transaction using ETH or a smart contract.',
        category: categoriesEnum.OTHERS,
    },
    {
        question: 'How much matic I need to buy in order to use Yield Farming?',
        answer: "Not much, You'll only need to pay gas fees in order to add your token to Yield farming. Remember, to add them You'll need UNI-v2 tokens which You can earn from Liquidity Pool",
        category: categoriesEnum.NC,
    },
    {
        question: 'I want to use Yield Farming, what should I do?',
        answer: 'Firstly, You need to have UNI-v2 tokens in your wallet, then visit Gysr.com (We have link on our home page) site and add them with your NC coins to yield farming (You will need to connect your wallet in order to do so).',
        category: categoriesEnum.NC,
    },
    {
        question: 'Do I need to always reimport my tokens after instaling Metamask on a new device?',
        answer: 'You can always do it with your Metamask Secret Recovery Phrase. MetaMask can only load one Secret Recovery Phrase at a time. If you already have a wallet, select the “import Secret Recovery Phrase” option when you set up your wallet.',
        category: categoriesEnum.METAMASK,
    },
    {
        question: 'How does slippage work when making a swap?',
        answer: 'Slippage is the difference between the expected price of a trade and the executed price of that trade. It is more likely to happen when there is a higher level of volatility, such as breaking news that forces unexpected trends in the market.',
        category: categoriesEnum.NC,
    },
    {
        question: 'How to remove unused or unnecessary currencies from Metamask? ',
        answer: "To remove a token, click on the token. You will then see a 3 vertical dots icon in the top right. Tap on it, and it should bring up a dropdown with a Hide Token option. If You're using mobile, simply hold your finger on the asset you want to remove and it will bring up the option to remove or cancel.",
        category: categoriesEnum.METAMASK,
    },





]

class FaqList extends React.Component {

    constructor(props) {
        super(props);

        this.categoriesData = [];

        const fixData = () => {

            const keys = Object.keys(categoriesEnum)

            for(let i = 0; i < keys.length; i++) {

                this.categoriesData.push({
                    name: keys[i],
                    cardsList: []
                })
            }
    
            for(let i = 0; i < questionsData.length; i++) {
    
                let question = questionsData[i];
                for(let j = 0; j < this.categoriesData.length; j++) {
                    
                    if(question.category == this.categoriesData[j].name) {
                        this.categoriesData[j].cardsList.push(question);
                    }
                }
            }
        }
        fixData();


        this.categoryListsRefs = []
        for (let i = 0; i < this.categoriesData.length; i++) {
            const ref = React.createRef();
            this.categoryListsRefs.push(ref);
        }

        this.getCategoryIndex = (category) => {
            let result = this.categoriesData.findIndex( elem => {
                if(elem.name == category)
                    return true;
                    
                return false;
            })
            return result;
        }
        this.renderCategoryList = (categoryData, index) => {
            if(categoryData.cardsList.length == 0) {
                return;
            }

            return (
                <FaqCategoryList
                    ref={this.categoryListsRefs[index]}
                    key={index}
                    categoryData={categoryData}
                    buttonEvent_click={this.openDisplayer}
                />
            )
        }
        this.selectCategory = (category) => {

            if(category == 'ALL') {
                this.categoryListsRefs.forEach( elem => {
                    let categoryComp = elem.current;
                    if(categoryComp) {
                        categoryComp.showSelf();
                    }
                });
            }
            else {
                this.categoryListsRefs.forEach( elem => {
                    let categoryComp = elem.current;

                    if(categoryComp) {
                        if(categoryComp.props.categoryData.name != category) {
                            categoryComp.hideSelf();
                        }
                        else {
                            categoryComp.showSelf();
                        }
                    }
                });
            }
        }


        this.displayerRef = React.createRef();
        this.openDisplayer = (questionData) => {//spróbować z promises
            let displayer = this.displayerRef.current;

            displayer.openDisplayer(questionData);
        }
    }

    render() {
        return (
            <div className="faq-list">
    
                <FaqMenu categories={Object.keys(categoriesEnum)} selectFunction={this.selectCategory}/>
                <div className='faq-list__main'>

                    {this.categoriesData.map( (category, index) => this.renderCategoryList(category, index) )}
    
                </div>

                <FaqDisplayer ref={this.displayerRef}/>
            </div>
            
        )
    }
}

export default FaqList;