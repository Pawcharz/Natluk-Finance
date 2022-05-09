import React from "react";
import ReactDOM from "react-dom";

//SCSS
import './TutorialCard.scss';

import ButtonStandard from "../../atoms/ButtonStandard";

class TutorialCard extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();

        this.buttonText = 'Watch Video';
        if(this.props.buttonHref) {
            this.buttonText = 'See Presentation'
        }

        this.buttonEvent_click_fixed = () => {
            
            let tutorialData = {
                title: this.props.title,
                imageSrc: this.props.imageSrc,
                description: this.props.description,

                cards: this.props.cards
            }
            this.props.buttonEvent_click(tutorialData);
        }
    }    

    render () {
        return (
        
            <div ref={this.ref} className="tutorial-card">
    
                <div className="tutorial-card__left">
    
                    <h1 className="tutorial-card__left__title">{this.props.title}</h1>
                    <h4 className="tutorial-card__left__description">{this.props.description}</h4>
    
                    <ButtonStandard href={this.props.buttonHref} newTab={true} text={this.buttonText} onClickEvent={this.buttonEvent_click_fixed}/>
                </div>
    
                <div className="tutorial-card__right">
                    <img src={this.props.imageSrc} alt=""/>
                </div>
    
            </div>
    
        )
    }
    

    
}

export default TutorialCard;