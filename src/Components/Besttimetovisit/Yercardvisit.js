import React from 'react'
import yer1 from '../../Images/yer1.jpeg'
import yer2 from '../../Images/yer2.jpeg'
import yer3 from '../../Images/yer3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Yercardvisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
  
      <section className='mg-sm-5'>
        <div className='row row-cols-2  '>
          <div>
            <h3 className=''>08.Yercard</h3>
            <div
              className="modal show   "
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton className='text-center'>
                  <Modal.Title>More About Best Time To Travel To Yercard</Modal.Title>
                </Modal.Header>
  
                <Modal.Body>
                  <div className=' row row-cols-3 text-center'>
                    <div>
                      <img src={yer1} alt="che1" style={{ width: "100px", height: "160px" }} />
                      <p> Easemytrip <br />Source</p>
                    </div>
                    <div>
                      <img src={yer2} alt="che2" style={{ width: "100px", height: "160px" }} />
                      <p> Oyorooms <br />Source</p>
                    </div>
                    <div>
                      <img src={yer3} alt="che3" style={{ width: "100px", height: "160px" }} />
                      <p> Hiveminer<br />Source</p>
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
            <h5 className='mt-5'>What is the best time to visit :</h5>
  
          </div>
          <div style={{ textAlign: 'justify', textIndent: '16.5rem', lineheight: '160%', fontSize: "18px", }}>
          <p > 
                October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans. but the rains make this place extra beautiful and you might not want to miss that either.
             </p>
             <p >
               Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best.
             </p>
          </div>
  </div>
  
        </div>
  
  
        <div>
        <Offcanvas show={show} onHide={handleClose} placement='end' >
                  <Offcanvas.Header closeButton className='text-center '>
                      <br />   <Offcanvas.Title > <h5>Best Time To Visit In <br /> Yercard</h5>
                      </Offcanvas.Title>
                  </Offcanvas.Header>
                  
                  <Offcanvas.Body >
                      <h6 className='fw-bold'>
                      Yercaud in Summer (March-June)
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                      <p >
                  With temperatures that hardly move out of the range between 24 degree Celsius and 28 degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady?s Seat. Apart from these attractions, one particular festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.
                </p>
                </div>
  
                       <div>
                          <h6 className=' mt-5 fw-bold'>
                          Yercaud in Winter (November - February)
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                      <p >
                  Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15 degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear?s Cave, Pagoda Point, Shevaroy Temple, and Anna Park, if you plan to visit this beautiful place during winter.
                </p>
                        </div>
                  </div>
                  
                  <div>
                          <h6 className=' mt-5 fw-bold'>
                          Yercaud in Monsoon (July-September)
                      </h6>
                      <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                      <p >
                  Yercaud experiences a hot and humid monsoon with temperatures that range between 20 degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time.
                </p>
                        </div>
                  </div>
                      
  
                      
  
                          
  
                  </Offcanvas.Body>
              </Offcanvas> 
        </div>
  
      </section>
  
  
    )
  }
  
  
export default Yercardvisit