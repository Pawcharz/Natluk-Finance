//SCSS
import './SubsectionWorks.scss'

import SectionStandard from '/src/components/organisms/SectionStandard'
import WorksCard from './WorksCard'

const SubsectionWorks = () => {
    return (
        <SectionStandard customClass='section-works' modifiers={['unlimited']}>

            <div className='section-works__title-container'>
                <h1 className='title'>How does <span className='text-neon'>NC</span> work?</h1>
            </div>
            

            <div className='section-works__main'>
                <WorksCard
                    number={1}
                    name={'Get NC from Quickswap!'}
                    buttonName='Quickswap'
                    buttonHref='https://quickswap.exchange/#/swap?outputCurrency=0x64a795562b02830ea4e43992e761c96d208fc58d'
                    imageSrc='/assets/images/homePage/quickswap.png'
                />

                <WorksCard
                    number={2}
                    name={'Add NC to Liquidity Pool!'}
                    buttonName='Pool'
                    buttonHref='https://quickswap.exchange/#/pool'
                    imageSrc='/assets/images/homePage/pool.webp'
                />

                <WorksCard
                    number={3}
                    name={'Add LP Tokens to our Yield farm!'}
                    buttonName='Yield Farming'
                    buttonHref='https://app.gysr.io/pool/0x848fb22212e6d7fdd80cd38df847fc22c13e4755'
                    imageSrc='/assets/images/homePage/yield.png'
                />
            </div>
            
        </SectionStandard>
    )
}
export default SubsectionWorks;