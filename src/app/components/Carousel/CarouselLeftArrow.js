import React from 'react';
import LeftArrow from '../../../assets/icons/chevron-icon.svg';

function CarouselLeftArrow(props) {
  return (
    <button className="c-carousel__arrow c-carousel__arrow--left" onClick={props.onClick}>
      <img className="c-carousel__arrow--icon" src={LeftArrow} alt='Carousel left arrow.' />
    </button>
  )
}

export default CarouselLeftArrow;