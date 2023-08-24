import React from 'react'
import KanyakumariIMG from '../Images/Kanyakumari.jpeg'
import Kanyakumari1 from '../Images/kanyakumari1.jpeg'
import Kanyakumari2 from '../Images/kanyakumari2.jpeg'
import Kanyakumari3 from '../Images/kanyakumari3.jpeg'
import Kanyakumari4 from '../Images/kanyakumari4.jpeg'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Kanyakumari = () => {
  return (
    <section id='kanyakumari'className='container'>
    <div >
      <h1 className='primary-heading'>05. Kanyakumari</h1>
      
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <img
            src={KanyakumariIMG}
            alt="Kanyakumari_IMG"
            className="myImage"  
            /* style={{ height: '340px' ,width:'550px'}} */
          />
        </Col>
        <Col md={6}> 
          <br />
          <h1 className='primary-text-heading'>
            "Cape Comorin or The Land's End"
          </h1> 
          <p className='primary-text'>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanyakumari Tourism Bordered by the three seas Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
            
            <br />
            <br />
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.
          </p>
        </Col>
     </Row>
   </div>

    <div className='bottomMargin'>
      <p className='text-center secondary-heading'>
          Must Visit Place In Kanyakumari
      </p>
    
      <Row >
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kanyakumari1} />
            <Card.Body>
              <Card.Title>Kanyakumari Beach</Card.Title>
              <Card.Text>
              Located in the southernmost part of India, Kanyakumari beach with its beautiful hue- changing beaches...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kanyakumari2} />
            <Card.Body>
              <Card.Title>Vivekananda Memorial</Card.Title>
              <Card.Text>
              The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kanyakumari3} />
            <Card.Body>
              <Card.Title>Thiruvalluvar Status</Card.Title>
              <Card.Text>
              Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kanyakumari4} />
            <Card.Body>
              <Card.Title>Thirparappu Falls</Card.Title>
              <Card.Text>
              Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...

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

export default Kanyakumari