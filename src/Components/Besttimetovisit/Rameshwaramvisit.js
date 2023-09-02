import React from 'react'
import "../../Styles/Besttimetovisit/Rameshwaramvisit.css";
import rm1 from '../../Images/rm1.jpeg'
import rm2 from '../../Images/rm-2.jpeg'
import rm3 from '../../Images/rm-3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Rameshwaramvisit = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <section className='mg-sm-5'>
      <div className='row row-cols-2  '>
        <div>
          <h2 className=''>02.Rameshwaram</h2>
          <div
            className="modal show   "
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton className='text-center'>
                <Modal.Title className='fw-bold'>More About Best Time To Travel To Rameshwaram</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className=' row row-cols-3 text-center'>
                  <div>
                    <img src={rm1} alt="che1" style={{ width: "100px", height: "160px" }} />
                    <p> Railway <br /> Bridge <br />Source</p>
                  </div>
                  <div>
                    <img src={rm2} alt="che2" style={{ width: "100px", height: "160px" }} />
                    <p> Lighthouse <br />Source</p>
                  </div>
                  <div>
                    <img src={rm3} alt="che3" style={{ width: "100px", height: "160px" }} />
                    <p> Pilgrim<br />Temple<br />Source</p>
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
          <h3 className='mt-5 fw-bold'>What is the best time to visit :</h3>

        </div>
        <div style={{ textAlign: 'justify', textIndent: '16.5rem', lineheight: '160%', fontSize: "18px", }}>
          <p> The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celcius. This is the most pleasant season for sightseeing and visiting neighbourhoods. The Monsoons (July to September) are humid with average rainfalls, but, the scenic view of the coastal region during these months is enjoyable. </p>
          <p>
          Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrims flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.
            
          </p>
        </div>
</div>

      </div>


      <div>
      <Offcanvas show={show} onHide={handleClose} placement='end' >
                <Offcanvas.Header closeButton className='text-center '>
                    <br />   <Offcanvas.Title > <h5>Best Time To Visit In <br /> Rameshwaram</h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body >
                    <h6 className='fw-bold'>
                    Rameshwaram in Winter (December - February) 
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                       <p>Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay.
During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.</p>
                    </div>

                     <div>
                        <h6 className=' mt-5 fw-bold'>
                        Rameshwaram in Monsoon (July - October) 
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                       <p>The monsoons in Rameshwaram experience temperatures ranging from 28 degree Celsius to 35 degree Celsius. These temperatures are similar to those during the summers, as is the climate except the small relief of humidity received due to short but effective downpours. Though monsoons are humid, August-October offers a good climate to explore Rameswaram as temperatures drop down during this time.</p>
                    </div>
                </div>
                
                <div>
                        <h6 className=' mt-5 fw-bold'>
                        Rameshwaram in Summer (March - June) 
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                       <p>The summers in Rameshwaram last from April to July and the average temperatures during this time range from 27 degree Celsius to 40 degree Celsius. Summers are also called the pilgrim season in Rameshwaram, meaning the town may be exceptionally crowded with chances of various processions and chants throughout the area. The climate in the summers stays hot, as is usual for most Tamil Nadu towns, with the afternoons being exceptionally sunny. However, the rest of the day is said to clear up, and the heat may not bother you as much.</p>
                    </div>
                </div>
                    

                    

                        

                </Offcanvas.Body>
            </Offcanvas> 
      </div>

    </section>


  )
}

export default Rameshwaramvisit