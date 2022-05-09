import React from "react";
import ReactDOM from "react-dom";

//SCSS
import './FaqDisplayer.scss';

import ButtonBack from "../../atoms/ButtonBack";

class FaqDisplayer extends React.Component {
    
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.buttonRef = React.createRef();
        
        this.state = {
            question: '',
            answer: '',
        }

        this.closeDisplayer = () => {
            let node = this.ref.current;
            
            node.classList.add('hidden')
            setTimeout(() => {
                node.style.display = 'none';
            }, 250);

            document.removeEventListener('keydown', escKeyListener); 
        }
        this.openDisplayer = (questionData) => {
            let node = this.ref.current;
            
            this.setState( 
                {
                    question: questionData.question,
                    answer: questionData.answer,
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
            const main = whole.querySelector('.faq-displayer__main');
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
    }
    

    render() {
        return (
            <div ref={this.props.customRef, this.ref} className="faq-displayer hidden" style={{display: 'none'}}>
    
                <div className='faq-displayer__main'>

                    <h3 className="faq-displayer__main__question">{this.state.question}</h3>

                    <h4 className="faq-displayer__main__answer">{this.state.answer}</h4>


                    <ButtonBack customRef={this.buttonRef} onClickEvent={this.closeDisplayer}/>
                </div>
            </div>
        )
    }
}

export default FaqDisplayer;