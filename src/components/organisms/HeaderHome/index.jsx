
// SCSS
import './HeaderHome.scss'

import HeaderStandard from "../HeaderStandard"
import SpinningGlobe from './SpinningGlobe'
import ButtonStandard from '../../atoms/ButtonStandard'
import LogoStandard from '../../atoms/LogoStandard'

const HeaderLeft = () => {
    return (
        <div className="header-left">


            <div className='container-logo'>
                <LogoStandard longer={true} modifiers={['white']}/>
                {/* <h5 className="container-logo__motto">Where (3,3) becomes (4,4)</h5> */}
            </div>
                   
            <main className='header-left__main'>
                <h1 className="header-left__main__title">Let's Build Wealth</h1>

                <ul className='header-left__main__list'>
                    <li><h4>When you have <span className='text-neon'>paper hands</span>, you sell too early.</h4></li>

                    <li><h4>When you have <span className='text-neon'>diamond hands</span>, you HODL until you reach your goal.</h4></li>

                    <li><h4>When you have <span className='text-neon'>smart hands</span>, you stake and move towards WEALTH!</h4></li>
                </ul>
            </main>

            <div className="container-buttons">
                <ButtonStandard text='Dashboard' href='https://nc-dashboard-app.herokuapp.com/'/>
                <ButtonStandard text='Roadmap' href='/roadmap' modifiers={['transparent']}/>
            </div>
            
        </div>
    )
}
const HeaderHome = () => {
    return (
        <HeaderStandard childrenLeft={<HeaderLeft/>} childrenRight={<SpinningGlobe/>} customClass='header-home' modifiers={['wide']}/>
    )
}
export default HeaderHome