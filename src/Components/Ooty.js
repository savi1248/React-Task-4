import React from 'react'
import OotyIMG from '../Images/Ooty.jpeg'
import Ooty1 from '../Images/ooty1.jpeg'
import Ooty2 from '../Images/ooty2.jpeg'
import Ooty3 from '../Images/ooty3.jpeg'
import Ooty4 from '../Images/ooty4.jpeg'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Ooty = () => {
  return (
    <section id='ooty'className='container'>
      <div >
        <h1 className='primary-heading touristPlaceName'>04. Ooty</h1>
        
        <Row className="align-items-center">
          <Col md={6}  className="text-right">
            <img
              src={OotyIMG}
              alt="Ooty_Img"
              className="myImage" 
              /* style={{ height: '340px' ,width:'550px'}} */ 
            />
          </Col>
          <Col md={6}> 
            <br />
            <h1 className='primary-text-heading'>
              "Queen of the Nilgiris"
            </h1> 
            <p className='primary-text'>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.
              
              <br />
              <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.
            </p>
          </Col>
       </Row>
     </div>

      <div className='bottomMargin'>
        <p className='text-center secondary-heading'>
            Must Visit Place In Ooty
        </p>
      
        <Row >
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Ooty1} />
              <Card.Body>
                <Card.Title>Nilgiri Mountain Railway</Card.Title>
                <Card.Text>
                Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Ooty2} />
              <Card.Body>
                <Card.Title>Ooty Botanical Garden</Card.Title>
                <Card.Text>
                Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Ooty3} />
              <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Ooty4} />
              <Card.Body>
                <Card.Title>Dolphin's Nose</Card.Title>
                <Card.Text>
                Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
      </div>
    </section>
  )
}

export default Ooty