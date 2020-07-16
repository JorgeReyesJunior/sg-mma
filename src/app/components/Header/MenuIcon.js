import React from 'react';
import HamburgerMenuIcon from '../../../assets/icons/menu-icon.svg';
import CloseMenuIcon from '../../../assets/icons/close-icon.svg';

function MenuIcon(props) {
  if(props.isOpen) {
    return (
      <div className="o-app__menu o-app-menu--is-open" onClick={props.toggleMenu}>
        <img className="o-app__menu--icon" src={CloseMenuIcon} alt="Hamburger menu." />
      </div>
    )
  } else {
    return (
      <div className="o-app__menu" onClick={props.toggleMenu}>
        <img className="o-app__menu--icon" src={HamburgerMenuIcon} alt="Close hamburger menu." />
      </div>
    )
  }
}

export default MenuIcon;
