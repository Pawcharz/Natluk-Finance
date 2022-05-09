// SCSS
import './Footer.scss'

import LogoStandard from '/src/components/atoms/LogoStandard'
import ButtonStandard from '/src/components/atoms/ButtonStandard'
import SocialsFooter from '../../atoms/SocialsFooter'

const Footer = () => {
    return (
        <div className='footer'>
            <main className='footer__main'>
                <LogoStandard longer={true} modifiers={['white']}/>

                <SocialsFooter/>
                <ButtonStandard text='Dashboard' href='/dashboard' modifiers={['glass']}/>

            </main>
        </div>
    )
}

export default Footer;