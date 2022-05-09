import React from "react";

//SCSS
import './ButtonFaqMenu.scss';

import ButtonStandard from "../ButtonStandard";

class FaqMenuButton extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.activateSelf = () => {
            this.ref.current.classList.add('active');
        }
        this.deactivateSelf = () => {
            this.ref.current.classList.remove('active');
        }

        
    }

    render() {
        return <ButtonStandard additionalClasses={'button-faq-menu ' + this.props.additionalClasses} customRef={this.ref} text={this.props.categoryName} modifiers={['glass', 'aligned']} onClickEvent={this.props.onClickEvent}/>
    }
    
}

export default FaqMenuButton;