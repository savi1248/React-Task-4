import React from 'react'
import ChennaiImg from '../../Images/Chennai.jpeg'
import Chennai1 from '../../Images/chennai1.jpeg'
import Chennai2 from '../../Images/chennai2.jpeg'
import Chennai3 from '../../Images/chennai3.jpeg'
import Chennai4 from '../../Images/chennai4.jpeg'
import { Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../Styles/Home/Chennai.css'



const Chennai = () => {


  return (
     <section id='chennai'className='container bottomMargin'>
      <div >
        {/* <h1 className='primary-heading'>01. Chennai</h1> */}
        <h2 >01.Chennai</h2>
        <Row className="align-items-center ">
          <Col md={6}  className="text-right">
            <img
              src={ChennaiImg}
              alt="Chennai_Img"
              className="myImage"  
              /* style={{ height: '340px' ,width:'550px'}} */
            />
          </Col>
          <Col md={6}> 
            <br />
            {/* <h1 className='primary-text-heading'> */}
            <h5 className='fw-bold' >
              "The Detroit Of India"
            </h5> 
            <p className='primary-text'>
              
              Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This capital of the south, is one among the four metropolitan siblings of India having a rich cultural history which it perfectly balances with its metropolis lifestyle.
              
              <br />
              <br />
              
          Amid its chaos of traffic and sweltering humid climate. Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.
            </p>
          </Col>
       </Row>
     </div>

      <div className='bottomMargin'>
        <p className='text-center secondary-heading'>
            Must Visit Place In Chennai
        </p>
      
        <Row >
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Chennai1} />
              <Card.Body>
                <Card.Title className='fw-bold'>Marina Beach</Card.Title>
                <Card.Text>
                Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Chennai2} />
              <Card.Body>
                <Card.Title className='fw-bold'>MGR Film City</Card.Title>
                <Card.Text>
                Having been established in the year 1994, a considerably new structure, the MGR Film city is managed...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Chennai3} />
              <Card.Body>
                <Card.Title className='fw-bold'>Marundeeswarar Temple</Card.Title>
                <Card.Text>
                The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={Chennai4} />
              <Card.Body>
                <Card.Title className='fw-bold'>Breezy Beach</Card.Title>
                <Card.Text>
                Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted...
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

export default Chennai