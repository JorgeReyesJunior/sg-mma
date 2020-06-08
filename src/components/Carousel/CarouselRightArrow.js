import React from 'react';

function CarouselRightArrow(props) {
  return (
    <button className="c-carousel__arrow c-carousel__arrow--right" onClick={props.onClick}>
      {`>`}
    </button>
  )
}

export default CarouselRightArrow;