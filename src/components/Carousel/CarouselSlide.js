import React from 'react';

function CarouselSlide(props) {
  const className = () => {
    if(props.index === props.activeSlide) {
      return "c-carousel__slide c-carousel__slide--active"
    } else {
      return "c-carousel__slide"
    }
  }

  return (
    <li className={className()}>{props.slide}</li>
  )
};

export default CarouselSlide;