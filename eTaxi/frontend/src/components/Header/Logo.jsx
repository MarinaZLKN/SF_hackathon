import React from 'react';
import logo from '../../images/Group 8.png'
import '../../styles/Header.css'

function Logo (){
  return (
    <div className="logo">
      <img src={logo} alt="eTaxi logo" />
    </div>
  );
};

export default Logo;