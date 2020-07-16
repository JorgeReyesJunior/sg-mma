import React, { useState } from 'react';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Nav from '../Nav/Nav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navState = () => {
    return isOpen ? "o-app__nav c-nav c-nav--is-open" : "o-app__nav c-nav"
  };

  function toggleMenu() {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="o-app__header">
      <Logo />
      <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav navState={navState} toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header;
