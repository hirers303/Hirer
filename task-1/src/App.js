import './App.css'; 
import AppLinks from './componets/AppLinks';
import FeatureList from './componets/FeatureList';
import Cardd from './componets/Cards';
import Navbar from './main/NavBar';
import Heading from './main/heading';
import Hero from './main/hero';
import Job from './main/jobListing';
import JobRegister from './main/JobRegister';
import Login from './main/login';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='background'>
              {/* <Hero/> */}
              <Heading/>
      </div>
      {/* <Job/> */}
      {/* <JobRegister/> */}
      {/* <Login/> */}

    </div>
  );
}

export default App;