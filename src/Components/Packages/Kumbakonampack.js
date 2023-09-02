import React, { useState } from 'react'
import "../../Styles/Packages/packages.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap'
import kum1 from '../../Images/pic30.jpg'
import ku1 from '../../Images/pic0.jpg'
import pic14 from '../../Images/pic14.jpg'
import pic15 from '../../Images/pic15.jpg'
import Card from 'react-bootstrap/Card';

const Chennaipack = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
   const handleShow = () => setShow(true);

  return (
    <div className='mt-5 mg-5'>
      <div className='text-start'>
        <h2>5.Kumbakonam</h2>
        <div className='row row-col-6 mt-5' style={{ textIndent: "4rem", textAlign: "justify", fontSize: "18px" }}>
        <p>
        If you only have 2 days to spend in Kumbakonam, we’ve narrowed down the top places you should check out to get the best experience of your time here.
With favorites like Dharasuram Temple, Sarangapani Temple, and Arulmigu Shri Swamimalai Swaminatha swamy Temple, we’ll make sure you don’t miss out on all the must sees. We even included some of our favorite food spots around the area, like Sri Gowrikkrishna Hotel and Mangalambiga Coffee and Tiffin Center®️ so you can get the best taste of Kumbakonam while you’re here
        </p>
         
           </div>
      </div>
    <Row >
        <Col md={3} className='mt-5' style={{ margin: "2rem 7.5rem  " }}>
          <Card >

            <Card.Img variant="top" src={kum1} />

            <span className='d-flex justify-content-end'>
              <span className='rating-badge' >
                <h5 style={{
                  backgroundColor: 'orange', borderRadius: "2px", padding: '2px 8px'
                  , fontWeight: 'bold'
                }} >
                  3.8</h5>
              </span>
            </span>
            <Card.Body>
              <p className='text-start fw-bold  fs-5 ' style={{ color:"green" }}>1 Night / 2 Days</p>
              <Card.Title>
                </Card.Title>
                <h4 className='fw-bold  '>  Kumbakonam Packages</h4>
              <Card.Text>
                <h6 style={{ color:"red" }}> packages ₹15,000/-  </h6>
                <p style={{ color:"blue" }}>Hotels, Meals</p>
                <li> AdiKUMbeshwar temple</li>
                  <li> Ramaswamy Temple</li>
                
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
        <h4 className='mg-2 ps-4 mt-4 fw-bold' style={{ fontSize:"19px" }}>Booking Room for Kumbakonam</h4>
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
            src={ku1}
            alt=""
            /> 
            <p className='text-center'>Stay Room</p></Col>
            <Col>
            <Image style={{ width: "100%", height: "auto" }}
            src={pic14}
            alt=""
            /><p className='text-center'>AdiKumbeshwar temple</p> </Col>
          <Col>
          <Image style={{ width: "85%", height: "auto" }}
            src={pic15}
            alt=""
          /><p className='text-center'>Ramaswamy Temple</p></Col>
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
