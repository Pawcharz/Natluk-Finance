
//SCSS
import './RoadmapCard.scss';

const RoadmapCard = ({data}) => {
    return (
        <div className="roadmap-card">
            <div className="roadmap-card__left">
                <h2 className="roadmap-card__left__time">{data.time}</h2>
                <h3 className="roadmap-card__left__name">{data.name}</h3>
            </div>

            <div className="roadmap-card__right">
                {data.description.map((line, index) => {
                    return <h4 key={index}>{line}</h4>;
                })}
            </div>
        </div>
    );
}


export default RoadmapCard;