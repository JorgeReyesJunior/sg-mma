import React from 'react';
import RightArrow from '../../../assets/icons/chevron-icon.svg';

function CarouselRightArrow(props) {
  return (
    <button className="c-carousel__arrow c-carousel__arrow--right" onClick={props.onClick}>
      <img className="c-carousel__arrow--icon" src={RightArrow} alt='Carousel left arrow.' />
    </button>
  )
}

export default CarouselRightArrow;