import React from 'react';

function ProgramCard(props) {
  return(
    <div className="c-program__card">
      <div className="c-program__card-overlay"></div>
      <div className="c-program__card-content">
        <img src={props.program.backgroundImage} alt='icon' />
        <h1 className="c-program__card-title">{props.program.title}</h1>
        <button className="c-program__card-cta">{props.program.cta}</button>
      </div>
    </div>
  )
};

export default ProgramCard;