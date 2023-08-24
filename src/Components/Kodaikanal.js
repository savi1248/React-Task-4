import React from 'react'
import KodaikanalIMG from '../Images/Kodaikanal.jpeg'
import Kodaikanal1 from '../Images/kodaikanal1.jpeg'
import Kodaikanal2 from '../Images/kodaikanal2.jpeg'
import Kodaikanal3 from '../Images/kodaikanal3.jpeg'
import Kodaikanal4 from '../Images/kodaikanal4.jpeg'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Kodaikanal = () => {
  return (
    <section id='kodaikanal'className='container'>
    <div >
      <h1 className='primary-heading'>03. Kodaikanal</h1>
      
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <img
            src={KodaikanalIMG}
            alt="Kodaikanal_IMG"
            className="myImage"  
            /* style={{ height: '340px' ,width:'550px'}} */
          />
        </Col>
        <Col md={6}> 
          <br />
          <h1 className='primary-text-heading'>
            "The Princess of Hill Stations"
          </h1> 
          <p className='primary-text'>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means the gift of the forests'
            
            <br />
            <br />
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.
          </p>
        </Col>
     </Row>
   </div>

    <div className='bottomMargin'>
      <p className='text-center secondary-heading'>
          Must Visit Place In Kodaikanal
      </p>
    
      <Row >
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kodaikanal1} />
            <Card.Body>
              <Card.Title>Green Valley Views</Card.Title>
              <Card.Text>
              Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kodaikanal2} />
            <Card.Body>
              <Card.Title>Kodai Lake</Card.Title>
              <Card.Text>
              Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kodaikanal3} />
            <Card.Body>
              <Card.Title>Bear Shola Falls</Card.Title>
              <Card.Text>
              Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Kodaikanal4} />
            <Card.Body>
              <Card.Title>Pillar Rocks</Card.Title>
              <Card.Text>
              Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic...
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

export default Kodaikanal