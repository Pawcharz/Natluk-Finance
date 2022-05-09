import React from "react";
import ReactDOM from "react-dom";

//SCSS
import './WalletSupportCard.scss';

import ButtonStandard from "../../atoms/ButtonStandard";

class WalletSupportCard extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();

        this.buttonEvent_click_Fixed = () => {
            
            let tutorialData = {
                title: this.props.title,
                imageSrc: this.props.imageSrc
            }
            this.props.buttonEvent_click(tutorialData);
        }
    }    

    render () {
        return (
        
            <div ref={this.ref} className="wallet-support-card">
    
                <img className="wallet-support-card__icon" src={this.props.imageSrc} alt=""/>

                <div className="wallet-support-card__text">
    
                    <h3 className="wallet-support-card__text__walletName">{this.props.name}</h3>
                    <h5 className="wallet-support-card__text__description">{this.props.description}</h5>
                    
                </div>
    
                <ButtonStandard href={this.props.href} newTab={true} text="Download" modifiers={['glass', 'slim', 'rounded-m']}/>
    
            </div>
    
        )
    }
    

    
}

export default WalletSupportCard;