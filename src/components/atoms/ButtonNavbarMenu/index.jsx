import ReactDOM from "react-dom";

//SCSS
import './ButtonNavbarMenu.scss';

function ButtonNavbarMenu({onClickEvent}) {
    return (

        <button className="button-navbar-menu" onClick={onClickEvent}>
               <span className="bar "></span>
               <span className="bar"></span>
               <span className="bar"></span>
        </button>

    )
}

export default ButtonNavbarMenu;