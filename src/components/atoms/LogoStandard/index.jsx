//SCSS
import "./LogoStandard.scss";
import { Link } from "react-router-dom";

function LogoStandard({ longer, modifiers = [] }) {
    let classes = "";
    for (let i = 0; i < modifiers.length; i++) {
        classes += " logo-standard" + "--" + modifiers[i];
    }

    return (
        <Link to="/" className={`logo-standard ${classes}`}>
            <img className="logo-standard__icon" src="/assets/images/logo-NC.png" aria-hidden="true" />
            <img className="logo-standard__text" src="/assets/images/NATLUK-text.png" alt="Natluk" />
        </Link>
    );
}

export default LogoStandard;
