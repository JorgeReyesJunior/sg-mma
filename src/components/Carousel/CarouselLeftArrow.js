import React from 'react';

function CarouselLeftArrow(props) {
  return (
    <button className="c-carousel__arrow c-carousel__arrow--left" onClick={props.onClick}>
      {`<`}
    </button>
  )
}

export default CarouselLeftArrow;