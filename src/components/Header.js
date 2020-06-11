import React, { useState, Fragment }  from 'react';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Nav from './Nav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const className = () => {
    return isOpen ? "o-app__nav c-nav c-nav--is-open" : "o-app__nav c-nav"
  };

  function toggleMenu() {
    setIsOpen(!isOpen);
  };
  
  return (
    <Fragment>
      <header className="o-app__header">
        <Logo />
        <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        <Nav navState={className} toggleMenu={toggleMenu} />
      </header>
    </Fragment>
  )
}

export default Header;
