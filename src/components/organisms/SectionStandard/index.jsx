import React from "react";
import ReactDom from "react-dom";

//SCSS
import './SectionStandard.scss';

function SectionStandard({isDouble = false, customClass='', modifiers=[], children, childrenLeft, childrenRight}) {
    let classes = " "+customClass;
    if(modifiers) {
        for(let i = 0; i < modifiers.length; i++) {
            classes += " section-standard"+"--"+modifiers[i];
        }
    }

    if(isDouble) {
        return (

            <section className={`section-standard ${classes}`}>
                <main className="section-standard__main">
    
                    <div className="section-standard__main__left">
                        {childrenLeft}
                    </div>
    
                    <div className="section-standard__main__right">
                        {childrenRight}
                    </div>
    
                </main>
            </section>
        )
    }
    else {
        return (

            <section className={`section-standard ${classes}`}>
                <main className="section-standard__main">

                    {children}
                    {childrenLeft}
                    {childrenRight}
    
                </main>
            </section>
        )
    }
    

}


export default SectionStandard;