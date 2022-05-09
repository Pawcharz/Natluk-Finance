import Header from '../components/organisms/HeaderStandard';

import RoadmapSection from "../components/organisms/RoadmapSection";

const HeaderLeft = () => {
    return (
        <h1>See the future of NC!</h1>
    )
}
import SpinningCoin from "../components/atoms/SpinningCoin";

const HeaderRight = () => {
    return (
        <SpinningCoin floating={true}/>
    )
}

export const RoadmapPage = () => {
    return (
        <>
            <Header childrenLeft={<HeaderLeft/>} childrenRight={<HeaderRight/>}/>
            <RoadmapSection/>
        </>
    )
}

export default RoadmapPage;