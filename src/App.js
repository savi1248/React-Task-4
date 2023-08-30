import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

 import Placestovisit from './Components/Placestovisit';
 import Home from './Components/Home';
import Besttimetovisit from './Components/Besttimetovisit';
 import Packages from './Components/Packages'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Places' element={<Placestovisit/>} />
        <Route path='/Best' element={<Besttimetovisit/>} />
        <Route path='/Packages' element={<Packages/>} />
         
        </Routes>
      </BrowserRouter>
      
    
      

      
      
     
      

    </div>
  );
}

export default App;