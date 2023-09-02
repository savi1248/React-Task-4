import React, { useState } from 'react'
import "../../Styles/Packages/packages.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap'
import winter from '../../Images/pic1.jpg'
import Card from 'react-bootstrap/Card';
import pic2 from '../../Images/pic2.jpg'
import pic3 from '../../Images/pic3.jpg'
import pic4 from '../../Images/pic4.jpg'



// import { FaMobileAlt, FaUserAlt, FaVoicemail, FaPlaneDeparture, } from 'react-icons/fa';
// import Rameshwarampack from './Rameshwarampack';

const Chennaipack = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div className='mt-5 mg-5'>
      <div className='text-start'>
        <h2>Tamilnadu Tour Packages</h2>
        <div className='row row-col-6 mt-5' style={{ textIndent: "4rem", textAlign: "justify", fontSize: "18px" }}>
          <p>
            Tamil Nadu is a land of breathtaking beauty, history and culture, all of which make it one of India's most popular tourist destinations. With years of being the centre of dynastic and colonial activity, Tamil Nadu is known for its holy sites, beaches, museums, waterfalls, forts and lush greenery. Holidify offers a bunch of affordable and customisable Tamil Nadu tour packages that are sure to provide you with a fantastic trip!
            Rameshwaram is a holy destination known for being the place where Lord Rama built a bridge to Sri Lanka. It's synonymous with temples like Rameshwaram Temple, Kothandaramaswamy Temple, Jada Tirtham, Villoondi Tirtham etc. Also, visit the Kalam National Memorial and APJ Abdul Kalam's burial site.
          </p>

          {/* <p>
            With a combination of modern and ancient attractions to see, Tamil Nadu tour packages include some of the state's most famous destinations like Chennai, Kodaikanal, Ooty, Rameshwaram, Kanyakumari and Madurai. The best time to visit Tamil Nadu is perhaps between November to February, when the cool climate makes sightseeing a pleasant experience.
            </p> */}
          <p>
            Situated in the Nilgiri Hills, Ooty is a beautiful hill station in Tamil Nadu that features tea gardens, green valleys, waterfalls, magnificent architecture etc. Its colonial buildings like Stone House and St. Stephen's Church serve as major highlights, while Thread Garden, Rose Garden, Emerald Lake and Kalhatti Falls are a must-visit for nature lovers. Then, of course, its vast tea plantations and the Tea Factory must be on your itinerary.

            Tamil Nadu's hilly terrain and water bodies provide ample chances for thrilling outdoor activities like trekking, parasailing, boating, swimming, scuba diving, camping etc. What's more, go shopping at Express Avenue, Main Bazaar and T Nagar to find some unique local items.

          </p>



        </div>
      </div>
      <div className='text-start mt-5'>
        <h3>
          Popular Tamil Nadu Packages
        </h3>
      </div>
      <div className='col-12'>
        <div className='mt-5 text-center'>
          <Table striped bordered hover className='table packages-table mg-5'
            style={{ width: '55rem', height: '30rem', fontSize: '19px' }}>
            <thead>
              <tr>
                <th width="23%">Package</th>
                <th width="13%">Price </th>
                <th width="18%">Days</th>
                <th className='' width='31%'>Inclusion</th>
                
              </tr>

            </thead>
            <tbody>
              <tr >
                <td> Chennai</td>
                <td>₹9,000/-</td>
                <td >2 Nights/3 Days</td>
                <td >Upto 3 Stars, Meals, Sightseeing, Stay Included, Transfers</td>

              </tr>
              <tr >
                <td> Rameshwaram</td>
                <td>₹5,500/-</td>
                <td >	2 Days/1 Nights</td>
                <td >Hotels, Sightseeing, Cars, Meals</td>

               
              </tr>
              <tr>
                <td> Kodaikanal, OOty</td>
                <td>₹10,000/-</td>
                <td >4Nights / 5 Days</td>
                <td >Hotels, Sightseeing, Meals</td>
              </tr>
              
              <tr>
                <td> Kanyakumari, Madurai</td>
                <td>₹10,000/- </td>
                <td >3Nights / 4Days</td>
                <td >Hotels, Sightseeing, Meals</td>
              </tr>
              <tr>
                <td> Kumbakonam</td>
                <td> ₹15,000/- </td>
                <td >1 Night / 2 Days</td>
                <td >Hotels, Sightseeing, Meals</td>
              </tr>
              
              <tr>
                <td> Yercard, Theni</td>
                <td>₹30,000/-</td>
                <td >5Nights / 6 Days</td>
                <td >Hotels,Others,Sightseeing, Meals</td>
              </tr>
              
              <tr>
                <td> Hogennakal</td>
                <td>₹7,000/- </td>
                <td >2 Nights / 3 Days</td>
                <td >Hotels, Meals</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className='mt-5 '>
        <div className='text-start'>
          <h2>1.Chennai </h2>
          <div className='row row-col-6 mt-4' style={{ textIndent: "4rem", textAlign: "justify", fontSize: "18px" }}>
            <p>
              Tourism in Mahabalipuram offers a variety of sightseeing and entertainment opportunities for all kinds of travellers. Your preferred Mahabalipuram tourist place would depend on whether you are travelling with family or friends and your holiday style, but never fear because Mahabalipuram tourism has something for everyone.
            </p>
            <p>
              If you wish to explore Mahabalipuram tourist places, then you must check out MakeMyTrip’s Mahabalipuram tourism packages. MakeMyTrip offers the widest coverage of Mahabalipuram tourism places through a variety of holiday packages and activities. Pick from a range of 12 packages starting from Rs.22197. Explore Mahabalipuram tourist spots with your friends and family, stay in quality hotels recommended by MakeMyTrip and approved by Mahabalipuram tourism, and have a memorable Mahabalipuram trip.

            </p>



          </div>
        </div>
      </div>
      <Row >
        <Col md={3} className='mt-5' style={{ margin: "2rem 7.5rem  " }}>
          <Card style={{ Width:"10%" }}>

            <Card.Img variant="top" src={pic2} />

            <span className='d-flex justify-content-end'>
              <span className='rating-badge' >
                <h5 style={{
                  backgroundColor: 'orange', borderRadius: "2px", padding: '2px 8px'
                  , fontWeight: 'bold'
                }} >
                  4.5</h5>
              </span>
            </span>
           
            <Card.Body>
            <p className='text-start fw-bold  fs-5 ' style={{ color:"green" }}>3 Days/2 Nights</p>
              <Card.Title><h4 className='fw-bold  '>  Chennai Packages</h4></Card.Title>

              <Card.Text>
              <h6 style={{ color:"red" }}> packages ₹9,000/-  </h6>
                <p style={{ color:"blue" }}>Hotels, Sightseeing, Cars, Meals</p>
                <li> Visit Mahabalipuram</li>
                  <li> Visit Five Rath</li>
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
        <h4 className='mg-2 ps-4 mt-4 fw-bold' style={{ fontSize: "19px" }}>Booking Room for Chennai Packages</h4>
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
          <h5 className='ms-2'> Rooms, Meals, sightseeing</h5>
          <Row>
            <Col>
              <Image style={{ width: "100%", height: "auto" }}
                src={winter}
                alt=""
              />
              <p className='text-center'>Stay Room</p></Col>
            <Col>
              <Image style={{ width: "90%", height: "auto" }}
                src={pic3}
                alt=""
              /><p className='text-center'>Food</p> </Col>
            <Col>
              <Image style={{ width: "85%", height: "auto" }}
                src={pic4}
                alt=""
              /><p className='text-center'>Five Rath</p></Col>
          </Row>
          <Button variant="orange" className=' text-center  btn btn-dark' onClick={handleClose}>
            Book Now
          </Button>



        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      {/* <Rameshwarampack/> */}
    </div>
  )
}

export default Chennaipack