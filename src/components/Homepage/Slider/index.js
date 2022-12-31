import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  '../../../assets/css/bootstrap.min.css';
import  '../../../assets/css/styles.css';
import Banner1 from '../../../assets/img/content/slider/slide1.jpg';
import Banner2 from '../../../assets/img/content/slider/slide2.jpg';
import Banner3 from '../../../assets/img/content/slider/slide3.jpg';
import { SliderContainer } from './SliderElements';


function Slider() {
  return (
    <>
    <SliderContainer>

   <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="The Northern Coalition For Peter Obi"
        />
        <Carousel.Caption>
           <h1 className="text-white fw-600 fs-60">Northern Coalition For Peter Obi</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Our Candidates"
        />

        <Carousel.Caption>
           <h1 className="text-white fw-600 fs-60">Candidates</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Donate"
        />

        <Carousel.Caption>
          <h1 className="text-white fw-600 fs-60">Donate</h1>
          <p>
           Support our efforts, donate to the campaign
          </p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
</SliderContainer>


       
    </>
  );
}

export default Slider;