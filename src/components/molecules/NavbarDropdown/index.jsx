import React from "react";
import ReactDOM from "react-dom";

//SCSS
import './NavbarDropdown.scss';

import ButtonNavbar from "../../atoms/ButtonNavbar";
import ButtonDropdown from "../../atoms/ButtonDropdown";


class NavbarDropdown extends React.Component {
    constructor(props) {
        super(props)

        this.isDropdown = this.props.isDropdown;
        
        this.buttons = [];
        if(this.isDropdown) {
            this.buttons = this.props.dropdownButtons;
        }
        

        this.giveList = () => {

            if(this.isDropdown) {
                return (
                    <ul className="navbar-dropdown__buttons">
                        {this.buttons.map( (button, index) => {
                            return <ButtonDropdown key={index} name={button.name} href={button.href} />
                        })}
                    </ul>
                )
            }

        }

    }


    render() {
        return (
        
            <div className="navbar-dropdown">

                <ButtonNavbar isDropdown={this.isDropdown} name={this.props.name} href={this.props.href}/>

                {this.giveList()}
                
            </div>
    
        )
    }
}

export default NavbarDropdown;