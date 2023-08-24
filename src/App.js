import './App.css';
import Chennai from './Components/Chennai';
import ImgSlider from './Components/ImgSlider';
import Navbar from './Components/Navbar';
import TouristPlaces from './Components/TouristPlaces';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Rameswaram from './Components/Rameswaram';
import Kodaikanal from './Components/Kodaikanal';
import Ooty from './Components/Ooty';
import Kanyakumari from './Components/Kanyakumari';
import Kumbakonam from './Components/Kumbakonam';
import Madurai from './Components/Madurai';
import Yarcaud from './Components/Yarcaud';
import Theni from './Components/Theni';
import Hogenakkal from './Components/Hogenakkal';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ImgSlider />
      <TouristPlaces />
      <Chennai />
      <Rameswaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yarcaud />
      <Theni/>
      <Hogenakkal />
    </div>
  );
}

export default App;