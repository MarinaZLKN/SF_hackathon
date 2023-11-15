import React from 'react';
import '../../../styles/Hero.css';
import '../../../styles/App.css';
import car from '../../../images/image 71.png'


function Hero () {

    return(
        <div className="hero-container">
            <div className="hero-upper">
                <div className="hero-title">
                    <p className="car-title"> Аренда авто</p>
                </div>
                <div className="hero-picture">
                    <img className="car-picture" src={car} />
                </div>
                <div className="hero-info">
                    <p>Забаратывайте от 3 000 р/день</p>
                    <p>в нашем таксопарке</p>
                </div>
            </div>
            <div className="hero-down">

            </div>

        </div>
    );
};

export default Hero;