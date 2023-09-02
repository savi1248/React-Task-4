import React, { useState } from 'react'
import "../../Styles/Packages/packages.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap'
import winter from '../../Images/pic1.jpg'
import pic7 from '../../Images/pic7.jpg'
import pic5 from '../../Images/pic5.jpg'
import pic6 from '../../Images/pic6.jpg'
import Card from 'react-bootstrap/Card';

const Chennaipack = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
   const handleShow = () => setShow(true);

  return (
    <div className='mt-5 mg-5'>
      <div className='text-start'>
        <h2>2.Rameshwaram </h2>
        <div className='row row-col-6 mt-5' style={{ textIndent: "4rem", textAlign: "justify", fontSize: "18px" }}>
         <p>
         Looking for a Rameswaram holiday package? Choose from a wide range of Holidify’s Rameswaram tour packages. Whether you are looking for a Rameswaram package for a spiritual getaway or just a Rameswaram holiday package with family and friends, pick the best one at Holidify. Offering customisable packages to suit every kind of traveller from Kodaikanal, Madurai, Kanyakumari, Kovalam, and other parts of India and the world, Holidify’s Rameswaram tour packages start from INR 11,200.
         </p>

          
          <p>
          Explore the best places to visit in Rameswaram amongst its several revered temples, sandy beaches, Water Bird Sanctuary and other places of religious importance. Rameswaram is a beautiful holy place that is situated on an island and is separated from Sri Lanks through Pamban channel.
          </p>
           </div>
      </div>
    <Row >
        <Col md={3} className='mt-5' style={{ margin: "2rem 7.5rem  " }}>
          <Card >

            <Card.Img variant="top" src={pic7} />

            <span className='d-flex justify-content-end'>
              <span className='rating-badge' >
                <h5 style={{
                  backgroundColor: 'orange', borderRadius: "2px", padding: '2px 8px'
                  , fontWeight: 'bold'
                }} >
                  4.2</h5>
              </span>
            </span>
            <Card.Body>
              <p className='text-start fw-bold  fs-5 ' style={{ color:"green" }}>2 Days/1 Night</p>
              <Card.Title> 
              <h4 className='fw-bold  '>  Rameshwaram Packages</h4>
              </Card.Title>

              <Card.Text>
                <h6 style={{ color:"red" }}> packages ₹5,500/-  </h6>
                <p style={{ color:"blue" }}>Hotels, Sightseeing, Cars, Meals</p>
                <li> Day1 Arulmigu Ramanthasawamy</li>
                  <li>Day2 AgniThertham</li>
                
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
        <h4 className='mg-2 ps-4 mt-4 fw-bold' style={{ fontSize:"19px" }}>Booking Room for Rameshwaram</h4>
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
            src={winter}
            alt=""
            /> 
            <p className='text-center'>Stay Room</p></Col>
            <Col>
            <Image style={{ width: "100%", height: "auto" }}
            src={pic6}
            alt=""
            /><p className='text-center'>Arulmigu Ramanathaswamy</p> </Col>
          <Col>
          <Image style={{ width: "100%", height: "auto" }}
            src={pic5}
            alt=""
          /><p className='text-center'>Agni Thertham</p></Col>
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
