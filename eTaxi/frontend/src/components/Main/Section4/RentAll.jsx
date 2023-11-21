import React from 'react';
import Subtitle from '../../Subtitle.jsx';
import '../../../styles/Section4.css';

function RentAll() {
    return (
        <div className='container container__rent-all'>
            <Subtitle text={
                <>
                    <span className='black-subtitle'>Все, что вам нужно
                        <br />для </span>
                    <span className='yellow-subtitle'>аренды авто </span></>
            } />
            <ul className='rent-all-list'>
                <li className='rent-all-item'>
                    <span className='rent-all-item--border'>Ваш возраст <span className='rent-all-item--yellow'>21+</span></span>
                </li>
                <li className='rent-all-item'>
                    <span className='rent-all-item--border'>Опыт вашего вождения <span className='rent-all-item--yellow'>3+</span></span>
                </li>
                <li className='rent-all-item'>
                    <span className='rent-all-item--border'>Водительские права категории <span className='rent-all-item--yellow'>«В»</span></span>
                </li>
            </ul>
        </div>
    )
}

export default RentAll;