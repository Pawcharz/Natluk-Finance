import React from "react";
import ReactDOM from "react-dom";

//SCSS
import './NavbarMenu.scss';

import LogoStandard from "../../atoms/LogoStandard";
import ButtonNavbarMenu from "../../atoms/ButtonNavbarMenu";
import NavbarDropdown from "../NavbarDropdown";

class NavbarMenu extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
        <nav ref={this.props.customRef} className="menu-navbar">

            <div className="menu-navbar__greyarea">
                <div className="menu-navbar__main">

                    <div className="menu-navbar__main__topbar">
                        <LogoStandard/>
                        <ButtonNavbarMenu onClickEvent={this.props.closeFunction}/>
                    </div>
                
                    <ul className="menu-navbar__main__list">

                        {this.props.buttons.map((button, index) => {
                            return <NavbarDropdown key={index} name={button.name} href={button.href} isDropdown={button.isDropdown} dropdownButtons={button.dropdownButtons}/>
                        })}
        
                    </ul>

                </div>
            </div>

        </nav>
        )
    }
}

export default NavbarMenu;