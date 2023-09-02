import React from 'react'
import "../../Styles/Besttimetovisit/Rameshwaramvisit.css";
import kumba1 from '../../Images/kumba1.jpeg'
import kumba2 from '../../Images/kumba2.jpeg'
import kumba3 from '../../Images/kumba3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Kumbakonamvisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
  
      <section className='mg-sm-5'>
        <div className='row row-cols-2  '>
          <div>
            <h2 className=''>06.Kumbakonam</h2>
            <div
              className="modal show   "
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton className='text-center'>
                  <Modal.Title className='fw-bold'>More About Best Time To Travel To Kumbakonam</Modal.Title>
                </Modal.Header>
  
                <Modal.Body>
                  <div className=' row row-cols-3 text-center'>
                    <div>
                      <img src={kumba1} alt="che1" style={{ width: "100px", height: "160px" }} />
                      <p> Dawn <br />Source</p>
                    </div>
                    <div>
                      <img src={kumba2} alt="che2" style={{ width: "100px", height: "160px" }} />
                      <p> Steemit <br />Source</p>
                    </div>
                    <div>
                      <img src={kumba3} alt="che3" style={{ width: "100px", height: "160px" }} />
                      <p> Holydham<br />Source</p>
                    </div>
  
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                  <Button variant="primary" onClick={handleShow}>Save changes</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
          </div>
       <div>
           <br /><div className=''>
            <h5 className='mt-5 fw-bold'>What is the best time to visit :</h5>
  
          </div>
          <div style={{ textAlign: 'justify', textIndent: '16.5rem', lineheight: '160%', fontSize: "18px", }}>
          <p > 
                Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.
             </p>
             <p style={{ textAlign: 'justify', textIndent: '16.5rem', lineheight: '160%', fontSize: "18px", }}>
               Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit.
             </p>
          
          </div>
  </div>
  
        </div>
  
  
        <div>
        <Offcanvas show={show} onHide={handleClose} placement='end' >
                  <Offcanvas.Header closeButton className='text-center '>
                      <br />   <Offcanvas.Title > <h5 className='fw-bold'>Best Time To Visit In <br /> Kumbakonam</h5>
                      </Offcanvas.Title>
                  </Offcanvas.Header>
                  
                  <Offcanvas.Body >
                      <h6 className='fw-bold'>
                      Kumbakonam in Winter (October - February)
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                      <p >
                  The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months
                </p>
                </div>
                       <div>
                          <h6 className=' mt-5 fw-bold'>
                          Kumbakonam in Monsoon (June - August)
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                      <p >
                  The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam.
                </p>
                      </div>
                  </div>
                  
                  <div>
                          <h6 className=' mt-5 fw-bold'>
                          Kumbakonam in Summer (March - May)
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                      <p >
                  Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.
                </p>

                      </div>
                  </div>
                      
  
                      
  
                          
  
                  </Offcanvas.Body>
              </Offcanvas> 
        </div>
  
      </section>
  
  
    )
  }
  
  export default Kumbakonamvisit