//SCSS
import ButtonStandard from "../../../../atoms/ButtonStandard";
import "./WorksCard.scss";

const WorksCard = ({ number, name, imageSrc = "", buttonName = "", buttonHref = "" }) => {
    return (
        <div className="works-card">
            <p className="works-card__number">{number}</p>

            <div className="works-card__main">
                <img className="works-card__main__image" src={imageSrc} />

                <h4 className="works-card__main__name">{name}</h4>

                <div className="slider">
                    <a href={buttonHref} className="slider__button">
                        {" "}
                        <h5>{buttonName}</h5>{" "}
                    </a>
                </div>
            </div>
        </div>
    );
};
export default WorksCard;
