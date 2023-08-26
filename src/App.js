import './App.css';

import Navbar from './Components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Places from './Components/Places';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Chennaito from './Components/Chennaito';
import Rameshwaramto  from './Components/Rameshwaramto';
import Kodaikanalto  from './Components/Kodaikanalto';
import Ootyto  from './Components/Ootyto';
import Maduraito  from './Components/Maduraito';
import Kanyakumarito  from './Components/Kanyakumarito';
import Kumbakonamto from './Components/Kumbakonamto';
import Yercardto from './Components/Yercardto';
import Hogenakkalto from './Components/Hogenakkalto';
import  Thenito from './Components/Thenito'








function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Places' element={<Places />} />

        </Routes>
      </BrowserRouter>
      <Chennaito />
      <Rameshwaramto />
       <Kodaikanalto />
      <Ootyto />
      <Maduraito />
      <Kanyakumarito />
      <Kumbakonamto />
      <Yercardto />
      <Thenito />
      <Hogenakkalto /> 

      
      
     
      

    </div>
  );
}

export default App;