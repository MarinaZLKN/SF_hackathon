import React from 'react';
import '../../../styles/Button.css'
import arrow from '../../../images/arrow-left.svg';

const CustomPrevButton = ({ onClick }) => (
  <button className="custom-prev-button" onClick={onClick}>
    <img src={arrow} alt="arrow"/>
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button className="custom-next-button" onClick={onClick}>
     <img src={arrow} alt="arrow"/>
  </button>
);

export { CustomPrevButton, CustomNextButton };