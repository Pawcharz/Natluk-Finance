import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

//SCSS
import "./ButtonStandard.scss";

function ButtonStandard({ modifiers, customClass = "", text, href, newTab, onClickEvent, customRef }) {
    let classes = " " + customClass;
    if (modifiers) {
        for (let i = 0; i < modifiers.length; i++) {
            classes += " button-standard" + "--" + modifiers[i];
        }
    }

    if (href && href.startsWith("/")) {
        return (
            <Link to={href} className={`button-standard ${classes}`}>
                <h5>{text}</h5>
            </Link>
        );
    }

    if (href) {
        if (newTab) {
            return (
                <a ref={customRef} href={href} target="_blank" className={`button-standard ${classes}`}>
                    <h5>{text}</h5>
                </a>
            );
        } else {
            return (
                <a ref={customRef} href={href} className={`button-standard ${classes}`}>
                    <h5>{text}</h5>
                </a>
            );
        }
    } else {
        return (
            <button ref={customRef} className={"button-standard" + classes} onClick={onClickEvent}>
                <h5>{text}</h5>
            </button>
        );
    }
}

export default ButtonStandard;
