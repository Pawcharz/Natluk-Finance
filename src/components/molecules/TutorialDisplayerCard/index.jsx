import React from "react";

//SCSS
import './TutorialDisplayerCard.scss';


class TutorialDisplayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="tutorial-displayer-card">
                <img className="tutorial-displayer-card__image" src={this.props.imageSrc}/>
                <h1 className="tutorial-displayer-card__name">{this.props.name}</h1>
                <h4 className="tutorial-displayer-card__description">{this.props.description}</h4>

                <div className="tutorial-displayer-card__divider">__ __ __ __ __ __ __ __ __</div>
            </div>
        )
    }
}

export default TutorialDisplayerCard;