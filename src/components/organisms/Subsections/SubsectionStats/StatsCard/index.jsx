//SCSS
import './StatsCard.scss'

const fixPrice = (price) => {
    const priceStr = price.toString();
    const priceArr = priceStr.split('.');

    let leftSide = priceArr[0];
    const rightSide = priceArr[1];

    for (let i = leftSide.length - 4; i >= 0; i-=3) {
        const pos = leftSide[i];

        leftSide = leftSide.slice(0, i+1) + "," + leftSide.slice(i+1);
    }

    return `$${leftSide + '.' + rightSide}`;
}
const StatsCard = ({name='', value=0}) => {
    return (
        <div className='stats-card'>
            <div className='stats-card__back'></div>

            <div className='stats-card__main'>
                <h4 className="stats-card__main__name">{name}</h4>
                <h4 className="stats-card__main__value">{fixPrice(value)}</h4>
            </div>
        </div>
    )
}
export default StatsCard;