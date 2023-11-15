import React from 'react';
import Logo from "./Logo.jsx";
import loc from '../../images/fluent_location-28-filled.png'
import '../../styles/Header.css'
import '../../styles/App.css'


function Header (){

    return(
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <div className="header-logo">
                        <Logo/>
                    </div>
                    <div className="header-city_selection">
                        <img src={loc}/>
                    </div>
                </div>
                <div className="header-menu">
                    <label>Преимущества</label>
                    <label>Автопарк</label>
                    <label>Калькулятор</label>
                    <label>Условия</label>
                    <label>Контакты</label>
                </div>
                <div className="header-right">
                    <div className="header-phone_number">
                        <img/>
                        <p className="header-phone_number">+7(391) 226-94-56</p>
                    </div>
                    <div className="header-button">
                        <button className="btn-header">Оставить заявку</button>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Header;