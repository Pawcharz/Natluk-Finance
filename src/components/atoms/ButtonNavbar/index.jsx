import { Link } from "react-router-dom";

//SCSS

import "./ButtonNavbar.scss";

function ButtonNavbar({ isDropdown, name, href }) {
    if (isDropdown) {
        return (
            <div className="button-navbar">
                <div className="button-navbar__main">
                    <h4 className="button-navbar__main__name">{name}</h4>
                    <i className="button-navbar__main__arrow fas fa-angle-right"></i>
                </div>
            </div>
        );
    } else {
        if (href.startsWith("http")) {
            return (
                <a href={href} className="button-navbar">
                    <div className="button-navbar__main">
                        <h4 className="button-navbar__main__name">{name}</h4>
                    </div>
                </a>
            );
        } else {
            return (
                <Link to={href} className="button-navbar">
                    <div className="button-navbar__main">
                        <h4 className="button-navbar__main__name">{name}</h4>
                    </div>
                </Link>
            );
        }
    }
}

export default ButtonNavbar;
