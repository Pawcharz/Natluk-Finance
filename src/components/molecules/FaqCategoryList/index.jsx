import React from 'react';

//SCSS
import './FaqCategoryList.scss';


import FaqCard from '../FaqCard';

class FaqCategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef()

        this.hideSelf = () => {
            this.ref.current.classList.add('hidden')
            setTimeout(() => {
                this.ref.current.style.display = 'none';
            }, 200);
        }
        this.showSelf = () => {
            this.ref.current.style.display = 'flex';
            setTimeout(() => {
                this.ref.current.classList.remove('hidden')
            }, 0);
        }
    }


    render() {
        return (
    
            <div ref={this.ref} id={this.props.categoryData.name} className="faq-category-list">

                <h4 className='faq-category-list__name'>{this.props.categoryData.name}</h4>

                <div className="faq-category-list__main">
                    
                    {this.props.categoryData.cardsList.map((cardData, index) => {
                        return ( <FaqCard
                        key={index}
                        question={cardData.question}
                        answer={cardData.answer}
                        buttonEvent_click={this.props.buttonEvent_click}/>);
                    })}
                </div>

            </div>
    
        )
    }
}

export default FaqCategoryList;