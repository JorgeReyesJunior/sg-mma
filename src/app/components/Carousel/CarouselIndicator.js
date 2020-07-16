import React from 'react';

function CarouselIndicator(props) {
  const className = () => {
    if(props.index === props.activeSlide) {
      return "c-carousel__indicator c-carousel__indicator--active"
    } else {
      return "c-carousel__indicator"
    }
  }
  
  function goToSelectedSlide(e) {
    let index = props.index;
    
    props.setActiveSlide(index)
  }

  return (
    <li className={className()} onClick={e => goToSelectedSlide(e)}></li>
  )
}

export default CarouselIndicator;