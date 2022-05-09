//SCSS
import './SectionStats.scss'
import StatsCard from './StatsCard';
import SectionStandard from '/src/components/organisms/SectionStandard'

const SubsectionStats = () => {
    return (
        <SectionStandard customClass='section-stats' modifiers={['wide']}>
            <StatsCard name='Market cap' value={314501.8}/>
            <StatsCard name='Price' value={0.00031383}/>
            <StatsCard name='Total liquidity' value={4398.02}/>
            <StatsCard name='Pooled NC' value={6991372.46}/>
        </SectionStandard>
    )
}
export default SubsectionStats;