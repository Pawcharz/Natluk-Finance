import HeaderHome from '../components/organisms/HeaderHome';
import SubsectionStats from '../components/organisms/Subsections/SubsectionStats';
import SubsectionAbout from '../components/organisms/Subsections/SubsectionAbout';
import SubsectionWorks from '../components/organisms/Subsections/SubsectionWorks';

export const HomePage = () => {
  return (
    <>
        <HeaderHome/>
        <SubsectionStats/>
        <SubsectionAbout/>
        <SubsectionWorks/>
    </>
  );
}

export default HomePage;
