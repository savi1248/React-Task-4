import React from 'react'
import RameswaramIMG from '../Images/Rameshwaran.jpeg'
import Rameswaram1 from '../Images/rameshwarem1.jpeg'
import Rameswaram2 from '../Images/rameshwarem2.jpeg'
import Rameswaram3 from '../Images/rameshwaram3.jpeg'
import Rameswaram4 from '../Images/rameshwarem4.jpeg'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Rameswaram = () => {
  return (
    <section id='rameswaram'className='container'>
      <div >
        <h1 className='primary-heading'>02. Rameswaram</h1>
        
        <Row className="align-items-center">
          <Col md={6}  className="text-right">
            <img
              src={RameswaramIMG}
              alt="Rameswaram_IMG"
              className="myImage" 
             /*  style={{ height: '340px' ,width:'550px'}}  */
            />
          </Col>
          <Col md={6}> 
            <br />
            <h1 className='primary-text-heading'>
              "The Bridge on the Indian Ocean"
            </h1> 
            <p className='primary-text'>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.
              
              <br />
              <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.
            </p>
          </Col>
       </Row>
     </div>

      <div className='bottomMargin'>
            <p className='text-center secondary-heading'>
                Must Visit Place In Rameswaram
            </p>
        
            <Row>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src={Rameswaram1} />
                <Card.Body>
                    <Card.Title>Dhanushkodi Temple</Card.Title>
                    <Card.Text>
                    Dhanushkodi was until a few years ago a wonderful temple on the southe tip of India. However, due to a...
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src={Rameswaram2} />
                <Card.Body>
                    <Card.Title>Lakshmana Temple</Card.Title>
                    <Card.Text>
                    Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order...
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src={Rameswaram3} />
                <Card.Body>
                    <Card.Title>Rameshwaram Temple</Card.Title>
                    <Card.Text>
                    A perfect blend of mind-boggling architecture and spiritual significance, Rameshwaram Temple, also...
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src={Rameswaram4} />
                <Card.Body>
                    <Card.Title>Villoondi Tirtham</Card.Title>
                    <Card.Text>
                    Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists...
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

export default Rameswaram