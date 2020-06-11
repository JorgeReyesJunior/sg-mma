import React, { useState } from 'react';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';
import CarouselSlide from './CarouselSlide';
import CarouselIndicator from './CarouselIndicator';

function Carousel(props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = props.slides.length - 1;

  function goToPrevSlide(e) {
    let index = activeSlide;
  
    --index;
  
    // If at first slide, loop back to last.
    if (index < 0 ) {
      index = slides;
    }
  
    setActiveSlide(index)
  }

  function goToNextSlide(e) {
    let index = activeSlide;

    ++index;

    // If at last slide, loop back to first.
    if (index > slides) {
      index = 0
    }

    setActiveSlide(index)
  }

  return (
    <div className="c-carousel">
        <CarouselLeftArrow onClick={e => goToPrevSlide(e)} />
        <ul className="c-carousel__slides">
          {
            props.slides.map((slide, i) => {
              return (
                <CarouselSlide key={i*i} index={i} slide={slide.component} activeSlide={activeSlide} />
              )
            })
          }
        </ul>
        <CarouselRightArrow onClick={e => goToNextSlide(e)} />
        <ul className="c-carousel__indicators c-carousel__indicators--in-carousel">
          {
            props.slides.map((slide, i) => {
              return (
                <CarouselIndicator key={i*i} index={i} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
              )
            })
          }
        </ul>
    </div>
  );
}

export default Carousel;
