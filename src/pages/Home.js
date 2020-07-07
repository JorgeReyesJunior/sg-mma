import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import CurriculumCards from '../components/Curriculum/CurriculumCards.js';
import Calendar from '../components/Calendar/Calendar';
import slides from '../data/slides';

function Home() {
  return (
    <section id="home">
      <Carousel slides={slides} slideTime={5} />
      <CurriculumCards />
      <Calendar />
    </section>
  )
};

export default Home;