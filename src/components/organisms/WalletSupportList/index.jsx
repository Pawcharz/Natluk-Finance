import ReactDOM from "react-dom";
import React from "react";
//SCSS
import './WalletSupportList.scss';

import WalletSupportCard from '../../molecules/WalletSupportCard/index';

const wallets = [
    {
        imageSrc: '/assets/images/walletIcons/binance.svg',
        href: 'https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp',
        name: 'Binance Chain Wallet',
        description: 'A Crypto Wallet for Binance Smart Chain'
    },
    {
        imageSrc: '/assets/images/walletIcons/metamask.svg',
        href: 'https://metamask.io/download',
        name: 'Metamask',
        description: 'A Wallet & Gateway to Blockchain Apps'
    },
    {
        imageSrc: '/assets/images/walletIcons/trustwallet.svg',
        href: 'https://trustwallet.com/download-page',
        name: 'Trust Wallet',
        description: 'The most Trusted & Secure Crypto Wallet'
    },
    {
        imageSrc: '/assets/images/walletIcons/safepal.svg',
        href: 'https://safepal.io/download',
        name: 'Safepal',
        description: 'Safepal for Binance Smart Chain'
    },
    {
        imageSrc: '/assets/images/walletIcons/math.svg',
        href: 'https://mathwallet.org/en-us/',
        name: 'Math Wallet',
        description: 'Multi-platform cross-chain wallet'
    },

]


class WalletSupportList extends React.Component {

    constructor(props) {
        super(props);
        this.displayerRef = React.createRef();

        this.openDisplayer = (tutorialData) => {
            let displayer = this.displayerRef.current;

            displayer.openDisplayer(tutorialData);
        }
    }

    render() {
        return (
            <div className="wallet-support-list">
    
                <div className='wallet-support-list__main'>
    
                    {/* <h1 className='wallet-support-list__title'>Download Wallets</h1> */}

                    <div className='wallet-support-list__main__list'>

                        {wallets.map( (walletData, index) => {
                            return ( <WalletSupportCard
                            key={index}
                            imageSrc={walletData.imageSrc}
                            href={walletData.href}
                            name={walletData.name}
                            description={walletData.description}/> );
                        })}
    
                    </div>

                </div>
    
            </div>
            
        )
    }
}

export default WalletSupportList;