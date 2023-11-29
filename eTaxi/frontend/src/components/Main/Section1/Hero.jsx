import React from 'react';
import '../../../styles/Hero.css';
import '../../../styles/App.css';
import car from '../../../images/auto-ya 1.png';
import icon1 from '../../../images/Ellipse 2.png';


function Hero () {

    return(
        <div className="hero-container">
            <div className="hero-upper">
                <div className="hero-title">
                    <p className="car-title"> Аренда авто</p>
                </div>
                <div className="hero-picture">
                    <img className="car-picture" src={car} />
                    <div className="light-glow"></div>
                </div>
                <div className="hero-info">
                    <p>Забаратывайте от 3 000 ₽/день</p>
                    <p>в нашем таксопарке</p>
                </div>
            </div>
            <div className="hero-down">
                <div className="hero-down_left">
                    <div className="hero-down_title">
                        <p className="down-title">Первый день бесплатно</p>
                    </div>

                </div>
                <div className="hero-down_right">
                    <div className="hero-down_right-block">
                        <div className="hero-down_right-block-1">
                            <img src={icon1} alt="icon"/>
                            <p className="down_right-title">Возможность выкупа авто</p>
                        </div>
                        <div className="hero-down_right-block-1">
                            <img src={icon1} alt="icon"/>
                            <p className="down_right-title">Все наши авто на газу</p>
                        </div>
                        <div className="hero-down_right-block-1">
                            <img src={icon1} alt="icon"/>
                            <p className="down_right-title">Оплата ДТП на нас</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Hero;