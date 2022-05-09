import React from "react";
import ReactDom from "react-dom";
import SectionStandard from "../SectionStandard";

//SCSS
import './SectionAddLP.scss';

const SectionAddLP = () => {

    return (

        <SectionStandard
            customClass="addLP-section"
            isDouble={true}
            childrenLeft={
                
                <div className="addLP-section">
                    <h1 className="addLP-section__title">liquidity pool</h1>
                    <h3 className="addLP-section__motto">Add MATIC - NC pair to our liquidity pool</h3>
                </div>

            }
            childrenRight={
                <div className="addLP-section__widget"></div>
            }
        />
    )

}


export default SectionAddLP;