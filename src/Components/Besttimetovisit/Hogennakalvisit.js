import React from 'react'
import hog1 from '../../Images/hog1.jpeg'
import hog2 from '../../Images/hog2.jpeg'
import hog3 from '../../Images/hog3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Hogennakalvisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
  
      <section className='mg-sm-5'>
        <div className='row row-cols-2  '>
          <div>
            <h3 className=''>10.Hogennakal</h3>
            <div
              className="modal show   "
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton className='text-center'>
                  <Modal.Title>More About Best Time To Travel To Hogennakal</Modal.Title>
                </Modal.Header>
  
                <Modal.Body>
                  <div className=' row row-cols-3 text-center'>
                    <div>
                      <img src={hog1} alt="che1" style={{ width: "100px", height: "160px" }} />
                      <p> Winter <br />Source</p>
                    </div>
                    <div>
                      <img src={hog2} alt="che2" style={{ width: "100px", height: "160px" }} />
                      <p> Monsoon <br />Source</p>
                    </div>
                    <div>
                      <img src={hog3} alt="che3" style={{ width: "100px", height: "160px" }} />
                      <p> Dry<br />Source</p>
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
          The best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenekkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 34 degree celcius. Despite summers being an off season, a dip in the hogenekkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20 degree celcius, making it an ideal time to enjoy its spectacular beauty.
             </p>
          
             <p >
             Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks" because of the unique arrangement of the gigantic carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerised! Hogenakkal Waterfall is similar to the popular.
             </p>
          </div>
  </div>
  
        </div>
  
  
        <div>
        <Offcanvas show={show} onHide={handleClose} placement='end' >
                  <Offcanvas.Header closeButton className='text-center '>
                      <br />   <Offcanvas.Title > <h5>Best Time To Visit In <br /> Hogennakal</h5>
                      </Offcanvas.Title>
                  </Offcanvas.Header>
                  
                  <Offcanvas.Body >
                    <h6 className='fw-bold'>
                    Hogenkkal in Winter (November - February)
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                    <p>
                  Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, and there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks' - the sultry mist as the water strikes the rocks covers the base in a myriad of colours. Rainbows adorn the falls and the scene is postcard-perfect.
                </p>
                    </div>

                     <div>
                        <h6 className=' mt-5 fw-bold'>
                        Hogenkkal in Monsoon (July-September)
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                    <p >
                  Hogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and more.
                </p>
                    </div>
                </div>
                
                <div>
                        <h6 className=' mt-5 fw-bold'>
                        Hogenkkal in Summer (March-June)
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                    <p>
                  The Indian Peninsula lies in the tropics, and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views, and have been featured in many films as well.
                </p>
                    </div>
                </div>
                    

                    

                        

                </Offcanvas.Body>
              </Offcanvas> 
        </div>
  
      </section>
  
  
    )
  }
  
  

export default Hogennakalvisit