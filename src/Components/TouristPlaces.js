import React from 'react'
import '../Styles/TouristPlaces.css'
import { Link } from 'react-scroll'
import { Row, Col } from 'react-bootstrap'

const TouristPlaces = () => {

    /* const touristPlaces =
    [
        {
            id:1,
            title:"Chennai",
        },
        {
            id:2,
            title:"Kodaikanal",
        },
        {
            id:3,
            title:"Madurai",
        },
        {
            id:4,
            title:"Kumbakonam",
        },
        {
            id:5,
            title:"Theni",
        },
        {
            id:6,
            title:"Rameswaram",
        },
        {
            id:7,
            title:"Ooty",
        },
        {
            id:8,
            title:"Kanyakumari",
        },
        {
            id:9,
            title:"Yarcaud",
        },
        {
            id:10,
            title:"Hogenakkal",
        },
    ]; */
  return (
    <div className='container'>
        <p className='text-center places-text'>
            Tourist Places To Tamil Nadu 
            <br />
            Here Are The Top Places To Visit In Tamil Nadu In 2023
        </p>
        
            
          {/* <ul>
               {touristPlaces.map((places) => (
                <li>
                   <Link
                        to={places.title}
                        smooth={true}
                        offset={-430}
                        duration={500}
                        >
                        {places.title}
                   </Link>
                </li>
                ))}
               
               </ul>  */}     
           
            <ul className='bottomMargin topMargin '>
                <Row>
                    <Col className="text-center">
                        <li>
                             <Link to='chennai' smooth='true' offset='100' duration='500'>Chennai</Link> 
                             {/* <a href="#chennai">Chennai</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='kodaikanal' smooth='true' offset='100' duration='500'>Kodaikanal</Link> 
                            {/* <a href="#kodaikanal">Kodaikanal</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='madurai' smooth='true' offset='100' duration='500'>Madurai</Link> 
                            {/* <a href="#madurai">Madurai</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='kumbakonam' smooth='true' offset='100' duration='500'>Kumbakonam</Link> 
                            {/* <a href="#kumbakonam">Kumbakonam</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">   
                        <li>
                            <Link to='theni' smooth='true' offset='100' duration='500'>Theni</Link> 
                            {/* <a href="#theni">Theni</a> */}
                        </li>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <li>
                            <Link to='rameswaram' smooth='true' offset='100' duration='500'>Rameswaram</Link>
                            {/* <a href="#rameswaram">Rameswaram</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                           <Link to='ooty' smooth='true' offset='100' duration='500'>Ooty</Link> 
                           {/*  <a href="#ooty">Ooty</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='kanyakumari' smooth='true' offset='100' duration='500'>Kanyakumari</Link> 
                            {/* <a href="#kanyakumari">Kanyakumari</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='yarcaud' smooth='true' offset='100' duration='500'>Yarcaud</Link> 
                            {/* <a href="#yarcaud">Yarcaud</a> */}
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='hogenkkal' smooth='true' offset='100' duration='500'>Hogenakkal</Link> 
                            {/* <a href="#hogenkkal">Hogenakkal</a> */}
                        </li>
                    </Col>
                </Row>
            </ul>
           
    </div>
   
  )
}

export default TouristPlaces