import React from 'react';
import Subtitle from '../../Subtitle.jsx';
import'../../../styles/Section4.css';

function RentHow() {
    return (
        <div className='container container--rent-how'>
            <Subtitle text={
                <>
                    <span className="black-subtitle">Как взять машину
                        <br />в </span>
                    <span className="yellow-subtitle">аренду?</span></>
            } />
        </div>
    )
}

export default RentHow;