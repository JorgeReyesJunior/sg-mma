import React from 'react';
import BG from '../../icons/maps-icon.svg';

function Banner2() {
  const jumbotron = {
    backgroundImage: `url(${BG})`
  };
  
  return (
    <div className="c-banner c-banner--2" style={jumbotron}>
      <div className="c-banner__overlay"></div>
      <div className="c-banner__content">
        <h1 className="c-banner__title">Banner 2 - Title</h1>
        <h3 className="c-banner__subtitle">Banner 2 - Subtitle</h3>
        <button className="c-banner__cta">Banner 2 - button</button>
      </div>
    </div>
  );
}

export default Banner2;
