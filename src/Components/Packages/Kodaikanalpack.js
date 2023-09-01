import React, { useState } from 'react'
import "../../Styles/Packages/packages.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap'
import ko1 from '../../Images/ko1.jpg'
import pic8 from '../../Images/pic8.jpg'
import pic10 from '../../Images/pic10.jpg'
import pic9 from '../../Images/pic9.jpg'
import Card from 'react-bootstrap/Card';

const Chennaipack = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
   const handleShow = () => setShow(true);

  return (
    <div className='mt-5 mg-5'>
      <div className='text-start'>
        <h2>3.Kodaikanal and OOty</h2>
        <div className='row row-col-6 mt-5' style={{ textIndent: "4rem", textAlign: "justify", fontSize: "18px" }}>
        <p>
        A picturesque resort town in Tamil Nadu and one of India’s most popular honeymoon destinations, Kodaikanal is synonymous with utter beauty. Its hills and cliffs covered in mist, gushing waterfalls, lakes, and gorgeous views make for an incredible trip, especially for nature lovers. Holidify has many Kodaikanal honeymoon packages curated to offer an unforgettable holiday for all kinds of couples!

        </p>
          <p>
          Ooty or Udagamandalam is a gorgeous hill station in Tamil Nadu known as the “Queen of the Nilgiris” owing to its splendid natural beauty. Home to vast tea gardens, views of majestic mountains, cascading waterfalls and beautiful architecture, this former summer headquarters of the East India Company is a paradise for honeymooners. Holidify offers various Ooty honeymoon packages that guarantee a lifetime of memories to newlyweds!
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
                  4.9</h5>
              </span>
            </span>
            <Card.Body>
              <p className='text-start fw-bold  fs-5 ' style={{ color:"green" }}>4Nights / 5 Days</p>
              <Card.Title><h5 className='fw-bold'> Kodaikanal and OOty Packages</h5></Card.Title>

              <Card.Text>
                <h6 style={{ color:"red" }}> packages ₹21,000/-  </h6>
                <p style={{ color:"blue" }}>Hotels, Other, Sightseeing, Meals</p>
                <li> Excursion to Coonoor</li>
                  <li> Rose Garden</li>
                
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
        <h4 className='mg-2 ps-4 mt-4 fw-bold' style={{ fontSize:"19px" }}>Booking Room for Kodaikanal and OOty</h4>
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
            /><p className='text-center'>Rose Garden</p> </Col>
          <Col>
          <Image style={{ width: "100%", height: "65%" }}
            src={pic9}
            alt=""
          /><p className='text-center'>Dolpin Nose</p></Col>
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
