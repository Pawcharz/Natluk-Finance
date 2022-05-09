
//SCSS
import './RoadmapSection.scss';

import RoadmapCard from './RoadmapCard';


const cardsData = [
    {
        time: 'Q3 2021',
        name: 'ORIGIN OF THE IDEA',
        description: [
            '',
            '',
        ]
    },
    {
        time: 'Q4 2021',
        name: 'TOKENOMICS',
        description: [
            '',
            '',
        ]
    },
    {
        time: 'Q4 2021',
        name: 'NC ON DEXTOOLS',
        description: [
            '',
            '',
        ]
    },
    {
        time: 'Q4 2021',
        name: 'LIQUIDITY POOL',
        description: [
            '',
            '',
        ]
    },
    {
        time: 'Q4 2021',
        name: 'YIELD FARMING',
        description: [
            '',
            '',
        ]
    },
    {
        time: 'Q4 2021',
        name: 'FIRST WEBSITE CONCEPT',
        description: [
            'We created a contest for the best website project.',
            'From all works the best one was chosen and developed.',
        ]
    },
    {
        time: 'Q1 2022',
        name: 'SECOND WEBSITE VERSION',
        description: [
            'After weeks of hard work, our developers team finally created the current version of the webpage that you are reading at the moment.',
            "Of course, there are still some parts missing but we are working hard to upgrade them.",
        ]
    },
    {
        time: 'Q1 2021',
        name: 'WALLET REPUTATION SYSTEM',
        description: [
            '',
            '',
        ]
    },
    {
        time: 'Q2 2022',
        name: 'DASHBOARD',
        description: [
            'Coming Soon',
        ]
    },
    {
        time: 'Q2 2022',
        name: 'WHITE PAPER',
        description: [
            'Coming Soon',
        ]
    },
    {
        time: 'Q2 2022',
        name: 'SMART MONEY ANALYSIS',
        description: [
            'Coming Soon',
        ]
    },
    {
        time: 'Q2 2022',
        name: 'GENESIS ANALYSIS',
        description: [
            'Coming Soon',
        ]
    },
    {
        time: 'Q2 2022',
        name: 'NC COIN ON MAJOR EXCHANGES',
        description: [
            'Coming Soon',
        ]
    },
    {
        time: 'Q4 2022',
        name: 'GENESIS NFT',
        description: [
            'Coming Soon',
        ]
    },
]

const RoadmapSection = () => {
    return (
        <div className="section-roadmap">
            <div className="section-roadmap__main">
                <h1 className="title">ROADMAP</h1>
                <h4 className="description">
                    For now, our road map depends on many factors, such as the number of NFTs sold and the release date of Nano Contracts by the Hathor Network
                    team, so it is still being continuously updated.
                    <br />
                    <br />
                    At the moment, the overall roadmap can be presented as follows
                </h4>

                <div className="section-roadmap__main__list">
                    {cardsData.map((singleData, index) => {
                        return <RoadmapCard key={index} data={singleData} />;
                    })}
                </div>
            </div>
        </div>
    );
}


export default RoadmapSection;