import React from 'react';
import '../../styles/Footer.css';


function Footer ({cityInfo}){

    return(
        <div className="container footer-container">
            <div className="footer-content">
                <div className="footer-info-block">
                    <div className="footer-official">
                        <label className="f-i-1">Официальный партнер <br/>Яндекс.Такси</label>
                        <a href="https://etaxi124.ru/politikakompanii" className="f-i-2"><p className="company_pol">Политика компании</p></a>
                    </div>
                    <div className="footer-offices">
                        <label className="f-i-1">Офисы таксопарка в городе {cityInfo ? cityInfo.city.city : "Загрузка..."}:</label>
                        <div className="footer-offices-addresses">
                            {cityInfo &&
                                cityInfo.city.offices.map((address, index) => (
                                  <p key={index}>{address}</p>
                                ))}
                                        </div>
                    </div>
                    <div className="footer-updates">
                        <label className="f-i-1">Следите за нашими новостями:</label>
                        <div className="footer-btns">
                            <button className="footer-btn">Youtube</button>
                            <button className="footer-btn">Вконтакте</button>
                        </div>
                    </div>
                </div>
                <div className="footer-logo">
                    <label className="logo-yo">ё-такси</label>

                </div>
            </div>
        </div>
    )
};

export default Footer;