import React, { createRef } from 'react';

function Nav() {
  /* TODO: Add animation/ css transition */
  
  const dropdownMenu = createRef();
  
  return (
    <nav className="o-app__nav c-nav c-nav--dropdown" ref={dropdownMenu}>
      <ul className="c-nav__list">
        <li className="c-nav__listing">
          <a className="c-nav__anchor" href="#home">Home</a>
        </li>
        <li className="c-nav__listing">About</li>
        <li className="c-nav__listing">Curriculum</li>
        <li className="c-nav__listing">Schedule</li>
        <li className="c-nav__listing">News + Events</li>
        <li className="c-nav__listing">Testimonials</li>
        <li className="c-nav__listing">Shop</li>
        <button className="c-nav__cta">Free Trial</button>
      </ul>
    </nav>
  )
}

export default Nav;
