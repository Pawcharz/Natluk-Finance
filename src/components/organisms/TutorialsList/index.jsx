import ReactDOM from "react-dom";
import React from "react";
//SCSS
import './TutorialsList.scss';

import TutorialCard from '../../molecules/TutorialCard/index';
import TutorialDisplayer from "../TutorialDisplayer";


const tutorials = [
    {
        imageSrc: '/assets/tutorials/binance-signUp/binance-front.jpg',
        title: 'Creating an account on the Binance exchange',
        description: 'In this tutorial we show how you can create your free account on Binance exchange',
        href: null,

        cards: [
            {
                name: '',
                description: 'Go to www.binance.com/ and click Create Account. Then confirm your area of residence and select the type of account you are interested in - Personal Account or Entity Account, depending on your needs',
                imageSrc: '/assets/tutorials/binance-signUp/1.gif',
            },
            {
                name: '',
                description: 'Complete the following fields: Email, Password, and Referral ID (Not Required)',
                imageSrc: '/assets/tutorials/binance-signUp/2.png',
            },
            {
                name: '',
                description: 'Email Verification - A 6 digit code has been sent to the email address you provided. Enter it for verification purposes',
                imageSrc: '/assets/tutorials/binance-signUp/3.png',
            },
            {
                name: '',
                description: 'Phone Verification - provide your contact number',
                imageSrc: '/assets/tutorials/binance-signUp/4.png',
            },
            {
                name: '',
                description: 'Then enter the 6 digit code from the sms you received',
                imageSrc: '/assets/tutorials/binance-signUp/5.png',
            },
            {
                name: '',
                description: 'Go through the KYC process - click Verify Now',
                imageSrc: '/assets/tutorials/binance-signUp/6.png',
            },
        ]

    },
    {
        imageSrc: '/assets/tutorials/binance-fiat/binance-FIAT.png',
        title: 'How to deposit FIAT on Binance',
        description: 'In this tutorial we show you how to deposit FIAT to your Binance wallet',
        href: null,

        cards: [
            {
                name: 'Depositing money into your account',
                description: 'The fastest way to deposit money (Euro/PLN/USD) into your account is via bank card transfer (the commission is 1.8%). Buy Crypto -> Card Deposit -> Choose currency -> Continue -> Add new card -> Set amount (15 - 176960) and continue',
                imageSrc: '/assets/tutorials/binance-fiat/1.gif',
            }
        ]
    },
    {
        imageSrc: '/assets/tutorials/binance-buyMatic/binance-matic.jpg',
        title: 'How to buy MATIC on Binance exchange',
        description: 'In this tutorial we show you how to buy MATIC to later swap it to NCoin',
        href: null,

        cards: [
            {
                name: 'Buying a MATIC',
                description: 'We go to Spot Wallet and exchange our money for a MATIC.  Wallet -> Fiat and Spot -> Search currency MATIC -> Buy -> Set amount (15 - 5000) -> Continue -> Accept -> Go to Wallet.',
                imageSrc: '/assets/tutorials/binance-buyMatic/1.gif',
            }
        ]
        
    },
    {
        imageSrc: '/assets/tutorials/metamask.png',
        title: 'How to Set-up MetaMask',
        description: 'In this tutorial we show you how to Set-up MetaMask crypto wallet',
        href: 'https://www.canva.com/design/DAEwdWRwAqA/m_pWXIzcyZJHATSI3MPN6g/view?utm_content=DAEwdWRwAqA&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent#1',
    },
    {
        imageSrc: '/assets/tutorials/metamask-withdraw/metamask-withdraw.png',
        title: 'How to transfer Matic to your METAMASK wallet',
        description: 'In this tutorial we show you how to transfer Matic to your Metamask wallet',
        href: null,
        
        cards: [
            {
                name: 'MATIC withdrawal on Metamask',
                description: 'Wallet -> Fiat and Spot -> Search currency MATIC -> Withdraw -> Choose network MATIC Polygon (It should be noted that the chosen network may be suspended. In that case we should make Bridge ) -> Set address getted from Meramask (we can add it to address book) -> Withdraw ( verify the data) -> Continue -> Send.',
                imageSrc: '/assets/tutorials/metamask-withdraw/1.gif',
            }
        ]
    },

]

class TutorialsList extends React.Component {

    constructor(props) {
        super(props);
        this.displayerRef = this.props.displayerRef;

        this.openDisplayer = (tutorialData) => {//spróbować z promises
            let displayer = this.displayerRef.current;

            displayer.openDisplayer(tutorialData);
        }
    }

    render() {
        return (
            <div className="tutorials-list">

                <div className='tutorials-list__main'>

                    <div className='tutorials-list__main__list'>
                        {tutorials.map((tutorial, index) => {
                            return (
                                <TutorialCard
                                    key={index}

                                    imageSrc={tutorial.imageSrc}
                                    buttonHref={tutorial.href}
                                    title={tutorial.title}
                                    description={tutorial.description}
                                    cards={tutorial.cards}

                                    buttonEvent_click={this.openDisplayer} />
                                );
                        })}
                    </div>

                </div>

                {/* <TutorialDisplayer ref={this.displayerRef} /> */}
            </div>

        )
    }
}

export default TutorialsList;