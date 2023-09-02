import React from 'react'
import MaduraiIMG from '../../Images/Madurai.jpeg'
import Madurai1 from '../../Images/madurai1.jpeg'
import Madurai2 from '../../Images/madurai2.jpeg'
import Madurai3 from '../../Images/madurai3.jpeg'
import Madurai4 from '../../Images/madurai4.jpeg'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Madurai = () => {
  return (
    <section id='madurai'className='container'>
    <div >
      <h2 className=''>07. Madurai</h2>
      
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <img
            src={MaduraiIMG}
            alt="Madurai_IMG"
            className="myImage"  
           
          />
        </Col>
        <Col md={6}> 
          <br />
          <h5 className='fw-bold'>
            "The Lotus City"
          </h5> 
          <p className='primary-text'>
            
          Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
            
            <br />
            <br />
            
            
           There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
          </p>
        </Col>
     </Row>
   </div>

    <div className='bottomMargin'>
      <p className='text-center secondary-heading'>
          Must Visit Place In Madurai
      </p>
    
      <Row >
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Madurai1} />
            <Card.Body>
              <Card.Title className='fw-bold'>Vaigai Dam</Card.Title>
              <Card.Text>
              Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Then....
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Madurai2} />
            <Card.Body>
              <Card.Title className='fw-bold'>Meghamalai</Card.Title>
              <Card.Text>
              Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Madurai3} />
            <Card.Body>
              <Card.Title className='fw-bold'>Samanar Hills</Card.Title>
              <Card.Text>
              Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Madurai4} />
            <Card.Body>
              <Card.Title className='fw-bold'>Thirumalai Nayakar</Card.Title>
              <Card.Text>
              Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...
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

export default Madurai