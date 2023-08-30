import React from 'react'
import Places from './Placestovisit/Places'
import Chennaito from './Placestovisit/Chennaito';
import Rameshwaramto  from './Placestovisit/Rameshwaramto';
import Kodaikanalto  from './Placestovisit/Kodaikanalto';
import Ootyto  from './Placestovisit/Ootyto';
import Kanyakumarito  from './Placestovisit/Kanyakumarito';
import Kumbakonamto  from './Placestovisit/Kumbakonamto';
import Maduraito from './Placestovisit/Maduraito';
import Yercardto from './Placestovisit/Yercardto';
import Thenito from './Placestovisit/Thenito';
import  Hogenakkalto from './Placestovisit/Hogenakkalto';
 
const Placestovisit = () => {
  return (
    <div className='container'>
    <Places/>
      <Chennaito />
      <Rameshwaramto />
      <Kodaikanalto />
      <Ootyto />
      
      <Kanyakumarito />
       
       <Kumbakonamto />
      <Maduraito />
      <Yercardto />
      <Thenito />
      <Hogenakkalto />  


    </div>
  )
}

export default Placestovisit