import React from 'react'

import Header from '../components/organisms/HeaderStandard';
import Section from '../components/organisms/SectionStandard';

import TutorialsList from '../components/organisms/TutorialsList'
import TutorialDisplayer from '../components/organisms/TutorialDisplayer'

const HeaderLeft = () => {
    return (
        <h1>Learn how to purchase <span>NC</span></h1>
    )
}
import SpinningCoin from "../components/atoms/SpinningCoin";

const HeaderRight = () => {
    return (
        <SpinningCoin floating={true}/>
    )
}

class TutorialsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let tutorialDisplayerRef = React.createRef();

        return (
            <>
                <Header childrenLeft={<HeaderLeft/>} childrenRight={<HeaderRight/>}/>
                <TutorialDisplayer ref={tutorialDisplayerRef} />
                <TutorialsList displayerRef={tutorialDisplayerRef}/>
            </>
        )
    }
}

export default TutorialsPage;