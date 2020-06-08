import React, { useState, Fragment }  from 'react';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Nav from './Nav';

function Header() {
  const [dropdownMenuState, setDropdownMenuState] = useState(false);

  /* TODO: Add animation/ css transition */
  function toggleMenu() {
    setDropdownMenuState(!dropdownMenuState);
  };

  /* TODO: Add animation/ css transition */
  function renderDropdownMenu() {
    if (!dropdownMenuState) {
      return null;
    } else if(dropdownMenuState) {
      return (
        <Nav />
      );
    }
  };
  
  return (
    <Fragment>
      <header className="o-app__header">
        <Logo />
        <MenuIcon isOpen={dropdownMenuState} toggleMenu={toggleMenu} />
    </header>
      { renderDropdownMenu() }
    </Fragment>
  )
}

export default Header;
