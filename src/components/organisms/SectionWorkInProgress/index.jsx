//SCSS
import './SectionWorkInProgress.scss';


import SectionStandard from "../SectionStandard";

const SectionWorkInProgress = () => {
    return (
        <SectionStandard customClass="section-workInProgress" modifiers={['vertical']}>
            <div className="section-workInProgress__bar">
                <h1>Our team of developers is still working on this section!</h1>
            </div>
        </SectionStandard>
    )
}


export default SectionWorkInProgress;