import React, { useState } from 'react'
import "../../Styles/Packages/packages.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap'
import ko1 from '../../Images/ko1.jpg'
import pic13 from '../../Images/pic13.jpg'
import pic11 from '../../Images/pic11.jpg'
import pic12 from '../../Images/pic12.jpg'
import Card from 'react-bootstrap/Card';

const Chennaipack = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
   const handleShow = () => setShow(true);

  return (
    <div className='mt-5 mg-5'>
      <div className='text-start'>
        <h2>4.Kanyakumari and Madurai</h2>
        <div className='row row-col-6 mt-5' style={{ textIndent: "4rem", textAlign: "justify", fontSize: "18px" }}>
        <p>
        Kanyakumari in Tamil Nadu is a coastal town and popular tourist destination that also happens to be the southernmost tip of India, thus also known as “The Land’s End.” It is surrounded by three seas, namely the Bay of Bengal, Arabian Sea and the Indian Ocean, and is famous for beaches, tall coconut trees, forts, waterfalls and green hills. Explore the best places to visit in Kanyakumari, sandy beaches, stunning waterfalls, beautiful temples, and sturdy forts. 
        </p>
          <p>
          Tour Madurai is best known for its quick and best car rental service in Madurai. tourmadurai.com offer 24x7 airport car pick up and drop facility in madurai to facilitate the customers emergency needs. As we have a dedicated team to process their bookings and our drivers are very efficient and friendly in nature, hence ensuring a safe and comfortable drive experience for our customers.
          </p>
           </div>
      </div>
    <Row >
        <Col md={3} className='mt-5' style={{ margin: "2rem 7.5rem  " }}>
          <Card >

            <Card.Img variant="top" src={pic13} />

            <span className='d-flex justify-content-end'>
              <span className='rating-badge' >
                <h5 style={{
                  backgroundColor: 'orange', borderRadius: "2px", padding: '2px 8px'
                  , fontWeight: 'bold'
                }} >
                  4.8</h5>
              </span>
            </span>
            <Card.Body>
              <p className='text-start fw-bold  fs-5 ' style={{ color:"green" }}>3Nights / 4Days</p>
              <Card.Title><h5 className='fw-bold'> Kanyakumari and Madurai Packages</h5></Card.Title>

              <Card.Text>
                <h6 style={{ color:"red" }}> packages ₹10,000/-  </h6>
                <p style={{ color:"blue" }}>Hotels, Other, Sightseeing, Meals</p>
                <li> Samnar Hills</li>
                  <li> Visit Vivekananda Rock, and Sunrise Point</li>
                
              </Card.Text>
              <Button variant="primary" onClick={handleShow}><b>Get Quotes  </b></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
          
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <h3 className='text-center'>Get Customized Travel Packages</h3></Modal.Title>
           
        </Modal.Header>
        <h4 className='mg-2 ps-4 mt-4 fw-bold' style={{ fontSize:"19px" }}>Booking Room for Kanyakumari and Madurai</h4>
        <Modal.Body>


        <div  >
            <Form style={{ width: "100%", paddingLeft: '5px' }}>
              <Row >
                <Col>
                   <Form.Label >DESTINATION*</Form.Label> <br />
                    <Form.Control type="destinaton" placeholder="Enter Destination" required />
                    <br /></Col>

                  <Col>  <Form.Label>DEPARTURE CITY*</Form.Label> <br />
                    <Form.Control type="email" placeholder="Enter Departure City" required />
                    <br /></Col>
                  <Row >
                    <Col>  <Form.Label>NAME*</Form.Label> <br />
                      <Form.Control type="email" placeholder="Name" required />
                      <br /></Col>
                    <Col>  <Form.Label>PHONE*</Form.Label> <br />
                      <Form.Control type="email" placeholder="Enter Phone" required />
                      <br /></Col>
                  </Row>
                  <Row>
                  <Form.Label>EMAIL*</Form.Label> <br />
                    <Form.Control type="email" placeholder="Enter email" required />
                  
                  </Row> 


              </Row>
            </Form> 


          </div> <br />
          <h5 className='ms-2'> Rooms and sightseeing</h5>
           <Row>
            <Col>
            <Image style={{ width: "100%", height: "auto" }}
            src={ko1}
            alt=""
            /> 
            <p className='text-center'>Stay Room</p></Col>
            <Col>
            <Image style={{ width: "90%", height: "auto" }}
            src={pic11}
            alt=""
            /><p className='text-center'>Samnar Hills</p> </Col>
          <Col>
          <Image style={{ width: "100%", height: "65%" }}
            src={pic12}
            alt=""
          /><p className='text-center'>Vivekanadha Rock</p></Col>
           </Row>
          <Button variant="Primary" className=' text-center  btn btn-dark' onClick={handleClose}>
            Book Now
          </Button>
          
          

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      
      
</div>
 )
}

export default Chennaipack
