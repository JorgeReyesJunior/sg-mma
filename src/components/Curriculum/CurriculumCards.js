import React from 'react';
import Accordion from '../Accordion/Accordion';
import Curriculum from '../../data/curriculum';

function CurriculumCards() {
  return (
      <section id='curriculum' className="c-curriculum">
        <h1>Explore the Artemis Academy Programs</h1>
        <p>Description.</p>
        {
          Curriculum.map((Class, i) => {
            return (
              <Accordion key={i*i} class={Class} />
            )
          })
        }
      </section>
  )
};

export default CurriculumCards;
