import React from 'react';

function CurriculumCard(props) {
  return(
    <div className="c-curriculum__card">
      <div className="c-curriculum__card-overlay"></div>
      <div className="c-curriculum__card-title">
        <h1 className="c-title">{props.class.title}</h1>
      </div>
      <div className="c-curriculum__card-content">
        <img src={props.class.backgroundImage} alt='icon' />
      </div>
    </div>
  )
};

export default CurriculumCard;