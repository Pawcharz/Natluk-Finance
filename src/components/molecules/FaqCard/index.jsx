import React from "react";
import ReactDOM from "react-dom";

//SCSS
import './FaqCard.scss';

import ButtonStandard from "../../atoms/ButtonStandard";
import ButtonFaq from "../../atoms/ButtonFaq";

class FaqCard extends React.Component {

    constructor(props) {
        super(props);

        this.maxAnswerLength = 100;
        
        this.fixAnswer = () => {
            let answer = this.props.answer;
            let wordsArr = answer.split(' ');
            
            let result = '';

            for(let i = 0, l = 0; i < wordsArr.length; i++) {

                let word = wordsArr[i];
                result += ' ' + word;

                l += word.length;
                if(l > this.maxAnswerLength) {
                    return {
                        answer: result.trim(),
                        wasShortened: true
                    }
                }
            }

            return {
                answer: result.trim(),
                wasShortened: false
            }
        }
        this.buttonEvent_click_Fixed = () => {
            
            let questionData = {
                question: this.props.question,
                answer: this.props.answer
            }
            this.props.buttonEvent_click(questionData);
        }
        this.answerData = this.fixAnswer();
        
        this.renderButton = () => {
            if(this.answerData.wasShortened) {
                return <ButtonStandard text="read more" modifiers={['small']} onClickEvent={this.buttonEvent_click_Fixed}/>;
            }
            else {
                return;
            }
        }
    }    

    render () {
        return (
        
            <div ref={this.ref} className="faq-card">
    
                <h3 className="faq-card__question">{this.props.question}</h3>
                <h5 className="faq-card__answer">{this.answerData.answer}</h5>

                
                {this.renderButton()}
            </div>
    
        )
    }
    

    
}

export default FaqCard;