import React from 'react'
import YarcaudIMG from '../../Images/Yarcaud.jpeg'
import Yercaud1 from '../../Images/yercaud1.jpeg'
import Yercaud2 from '../../Images/yercaud2.jpeg'
import Yercaud3 from '../../Images/yercaud3.jpeg'
import Yercaud4 from '../../Images/yercaud4.jpeg'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Yarcaud = () => {
  return (
    <section id='yarcaud'className='container'>
    <div >
      <h1 className='primary-heading'>08. Yercaud</h1>
      
      <Row className="align-items-center">
        <Col md={6}  className="text-right my-4">
          <img
            src={YarcaudIMG}
            alt="Yarcaud_IMG"
            className="myImage" 
            /* style={{ height: '340px' ,width:'550px'}} */ 
          />
        </Col>
        <Col md={6}> 
          
          <h1 className='primary-text-heading yercaud-topMargin'>
            "The Land of Seven Forests."
          </h1> 
          <p className='primary-text'>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor, this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.
            
            <br />
            <br />
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
          </p>
        </Col>
     </Row>
   </div>

    <div className='bottomMargin'>
      <p className='text-center secondary-heading'>
          Must Visit Place In Yercaud
      </p>
    
      <Row >
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Yercaud1} />
            <Card.Body>
              <Card.Title>Pagoda Point</Card.Title>
              <Card.Text>
              Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Yercaud2} />
            <Card.Body>
              <Card.Title>Botanical Garden</Card.Title>
              <Card.Text>
              Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Yercaud3} />
            <Card.Body>
              <Card.Title>Emerald Lake</Card.Title>
              <Card.Text>
              The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Yercaud4} />
            <Card.Body>
              <Card.Title>Lady,s Seat</Card.Title>
              <Card.Text>
              Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...
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

export default Yarcaud