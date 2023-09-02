import React from 'react'
import "../../Styles/Besttimetovisit/Chennaivisit.css";
import kanya1 from '../../Images/kanya1.jpeg'
import kanya2 from '../../Images/kanya2.jpeg'
import kanya3 from '../../Images/kanya3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Kanyakumarivisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className=''>


            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton className='text-center '>
                    <br />   <Offcanvas.Title > <h5>Best Time To Visit In <br /> Kanyakumari</h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body >
                    <h6 className='fw-bold'>
                    Kanyakumari in Winters (October to March)
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                    <p>
                    Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favourable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15 degree celcius to 35 degree celcius. It is also the perfect time for indulging in beach activities like sunbathing, swimming and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time.
                  </p>
                    </div>

                     <div>
                        <h6 className=' mt-5 fw-bold'>
                        Kanyakumari in Summers (April to June)
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                    <p>
                    Kanyakumari experiences moderate weather during summers, with temperatures ranging from 22 degrees to 35 degrees Celcius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with less crowd and cheaper accomodation - a perfect time for budget travellers.
                  </p>
                    </div>
                </div>
                
                <div>
                        <h6 className=' mt-5 fw-bold'>
                        Kanyakumari in Monsoons (July to September)
                    </h6>
                    <div className='mt-3' style={{textAlign: 'justify', textIndent: '4rem', fontSize:'15px'}}>
                      <p>
                    Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September, however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari.
                  </p>
                    </div>
                </div>
                    

                    

                        

                </Offcanvas.Body>
            </Offcanvas>

            <section className='mt-5 mg-5' >
                <div className="text-center">
                    


                    <div className="row row-cols-2 mt-5" >

                        <div className='parag'>

                            <div className="text-start"> <br />
                                <h2 className='mt-4 '>05.Kanyakumari</h2>
                                <h5 className='mt-5 fw-bold' >What is the Best time to visit: </h5>
                            </div>

                            <p style={{  fontSize: "18px", }}>
                            The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports going on sightseeing and outings undertaking beach activities and savouring the spectacular sunset views. With the beginning of winters in November. Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.
          </p>
          

                            <p style={{  fontSize: "18px", }} >
                            Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.
          </p>
        
                        </div>
                        <div className='mt-4'>
                            <div
                                className="modal show "
                                style={{ display: 'block', position: 'relative' }}
                            >
                                <Modal.Dialog>
                                    <Modal.Header closeButton className='text-center'>
                                        <Modal.Title className='fw-bold'>More About Best Time To Travel To Kanyakumari</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body >
                                        <div className=' row  row-cols-3 text-center'>
                                            <div>
                                                <img src={kanya1} alt="che1" style={{ width: "100px", height: "160px" }} />
                                                <p> Landspace<br />Source</p>
                                            </div>
                                            <div>
                                                <img src={kanya2} alt="che2" style={{ width: "100px", height: "160px" }} />
                                                <p> Sea<br />Source</p>
                                            </div>
                                            <div>
                                                <img src={kanya3} alt="che3" style={{ width: "100px", height: "160px" }} />
                                                <p> Coast<br />Source</p>
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


export default Kanyakumarivisit