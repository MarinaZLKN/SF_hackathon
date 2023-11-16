import React from 'react';
import Subtitle from '../../Subtitle.jsx';
import'../../../styles/Section4.css';

function RentAll() {
    return (
        <div className='container container--rent-all'>
            <Subtitle text={
                <>
                    <span className="black-subtitle">Все, что вам нужно
                        <br />для </span>
                    <span className="yellow-subtitle">аренды авто </span></>
            } />
        </div>
    )
}

export default RentAll;