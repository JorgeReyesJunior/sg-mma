import React from 'react';
import BG from '../../icons/picture-icon.svg';

function Banner1() {
  const jumbotron = {
    backgroundImage: `url(${BG})`
  };
  
  return (
    <section className="o-app__banner c-banner c-banner--1" style={jumbotron}>
      <div className="c-banner__overlay"></div>
      <div className="c-banner__content">
        <h1 className="c-banner__title">Banner 1 - Title</h1>
        <h3 className="c-banner__subtitle">Banner 1 - Subtitle</h3>
        <button className="c-banner__cta">Banner 1 - button</button>
      </div>
    </section>
  );
}

export default Banner1;
