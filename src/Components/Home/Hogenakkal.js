import React from 'react'
import HogenakkalImg from '../../Images/Hogenakkal.jpeg'
import Hogenakkal1 from '../../Images/hogenakkal1.jpeg'
import Hogenakkal2 from '../../Images/hogenakkal2.jpeg'
import Hogenakkal3 from '../../Images/hogenakkal3.jpeg'
import Hogenakkal4 from '../../Images/hokenakkal4.jpeg'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Hogenakkal = () => {
  return (
    <section id='hogenakkal'className='container'>
    <div >
      <h1 className='primary-heading'>10. Hogenakkal</h1>
      
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <img
            src={HogenakkalImg}
            alt="Hogenakkal_Img"
            className="myImage" 
            /* style={{ height: '340px' ,width:'550px'}}  */
          />
        </Col>
        <Col md={6}> 
          <br />
          <h1 className='primary-text-heading'>
            "The one that will take your breath away"
          </h1> 
          <p className='primary-text'>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore. Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.
            
            <br />
            <br />
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam. Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.
          </p>
        </Col>
     </Row>
   </div>

    <div className='bottomMargin'>
      <p className='text-center secondary-heading'>
          Must Visit Place In Hogenakkal
      </p>
    
      <Row >
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Hogenakkal1} />
            <Card.Body>
              <Card.Title>Theerthamalai Temple</Card.Title>
              <Card.Text>
              Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Hogenakkal2} />
            <Card.Body>
              <Card.Title>Hogenakkal Falls</Card.Title>
              <Card.Text>
              Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Hogenakkal3} />
            <Card.Body>
              <Card.Title>Pennagram Village</Card.Title>
              <Card.Text>
              The village is located about 20 km away from Hogenakkal and is famous for its weekly fail that it holds every...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Hogenakkal4} />
            <Card.Body>
              <Card.Title>Mettur Dam</Card.Title>
              <Card.Text>
              Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...
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

export default Hogenakkal