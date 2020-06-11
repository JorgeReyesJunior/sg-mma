import React, { useState } from 'react';

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const Class = props.class;

  const jumbotron = {
    backgroundImage: `url(${Class.image})`
  };

  const className = ()=> {
    return isOpen ? "c-accordion__dropdown c-accordion__dropdown--is-open" : "c-accordion__dropdown"
  };

  function showMore(e) {
    setIsOpen(!isOpen);
  }

  return(
    <div className="c-accordion" style={jumbotron} onClick={e => showMore(e)}>
      <div className="c-accordion__overlay"></div>
      <div className="c-accordion__panel">
        <h1 className="c-accordion__title">{Class.title}</h1>
      </div>
      <div className={className()}>
        {
          Class.info.map((info, i) => {
            return (
              <div key={i*i}>
                <ul>
                  <li>
                    <p key={i*i}>{info.schedule}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p key={i*i}>{info.description}</p>
                  </li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Accordion;