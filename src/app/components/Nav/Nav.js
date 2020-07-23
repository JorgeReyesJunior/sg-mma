import React, { createRef } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

function Nav(props) {
  const dropdownMenu = createRef();
  
  const navState = () => {
    return props.navState();
  }
  
  return (
    <nav className={navState()} ref={dropdownMenu}>
      <ul className="c-nav__list">
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy/" className="c-nav__anchor">Home</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy-about" className="c-nav__anchor">About</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy#curriculum" className="c-nav__anchor">Curriculum</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy#schedule" className="c-nav__anchor">Schedule</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy#additionalResources" className="c-nav__anchor">Additional Resources</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy-news-and-events" className="c-nav__anchor">News + Events</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy-testimonials" className="c-nav__anchor">Testimonials</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/artemis-academy-shop" className="c-nav__anchor">Shop</Link>
        </li>
        <button className="c-nav__cta" onClick={props.toggleMenu}>Free Trial</button>
      </ul>
    </nav>
  )
}

export default Nav;
