//SCSS
import './SubsectionAbout.scss'

import SectionStandard from '/src/components/organisms/SectionStandard'
import SpinningCoin from '/src/components/atoms/SpinningCoin'

const SubsectionLeft = () => {
    return (
        <div className='section-about__left'>
            <h1 className='section-about__left__title'>What is <span className='text-neon'>NC</span></h1>
            <h5 className='section-about__left__description'>
                NatLuk is Decentralized community of technology, started in 2020 due to covid. In our center of interest you can find things like Digital Transformation, Data Science, Automation and solve complex problems with digital tools like software engineering with Artificial Intelligence or Machine Learning. In our group we have wide selection of professionals around the globe working for best companies in the world like Google, Intel, PwC, Accenture, Santander, Caterpillar, Comarch as well we have some represents that are working for Polish Space Agency! We have many PhD professionals as well as many students. We are passionate in what we do, we are not afraid of any challenges, we are a team who works together, communicate well and delivers pure value while priorities and technology changes very often, we are on the top of that, and as soon there is something new, we know about it, we tested it and now how to apply that in real life scenario. We have very good relationship with many professionals from different industries which are very likely to exchange experience and best practices with us.
            </h5>
        </div>
    )
}
const SubsectionAbout = () => {
    return (
        <SectionStandard isDouble={true} customClass='section-about' modifiers={['wide']}
            childrenLeft={<SubsectionLeft />}
            childrenRight={<SpinningCoin floating={true}/>}
        />
    )
}
export default SubsectionAbout;