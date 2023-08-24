import React from 'react'
import KumbakonamIMG from '../Images/Kumbakonam.jpeg'
import Kumbakonam1 from '../Images/kumbakonam1.jpeg'
import Kumbakonam2 from '../Images/kumbakonam2.jpeg'
import Kumbakonam3 from '../Images/Kumbakonam3.jpeg'
import Kumbakonam4 from '../Images/kumbakonam4.jpeg'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Styles/Chennai.css'

const Kumbakonam = () => {
  return (
    <section id='kumbakonam'className='container'>
      <div >
        <h1 className='primary-heading touristPlaceName'>06. Kumbakonam</h1>
        
        <Row className="align-items-center">
          <Col md={6}  className="text-right">
            <img
              src={KumbakonamIMG}
              alt="Kumbakonam_IMG"
              className="myImage"
              /* style={{ height: '340px' ,width:'550px'}} */  
            />
          </Col>
          <Col md={6}> 
            <br />
            <h1 className='primary-text-heading'>
              "The Cambridge of India"
            </h1> 
            <p className='primary-text'>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.
              
              <br />
              <br />
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.
            </p>
          </Col>
       </Row>
     </div>

      <div className='bottomMargin'>
        <p className='text-center secondary-heading'>
            Must Visit Place In Kumbakonam
        </p>
      
        <Row >
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Kumbakonam1} />
              <Card.Body>
                <Card.Title>Sarangapani Temple</Card.Title>
                <Card.Text>
                Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Kumbakonam2} />
              <Card.Body>
                <Card.Title>Nageswaran Temple</Card.Title>
                <Card.Text>
                Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Kumbakonam3} />
              <Card.Body>
                <Card.Title>Adi Kumbeshwara Temple</Card.Title>
                <Card.Text>
                Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Kumbakonam4} />
              <Card.Body>
                <Card.Title>Airavatesvara Temple</Card.Title>
                <Card.Text>
                Located in the town of Darasuram near Kumbakonam in Tamil Nadu,Airavatesvara Temple is a revered...
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

export default Kumbakonam