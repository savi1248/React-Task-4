
// import "../../Styles/Home/Chennai.css";
import "../../Styles/Besttimetovisit/Besttime.css";
import img1 from '../../Images/Coonoor.jpeg'
import monsoon from '../../Images/monsoon.jpg'
import winter from '../../Images/winter.jpg'
import summer from '../../Images/summer.jpg'
import { Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

const Besttime = () => {


    return (

        <section className='mt-5 mg-5' >
            <div className="para-1" >
                <div className="text-start">
                    <h4 className='fw-bold'>TAMILNADU TOURISM</h4>
                    <h3 className='fw-bold'>Best Time To Visit</h3>
                </div>
                <div className="row row-cols-2 mt-5">
                    <div className="text-center">
                        <img src={img1} style={{ width: "540px", height: "300px" }} />
                        <div >
                            <h6 className="fs-6 fw-bold">Best Time To Visit</h6>
                        </div>

                    </div>
                    <div className="text">
                        <h5 className='fw-bold' > More about Best Time To Travel In TamilNadu</h5>

                        <div>

                            <Accordion className="mt-5">
                                <Accordion.Item eventKey="summer">
                                    <Accordion.Header>Tamil Nadu in Summer (March-May)</Accordion.Header>
                                    <Accordion.Body style={{ textIndent: "3rem", textAlign: "justify" }}
                                    >
                                        This season begins in March and lasts until May. The temperatures are high, ranging between 35°C
                                        and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is
                                        not very convenient because of the improper temperature. The season, however, is visited to witness
                                        the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, another
                                        important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated
                                        in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions
                                        on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the temperature
                                        is pleasant and has scenic views that tourists can witness.
                                        <Image

                                            style={{ width: "100%", height: "auto" }}
                                            src={summer}
                                            alt="Pillar Rocks of Kodaikanal Source"
                                        />

                                        <p className="text-center"> Pillar Rocks of Kodaikanal
                                            Source </p>
                                    </Accordion.Body>

                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Tamil Nadu in Monsoon (June-September)</Accordion.Header>
                                    <Accordion.Body style={{ textIndent: "3rem", textAlign: "justify" }}>
                                        This southern state sees monsoon two times a year - once between June to September and
                                        the retreating monsoon in November and December. The temperature is slightly less than what it
                                        is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the
                                        humidity during this time is high especially in coastal regions. Some of the hilly areas see massive
                                        rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil
                                        Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe place to visit.
                                        <Image className="image align-center"
                                            style={{ width: "100%", height: "auto" }}
                                            src={monsoon}
                                            alt="A Rainy Day in Chennai Source"
                                        />

                                        <p className="text-center">A Rainy Day in Chennai
                                            Source</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header >Tamil Nadu in Winter(October-February)</Accordion.Header>
                                    <Accordion.Body style={{ textIndent: "3rem", textAlign: "justify" }}>
                                        Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.
                                        <Image
                                            style={{ width: "100%", height: "auto" }}
                                            src={winter}
                                            alt="Pechiparai Reservoir in Kanyakumari District
Source"
                                        />

                                        <p className="text-center">Pechiparai Reservoir in Kanyakumari District
                                            Source</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <p>The best time to visit Tamil Nadu is during the winter season, i.e. from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.</p>
                </div>


            </div>
        </section>


    )
}

export default Besttime