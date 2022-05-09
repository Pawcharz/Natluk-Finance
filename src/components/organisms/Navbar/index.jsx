import React from "react";
import ReactDom from "react-dom";

//SCSS
import './Navbar.scss';

import LogoStandard from '../../atoms/LogoStandard';
import SocialsNavbar from '../../atoms/SocialsNavbar';
import NavbarOpenMenuButton from '../../atoms/ButtonNavbarMenu';
import NavbarMenu from "../../molecules/NavbarMenu";


const navbarButtons = [
    {
        name: "Roadmap",
        href: "/roadmap",

        isDropdown: false,
    },
    {
        name: "Whitepaper",
        href: "/whitepaper",

        isDropdown: false,
    },
    {
        name: "Learn",
        href: "#",

        isDropdown: true,
        dropdownButtons: [

            {
                name: "Tutorials",
                href: "/tutorials"
            },
            {
                name: "Docs",
                href: "https://natluk-community.gitbook.io/natluk-community/"
            },
            {
                name: "Wallet Support",
                href: "/wallets"
            },
            {
                name: "FAQ",
                href: "/faq"
            },
        ]
    },
    {
        name: "Dashboard",
        href: "/dashboard",

        isDropdown: false,
    },
]

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.menuRef = React.createRef();

        this.toggleMenu = () => {
            let menuEl = this.menuRef.current;

            const button1 = document.querySelector('.button-navbar-menu');
            
            
            if( menuEl.classList.contains('active') ) {
                button1.classList.remove('active');
                menuEl.classList.remove('active');
                setTimeout(() => {
                    menuEl.style.display = 'none';
                }, 400);
            }
            else {
                menuEl.style.display = 'flex';
                setTimeout(()=>{
                    menuEl.classList.add('active');
                    button1.classList.add('active');
                }, 0);
            }
        }
        

        const showMenu = () => {
            let menuEl = this.menuRef.current;
            
            menuEl.style.display = 'flex';
            menuEl.classList.add('active')
        }
        const hideMenu = () => {
            let menuEl = this.menuRef.current;

            menuEl.style.display = 'none';
            menuEl.classList.remove('active');
        }
        const onResizeListener = () => {
            if(window.innerWidth >= 992)
                showMenu();
            else
                hideMenu();
        }
        window.onresize = onResizeListener;
    }

    render() {
        return (

            <div className="navbar">
    
                <div className="navbar__main">
                    
                    <LogoStandard/>
                    
                    <NavbarMenu customRef={this.menuRef} buttons={navbarButtons} closeFunction={this.toggleMenu}/>
    
                    <SocialsNavbar/>
                    <NavbarOpenMenuButton onClickEvent={this.toggleMenu}/>
    
                </div>
    
            </div>
    
        )
    }
}

export default Navbar;