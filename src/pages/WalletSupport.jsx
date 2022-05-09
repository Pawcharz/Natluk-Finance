import Header from '../components/organisms/HeaderStandard';
import Section from '../components/organisms/SectionStandard';

import WalletSupportList from "../components/organisms/WalletSupportList";

const HeaderLeft = () => {
    return (
        <h1>Download useful wallets</h1>
    )
}
import SpinningCoin from "../components/atoms/SpinningCoin";
const HeaderRight = () => {
    return (
        <SpinningCoin floating={true}/>
    )
}

const WalletSupportPage = () => {
    return (
        <>
            <Header childrenLeft={<HeaderLeft/>} childrenRight={<HeaderRight/>}/>
            <WalletSupportList/>
        </>
    )
}

export default WalletSupportPage;