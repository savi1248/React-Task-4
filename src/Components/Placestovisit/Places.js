import React from 'react'
import { Row,Col } from 'react-bootstrap'
import img1 from '../../Images/TouristPlace.jpeg'
import "../../Styles/Placestovisit/Places.css"

const Places = () => {
    return (
        <div className='container'>
            <div >
                    
               <Row className="align-items-center">
    
                    <Col md={6}> 
                        <br />
                        <h3 className=''>
                        Tourist Places To Visit In Tamil Nadu
                        </h3> 
                        <br />
                        <p className='primary-text'>
                           Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.
                        </p>
                        <p className='primary-text'>
                            Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.
                        </p>
                        <p className='primary-text'>
                            Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.
                        </p>
                    </Col>
                    <Col md={6}  className="text-right">
                        <img
                          src={img1}
                          alt="Chennai_Img"
                          className="tourist-place"  
                        /* style={{ height: '340px' ,width:'550px'}} */
                        />
                        <p className='text-center'>
                         Tourist Places To Visit In Tamil Nadu
                        </p>
                    </Col>
                    
                </Row>
                <p className='primary-text'>
                  The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai. Tamil Nadu is also home to the southernmost land of India- Kanyakumari and one of the char dhams- Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.
                </p>
            </div>
    
            
           
    
        </div>
        
        
      )

    }
    
    export default Places