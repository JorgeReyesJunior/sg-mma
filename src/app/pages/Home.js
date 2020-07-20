import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import Carousel from '../components/Carousel/Carousel';
import Curriculum from '../components/Curriculum/Curriculum';
import CurriculumMap from '../../assets/data/CurriculumMap';
import Program from '../components/Program/Program';
import ProgramMap from '../../assets/data/ProgramMap';

function Home() {
  return (
    <section id="home">
      <Carousel
        slides={CurriculumMap}
        // TODO: Add auto rotate
        // slideTime={5}
      />
      <Curriculum
        curriculum={CurriculumMap}
      />
      <Program
        programs={ProgramMap}
      />
      <Calendar />
    </section>
  )
};

export default Home;