import React from 'react'
import "../../Styles/Besttimetovisit/Chennaivisit.css";
import kodai1 from '../../Images/kodai-1.jpeg'
import kodai2 from '../../Images/kodai-2.jpeg'
import kodai3 from '../../Images/kodai3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Kodaikanalvisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className=''>


            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton className='text-center '>
                    <br />   <Offcanvas.Title > <h5>Best Time To Visit In <br /> Kodaikanal</h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body >
                    <h6 className='fw-bold'>
                    Kodaikanal in Summer ( March-June )
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                       <p>
                       Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom.
                       The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art-works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                       </p>
                    </div>

                     <div>
                        <h6 className=' mt-5 fw-bold'>
                        Kodaikanal in Winter ( December-February )
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                    <p>
                       Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom.
                       The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art-works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                       </p>
                    </div>
                </div>
                
                <div>
                        <h6 className=' mt-5 fw-bold'>
                        Kodaikanal in Monsoon ( June-September)
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                    <p>With a temperature that rarely falls below 8 degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks, and attend the famous Pongal festival celebrated during January.</p>
                    </div>
                </div>
                    

                    

                        

                </Offcanvas.Body>
            </Offcanvas>

            <section className='mt-5 mg-5' >
                <div className="text-center">
                    


                    <div className="row row-cols-2 mt-5" >

                        <div className='parag'>

                            <div className="text-start"> <br />
                                <h2 className='mt-4  '>03.Kodaikanal</h2>
                                <h5 className='mt-5 fw-bold ' >What is the Best time to visit: </h5>
                            </div>

                            <p style={{  fontSize: "18px", }}>
                            The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colourful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.
                            </p>

                            <p style={{  fontSize: "18px", }} >
                            Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy-tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January. 
                            </p>

                        </div>
                        <div className='mt-4'>
                            <div
                                className="modal show "
                                style={{ display: 'block', position: 'relative' }}
                            >
                                <Modal.Dialog>
                                    <Modal.Header closeButton className='text-center'>
                                        <Modal.Title className='fw-bold'>More About Best Time To Travel To Kodaikanal</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body >
                                        <div className=' row  row-cols-3 text-center'>
                                            <div>
                                                <img src={kodai1} alt="che1" style={{ width: "100px", height: "160px" }} />
                                                <p> Upper Lake <br />Source</p>
                                            </div>
                                            <div>
                                                <img src={kodai2} alt="che2" style={{ width: "100px", height: "160px" }} />
                                                <p> Kodaikanal<br />Lake <br />Source</p>
                                            </div>
                                            <div>
                                                <img src={kodai3} alt="che3" style={{ width: "100px", height: "160px" }} />
                                                <p> Pillar Rocks<br />Source</p>
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
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Kodaikanalvisit