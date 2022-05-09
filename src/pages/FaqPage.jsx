import Header from '../components/organisms/HeaderStandard';
import SpinningCoin from "../components/atoms/SpinningCoin";

import FaqList from '../components/organisms/FaqList'



const HeaderLeft = () => {
    return (
        <h1>Check most asked questions</h1>
    )
}

const HeaderRight = () => {
    return (
        <SpinningCoin floating={true}/>
    )
}

export const FaqPage = () => {
    return (
        <>
            <Header childrenLeft={<HeaderLeft/>} childrenRight={<HeaderRight/>}/>
            <FaqList/>
        </>
    )
}

export default FaqPage;