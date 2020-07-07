import React, { createRef } from 'react';
import { Link } from "react-router-dom";

function Nav(props) {
  const dropdownMenu = createRef();
  
  const navState = () => {
    return props.navState();
  }
  
  return (
    <nav className={navState()} ref={dropdownMenu}>
      <ul className="c-nav__list">
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/" className="c-nav__anchor">Home</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/about" className="c-nav__anchor">About</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/#curriculum" className="c-nav__anchor">Curriculum</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/#schedule" className="c-nav__anchor">Schedule</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/news-and-events" className="c-nav__anchor">News + Events</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/testimonials" className="c-nav__anchor">Testimonials</Link>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <Link to="/shop" className="c-nav__anchor">Shop</Link>
        </li>
        <button className="c-nav__cta" onClick={props.toggleMenu}>Free Trial</button>
      </ul>
    </nav>
  )
}

export default Nav;
