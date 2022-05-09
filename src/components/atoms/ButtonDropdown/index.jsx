import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

//SCSS
import "./ButtonDropdown.scss";

function ButtonDropdown({ name, href }) {
    if (href.startsWith("http")) {
        return (
            <a href={href} className="button-dropdown">
                <h4 className="button-dropdown__name">{name}</h4>
            </a>
        );
    } else {
        return (
            <Link to={href} className="button-dropdown">
                <h4 className="button-dropdown__name">{name}</h4>
            </Link>
        );
    }
}

export default ButtonDropdown;
