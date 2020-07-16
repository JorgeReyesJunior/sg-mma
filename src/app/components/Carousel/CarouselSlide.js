import React from 'react';

function CarouselSlide(props) {
  const button = props.slide.button ? <button className="c-carousel__slide-cta">{props.slide.button}</button> : null;
  const className = props.index === props.activeSlide ? "c-carousel__slide c-carousel__slide--active" : "c-carousel__slide";
  const description = props.slide.description ? <h3 className="c-carousel__slide-description">{props.slide.description}</h3> : null;
  const title =  props.slide.title ? <h1 className="c-carousel__slide-title">{props.slide.title}</h1> : null;

  return (
    <li className={className} >
      <img className={'c-carousel__slide-image'} src={props.slide.backgroundImage} alt='Slide' />
      <div className="c-carousel__slide-overlay"></div>
      <div className="c-carousel__slide-content">
        {title}
        {description}
        {button}
      </div>
    </li>
  )
};

export default CarouselSlide;