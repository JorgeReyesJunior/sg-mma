import React, { createRef } from 'react';

function Nav(props) {
  const dropdownMenu = createRef();
  const className = () => {
    return props.navState()
  }
  
  /* TODO: Map out page anchors */
  return (
    <nav className={className()} ref={dropdownMenu}>
      <ul className="c-nav__list">
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <a className="c-nav__anchor" href="#home">Home</a>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <a className="c-nav__anchor" href="#about">About</a>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <a className="c-nav__anchor" href="#curriculum">Curriculum</a>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <a className="c-nav__anchor" href="#schedule">Schedule</a>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <a className="c-nav__anchor" href="#news-and-events">News + Events</a>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <a className="c-nav__anchor" href="#testimonials">Testimonials</a>
        </li>
        <li className="c-nav__listing" onClick={props.toggleMenu}>
          <a className="c-nav__anchor" href="#shop">Shop</a>
        </li>
        <button className="c-nav__cta" onClick={props.toggleMenu}>Free Trial</button>
      </ul>
    </nav>
  )
}

export default Nav;
