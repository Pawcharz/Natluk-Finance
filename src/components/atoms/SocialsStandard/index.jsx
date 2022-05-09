import ReactDOM from "react-dom";

//SCSS
import "./SocialsStandard.scss";

const SocialsStandard = ({ socialsData, customClass }) => {
    return (
        <div className={`socials-standard ${customClass}`}>
            {socialsData.map((elem) => {
                return <a key={elem.name} href={elem.href} className={`socials-standard__icon ${elem.faClass}`}></a>;
            })}
        </div>
    );
};

export default SocialsStandard;
