import React from 'react';
import Subtitle from '../../Subtitle.jsx';
import '../../../styles/Section4.css';
import road from '../../../images/road.png';
import step1 from '../../../images/step01.png';
import step2 from '../../../images/step02.png';
import step3 from '../../../images/step03.png';
import step4 from '../../../images/step04.png';

function RentHow() {
    return (
        <div className="rent-how-picture">
            <div className='container container__rent-how'>
                <Subtitle text={
                    <>
                        <span className="black-subtitle subtitle__rent-how">Как взять машину
                            <br />в аренду?</span></>
                } />
                <p className='rent-how__step step-1'>
                    Выберите автомобиль и&nbsp;отправьте заявку
                    <img className="step-img step-img-01" src={step1} alt="number of step" />
                </p>
                <p className='rent-how__step step-2'>
                    Дождитесь звонка менеджера
                    <img className="step-img step-img-02" src={step2} alt="number of step" />
                </p>
                <p className='rent-how__step step-3'>
                    <img className="step-img step-img-03" src={step3} alt="number of step" />
                    Пригласим Вас в&nbsp;офис&nbsp;для&nbsp;заключения договора
                </p>
                <p className='rent-how__step step-4'>
                    <img className="step-img step-img-04" src={step4} alt="number of step" />
                    После инструктажа можно приступать к работе
                </p>
            </div>
            <img className="road-picture" src={road} alt="road" width="100%" />
        </div>
    )
}

export default RentHow;