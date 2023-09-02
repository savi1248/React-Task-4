import React, { useState } from 'react'
import "../../Styles/Packages/packages.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap'
import ko1 from '../../Images/ko1.jpg'
import pic8 from '../../Images/ercard.jpg'
import pic10 from '../../Images/pic16.jpg'
import pic9 from '../../Images/pic17.jpg'
import Card from 'react-bootstrap/Card';

const Chennaipack = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
   const handleShow = () => setShow(true);

  return (
    <div className='mt-5 mg-5'>
      <div className='text-start'>
        <h2>6.Theni and Yercard</h2>
        <div className='row row-col-6 mt-5' style={{ textIndent: "4rem", textAlign: "justify", fontSize: "18px" }}>
        <p>
        Get the affordable travel packages for Theni on TourTravelWorld. Here, you can easily search Theni travel agents, who provide tour package with best itineraries to make your Theni tour enjoyable. Right from hotels in Theni to taxi in Theni, you can get everything related to your Theni tour on this portal. The partner tour operators here help you visit all the hot destinations in Theni, within the tour packages, you have purchased.
        </p>
          <p>
          Glistering as the Jewel of the South, Yercaud is an engrossing hill station attracting hordes of vacationers every year. Its blossoming orchards, panoramic forests, and lovely environs welcome the tourists. The city of Yercaud, located in the district of Salem in Tamil Nadu, is the pride of the Shevaroy Hills in the Eastern Ghats. It is known for its widespread plantations of coffee, jackfruit, oranges, and spices. You can purchase the naturally-grown products from the local markets of Yercaud. 
          </p>
           </div>
      </div>
    <Row >
        <Col md={3} className='mt-5' style={{ margin: "2rem 7.5rem  " }}>
          <Card >

            <Card.Img variant="top" src={pic8} />

            <span className='d-flex justify-content-end'>
              <span className='rating-badge' >
                <h5 style={{
                  backgroundColor: 'orange', borderRadius: "2px", padding: '2px 8px'
                  , fontWeight: 'bold'
                }} >
                  3.9</h5>
              </span>
            </span>
            <Card.Body>
              <p className='text-start fw-bold  fs-5 ' style={{ color:"green" }}>5Nights / 6 Days</p>
              <Card.Title>
              <h4 className='fw-bold  '> Theni and Yercard Packages </h4>
              </Card.Title>

              <Card.Text>
                <h6 style={{ color:"red" }}> packages ₹30,000/-  </h6>
                <p style={{ color:"blue" }}>Hotels, Other, Sightseeing, Meals</p>
                <li> visit Shevaroy Temple</li>
                  <li> Megamalai Wildlife</li>
                
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
        <h4 className='mg-2 ps-4 mt-4 fw-bold' style={{ fontSize:"19px" }}>Booking Room for Theni and Yercard</h4>
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
            src={pic10}
            alt=""
            /><p className='text-center'> Shevaroy Temple</p> </Col>
          <Col>
          <Image style={{ width: "85%", height: "auto" }}
            src={pic9}
            alt=""
          /><p className='text-center'>Megamalai Wildlife</p></Col>
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
