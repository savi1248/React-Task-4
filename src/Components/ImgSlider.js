import React from 'react'
import '../Styles/ImgSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import { Row,Col } from 'react-bootstrap'
import carouselFirst from '../Images/Carousel-img1.jpg'
import carouselSecond from '../Images/Carousel-img2.jpeg'
import carouselThird from '../Images/Carousel-Img3.jpeg'
import carouselFourth from'../Images/Carousel-Img4.jpeg'
import carouselFifth from '../Images/Carousel-img5.jpeg'

const ImgSlider = () => {
  return (
    <div className='container'>
      <Row className="justify-content-center align-items-center">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
               className="d-block w-100"
               src={carouselFirst}
               alt="First slide"
               height="510vh" 
               fluid
              />
              <Carousel.Caption>
               <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={carouselSecond}
                height="510vh" 
                fluid
              />
              <Carousel.Caption>
               <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
               className="d-block w-100"
               src={carouselThird}
               height="510vh" 
               alt="Third slide"
               fluid
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
             <img
               className="d-block w-100"
               src={carouselFourth}
               height="510vh" 
               alt="Third slide"
               fluid
             />
             <Carousel.Caption>
               <h3></h3>
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
             <img
                className="d-block w-100"
                src={carouselFifth}
                height="510vh" 
                alt="Third slide"
                fluid
             />
            <Carousel.Caption>
              <h3></h3>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default ImgSlider