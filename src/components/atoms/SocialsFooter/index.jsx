
//SCSS
import './SocialsFooter.scss';

import SocialsStandard from "../SocialsStandard";


let socialsData = [
    {
        name: 'twitter',
        href: 'https://twitter.com/NatlukCommunity',
        faClass: 'fab fa-twitter-square'
    },
    {
        name: 'tellegram',
        href: 'https://t.me/+U0ytPAbVzaVlYmI0',
        faClass: 'fab fa-telegram'
    },
    {
        name: 'xarabek',
        href: 'https://xarabek.com/',
        faClass: 'fas fa-blog'
    },
    {
        name: 'facebook',
        href: 'https://www.facebook.com/datascienceandautomation',
        faClass: 'fab fa-facebook'
    },
    {
        name: 'instagram',
        href: 'https://www.instagram.com/natluk.finance/',
        faClass: 'fab fa-instagram'
    },
    {
        name: 'discord',
        href: 'https://discord.com/invite/Z9zCWma8zf',
        faClass: 'fab fa-discord'
    },
]

const SocialsFooter = () => {
    return <SocialsStandard socialsData={socialsData} customClass={'socials-footer'}/>
}

export default SocialsFooter;