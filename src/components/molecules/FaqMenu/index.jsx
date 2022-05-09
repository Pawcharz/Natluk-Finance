import React from "react";
import ReactDOM from "react-dom";

//SCSS
import './FaqMenu.scss';

import FaqMenuButton from "../../atoms/FaqMenuButton";
class FaqMenu extends React.Component {

    constructor(props) {
        super(props);

        this.buttonRefs = [];
        for (let i = 0; i <= this.props.categories.length; i++) {
            this.buttonRefs.push(React.createRef());
        }


        this.selectFunction_fixed = (name) => {
            this.buttonRefs.forEach( elem => {
                let buttonComp = elem.current;
                
                if (buttonComp.props.categoryName == name) 
                    buttonComp.activateSelf();
                else
                    buttonComp.deactivateSelf();
            })


            this.props.selectFunction(name);
        }
    }    

    render () {
        return (
        
            <div ref={this.ref} className="faq-menu">
                <FaqMenuButton ref={this.buttonRefs[0]} categoryName='ALL' additionalClasses='active' onClickEvent={() => {
                    this.selectFunction_fixed('ALL');
                }}/>

                {this.props.categories.map( (name, index) => {
                    return (
                    <FaqMenuButton
                        ref={this.buttonRefs[index+1]}
                        categoryName={name}
                        key={name}
                        onClickEvent={ () => {
                            this.selectFunction_fixed(name);
                        }}
                    />)
                })}
    
            </div>
    
        )
    }    
}

export default FaqMenu;