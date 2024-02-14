import './App.css'; 
import AppLinks from './componets/AppLinks';
import FeatureList from './componets/FeatureList';
import Cardd from './componets/Cards';
import Navbar from './main/NavBar';
import Heading from './main/heading';
import Hero from './main/hero';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='background'>
              {/* <Hero/> */}
              <Heading/>
      </div>

    </div>
  );
}

export default App;