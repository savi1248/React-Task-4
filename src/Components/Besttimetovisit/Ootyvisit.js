import React from 'react'
import "../../Styles/Besttimetovisit/Rameshwaramvisit.css";
import oot1 from '../../Images/oot1.jpeg'
import oot2 from '../../Images/oot2.jpeg'
import oot3 from '../../Images/oot3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Ootyvisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
  
      <section className='mg-sm-5'>
        <div className='row row-cols-2  '>
          <div>
            <h2 className=''>04.Ooty</h2>
            <div
              className="modal show   "
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton className='text-center'>
                  <Modal.Title className='fw-bold'>More About Best Time To Travel To Ooty</Modal.Title>
                </Modal.Header>
  
                <Modal.Body>
                  <div className=' row row-cols-3 text-center'>
                    <div>
                      <img src={oot1} alt="che1" style={{ width: "100px", height: "160px" }} />
                      <p> Mountain <br /> Railway <br />Source</p>
                    </div>
                    <div>
                      <img src={oot2} alt="che2" style={{ width: "100px", height: "160px" }} />
                      <p> Ooty Lake  <br />Source</p>
                    </div>
                    <div>
                      <img src={oot3} alt="che3" style={{ width: "100px", height: "160px" }} />
                      <p> Trekking Ooty<br />Source</p>
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
          <div style={{ textAlign: 'justify', textIndent: '16.5rem', lineheight: '150%', fontSize: "17.5px"}}>
           <p>
           The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.
           </p>
           <p>
           The poised and elegant ‘Queen of Hill Stations’ welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India’s most beloved hill stations – Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories and riddles.
           </p>
          </div>
  </div>
  
        </div>
  
  
        <div>
        <Offcanvas show={show} onHide={handleClose} placement='end' >
                  <Offcanvas.Header closeButton className='text-center '>
                      <br />   <Offcanvas.Title > <h5>Best Time To Visit In <br /> Ooty</h5>
                      </Offcanvas.Title>
                  </Offcanvas.Header>
                  
                  <Offcanvas.Body >
                      <h6 className='fw-bold'>
                      Ooty in Summer (March - June) 
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                       <p>
                       Ooty experiences an average temperature that ranges between 23 degree Celsius and 31 degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.
                       </p>
                      </div>
  
                       <div>
                          <h6 className=' mt-5 fw-bold'>
                          Ooty in Winter (October - March)
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                         <p>With temperatures that stay below 15 degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.</p>
                      </div>
                  </div>
                  
                  <div>
                          <h6 className=' mt-5 fw-bold'>
                          Ooty in Monsoon ( July - September)  
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                         <p>
                         People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time nevertheless.
                         </p>
                      </div>
                  </div>
                      
  
                      
  
                          
  
                  </Offcanvas.Body>
              </Offcanvas> 
        </div>
  
      </section>
  
  
    )
  }
  
  export default Ootyvisit