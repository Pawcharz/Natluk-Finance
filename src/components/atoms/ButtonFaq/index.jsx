import React from 'react';

//SCSS
import './ButtonFaq.scss';

class ButtonFaq extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.onClick = () => {

            const elem = this.ref.current;

            elem.classList.toggle('active');
            this.props.onClickEvent();
        }
    }


    render() {
        return (
    
            <button ref={this.ref} onClick={this.onClick} className="button-faq">
                <img className="button-faq__img" src="/assets/images/test.jpg"/>
            </button>
    
        )
    }
}

export default ButtonFaq;