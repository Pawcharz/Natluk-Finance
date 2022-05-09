import React from "react";
import ReactDOM from "react-dom";
import ButtonBack from "../../atoms/ButtonBack";

//SCSS
import './TutorialDisplayer.scss';

import TutorialDisplayerCard from "../../molecules/TutorialDisplayerCard";

class TutorialDisplayer extends React.Component {
    
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.buttonRef = React.createRef();
        
        this.state = {
            title: '',
            description: '',
            imageSrc: '',

            cards: null,
        }

        this.closeDisplayer = () => {
            let node = this.ref.current;
            
            node.classList.add('hidden');
            setTimeout(() => {
                node.style.display = 'none'
            }, 400);

            document.removeEventListener('keydown', escKeyListener); 
        }
        this.openDisplayer = (tutorialData) => {
            let node = this.ref.current;
            
            this.setState( 
                {
                    title: tutorialData.title,
                    description: tutorialData.description,
                    imageSrc: tutorialData.imageSrc,
                    cards: tutorialData.cards
                }
            );

            node.style.display = 'flex';
            setTimeout(() => {
                node.classList.remove('hidden');
            }, 0);

            this.addClosingListeners();
        }

        const escKeyListener = (e) => {

            if (e.key === 'Escape') {
                this.closeDisplayer();
            }
        }
        this.addClosingListeners = () => {
            const whole = this.ref.current;
            const main = whole.querySelector('.tutorial-displayer__main');
            const closeButton = this.buttonRef.current;

            main.addEventListener('click', (e) => {
                if(closeButton == e.target)
                    return;

                let buttonChildren = closeButton.children;
                for (let i = 0; i < buttonChildren.length; i++) {
                    const element = buttonChildren[i];
                    if(element === e.target) {
                        return;
                    }
                }
                e.stopPropagation();
            })
            whole.addEventListener('click', (e) => {
                this.closeDisplayer();
            })

            document.addEventListener('keydown', escKeyListener);
        }

        
        this.renderCards = () => {
            if(this.state.cards) {

                return this.state.cards.map( (card, index) => {
                    return (
                        <TutorialDisplayerCard
                            key={index}
                            name={card.name}
                            description={card.description}
                            imageSrc={card.imageSrc}
                        />
                    )
                })
            }

        }
    }
    

    render() {
        return (
            <div ref={this.props.customRef, this.ref} className="tutorial-displayer hidden" style={{display: "none"}}>
    

                <div className='tutorial-displayer__main'>
                    <div className="tutorial-displayer__main__list">

                        <TutorialDisplayerCard name={this.state.title} description={this.state.description} imageSrc={this.state.imageSrc}/>
                        {this.renderCards()}
                        
                        <ButtonBack customRef={this.buttonRef} onClickEvent={this.closeDisplayer}/>

                    </div> 
                </div>

            </div>
        )
    }
}

export default TutorialDisplayer;