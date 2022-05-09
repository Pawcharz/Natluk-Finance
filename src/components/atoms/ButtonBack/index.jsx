import ReactDOM from "react-dom";

//SCSS
import './ButtonBack.scss';



const ButtonBack = ({customRef, onClickEvent}) => {
    return (
        <button ref={customRef} className="button-back" onClick={onClickEvent}>
            <img className="button-back__image" src="/assets/images/arrows/delete-x.png"/>
        </button>
    )
}

export default ButtonBack;