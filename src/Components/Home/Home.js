import Courses from '../Courses/Courses';
import HomeHero from '../HomeHero/HomeHero';

const Home = ({courses}) => {
     return (
          <>
               <HomeHero></HomeHero>
               <Courses courses={courses}></Courses>
          </>
     );
};

export default Home;