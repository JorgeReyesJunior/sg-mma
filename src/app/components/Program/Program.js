import React from 'react';
import ProgramCard from './ProgramCard';
import './Program.css';

function Program(props) {
  return (
    <section id='additionalResources' className="c-program">
      <h1 className={'c-program__title'}>Explore additional resources</h1>
      <div className={'c-program__grid'}>
        {
          props.programs.map((program, i) => {
            return (
              <ProgramCard key={i*i} program={program} />
            )
          })
        }
      </div>
    </section>
  )
};

export default Program;
