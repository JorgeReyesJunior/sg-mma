import React from 'react';
import LogoIcon from '../../../assets/icons/logo.png';

function Logo() {
  return (
    <div className="o-app__logo">
      <img className="o-app__logo--icon" src={LogoIcon} alt="Logo." />
    </div>
  )
}

export default Logo;
