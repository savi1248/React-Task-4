import React from 'react'
import TheniIMG from '../Images/Theni.jpeg'
import Theni1 from '../Images/theni1.jpeg'
import Theni2 from '../Images/theni2.jpeg'
import Theni3 from '../Images/theni3.jpeg'
import Theni4 from '../Images/theni4.jpeg'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Theni = () => {
  return (
    <section id='theni'className='container'>
    <div >
      <h1 className='primary-heading'>09. Theni</h1>
      
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <img
            src={TheniIMG}
            alt="Theni_IMG"
            className="myImage"  
            /* style={{ height: '340px' ,width:'550px'}} */
          />
        </Col>
        <Col md={6}> 
          <br />
          <h1 className='primary-text-heading'>
            "A little hamlet in Tamil Nadu"
          </h1> 
          <p className='primary-text'>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.
            
            <br />
            <br />
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.
          </p>
        </Col>
     </Row>
   </div>

    <div className='bottomMargin'>
      <p className='text-center secondary-heading'>
          Must Visit Place In Theni
      </p>
    
      <Row >
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Theni1} />
            <Card.Body>
              <Card.Title>Chinna Suruli Falls</Card.Title>
              <Card.Text>
              Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Theni2} />
            <Card.Body>
              <Card.Title>Kumbakkarai Falls</Card.Title>
              <Card.Text>
              Located in Dindigul district near Theni in Tamil Nadu,Kumbakkarai Falls is a mesmerising waterfall that..
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Theni3} />
            <Card.Body>
              <Card.Title>Meghamalai</Card.Title>
              <Card.Text>
              Tucked within the Western  Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={Theni4} />
            <Card.Body>
              <Card.Title>Suruli Falls</Card.Title>
              <Card.Text>
              Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...
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

export default Theni