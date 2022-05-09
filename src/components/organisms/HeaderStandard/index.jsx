import React from "react";
import ReactDom from "react-dom";

//SCSS
import './HeaderStandard.scss';

function HeaderStandard({childrenLeft, childrenRight, customClass='', modifiers=[]}) {
    let classes = " "+customClass;
    if(modifiers) {
        for(let i = 0; i < modifiers.length; i++) {
            classes += " header-standard"+"--"+modifiers[i];
        }
    }

    return (

        <header className={`header-standard ${classes}`}>

            <div className="stars">
                <div className="stars-1"></div>
                <div className="stars-2"></div>
                <div className="stars-3"></div>
            </div>

            <main className='header-standard__main'>

                <div className="header-standard__main__left">
                    {childrenLeft}
                </div>

                <div className="header-standard__main__right">
                    {childrenRight}
                </div>

            </main>

        </header>

    )

}


export default HeaderStandard;