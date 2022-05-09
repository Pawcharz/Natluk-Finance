
//SCSS
import './SocialsNavbar.scss';

import SocialsStandard from "../SocialsStandard";


let socialsData = [
    {
        name: 'xarabek',
        href: 'https://xarabek.com/',
        faClass: 'fas fa-blog'
    },
    {
        name: 'twitter',
        href: 'https://twitter.com/NatlukCommunity',
        faClass: 'fab fa-twitter-square'
    },
    {
        name: 'discord',
        href: 'https://discord.com/invite/Z9zCWma8zf',
        faClass: 'fab fa-discord'
    },
]

const SocialsNavbar = () => {
    return <SocialsStandard socialsData={socialsData} customClass={'socials-navbar'}/>
}

export default SocialsNavbar;