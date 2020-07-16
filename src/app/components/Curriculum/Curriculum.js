import React from 'react';
import CurriculumCard from './CurriculumCard';
import './Curriculum.css';

function Curriculum(props) {
  return (
    <section id='curriculum' className="c-curriculum">
      <h1 className={'c-curriculum__title'}>Explore the Artemis Academy Programs</h1>
      <div className={'c-curriculum__grid'}>
        {
          props.curriculum.map((course, i) => {
            return (
              <CurriculumCard key={i*i} class={course} />
            )
          })
        }
      </div>
    </section>
  )
};

export default Curriculum;
