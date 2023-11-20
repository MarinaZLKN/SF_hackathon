import React, {useState} from 'react';
import Logo from "./Logo.jsx";
import loc from '../../images/typcn_location-arrow.svg'
import icon from '../../images/Call.png';
import drop from '../../images/ic_sharp-arrow-left.svg'
import '../../styles/Header.css';
import '../../styles/App.css';
import close from '../../images/close_FILL1_wght200_GRAD0_opsz24 2.png';
import CitiesList from "./CitiesList.jsx";


function Header ({cityInfo}){
    const [infoBlockVisible, setInfoBlockVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [agreed, setAgreed] = useState(false);



    const [showDropdown, setShowDropdown] = useState(false);
    const [showCitiesList, setShowCitiesList] = useState(false);

    const handleCityClick = () => {
        setShowDropdown(true);
    };
    const handleCitySelect = () => {
        setShowDropdown(false);
        setShowCitiesList(false);
    };

    const handleYesClick = () => {
        setShowDropdown(false);
    };

    const handleNoClick = () => {
        setShowDropdown(false);
        setShowCitiesList(true);
    };

    const toggleInfoBlock = () => {
        setInfoBlockVisible(!infoBlockVisible);
    };

    //TODO написать функцию для отправки данных на бэк
    const handleSubmit = () => {
        // данные на бэк отправлять буду здесь
        setName('');
        setPhone('');
        setComment('');
        setAgreed(false);
        setFormSubmitted(true);
    };

    //TODO после отправки данных добавить обновление заявки

    return(
        <div className={`header ${infoBlockVisible ? 'info-block-open' : ''}`}>
            <div className="header-container">
                <div className="header-left">
                    <div className="header-logo">
                        <Logo/>
                    </div>
                    <div className="header-city_selection">
                        <img src={loc} alt="Location" />
                        <span className="header-city" onClick={handleCityClick}>
                            {cityInfo ? cityInfo.city.city : "Загрузка..."}
                        </span>
                        <img src={drop} alt="Drop" />
                      {showDropdown && (
                        <div className="dropdown">
                            <p className="dropdown-p">Правильный ли это город?</p>
                            <div className="dropdown_btns">
                                <button className="dropdown-btn_yes" onClick={handleYesClick}>Да, верно</button>
                                <button className="dropdown-btn_no" onClick={handleNoClick}>Нет, изменить</button>
                            </div>

                        </div>
                      )}
                      {showCitiesList && (
                          <div className="cities-list-1">
                              <CitiesList handleCitySelect={handleCitySelect}/>
                          </div>
                        )}
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
                        <img className="header_phone-icon" src={icon}/>
                        {cityInfo ? (
                            <p className="header-phone_number">{cityInfo.city.phone_number}</p>
                        ) : (
                            <p className="header-phone_number">Загрузка...</p>
                        )}
                    </div>
                    <div className="header-button">
                        <button className="btn-header" onClick={toggleInfoBlock}>
                            Оставить заявку
                        </button>
                    </div>
                    <div className={`info-block ${infoBlockVisible ? 'active' : ''}`}>
                      <button className="close-button" onClick={toggleInfoBlock}>
                          <img src={close} alt="Закрыть" />
                      </button>
                      <div className="request-block">
                          {formSubmitted ? (
                              <div className="request-block_titles-sent">
                                  <div className="request-title" id="request-sent">Спасибо за обращение </div>
                                  <div className="request-title">Ваша заявка <label className="title-color">принята</label></div>
                                  <div className="request-block_video">
                                      <iframe
                                          width="495"
                                          height="280"
                                          src="https://www.youtube.com/embed/jfKfPfyJRdk?si=-grifyth9EDk5x8r"
                                          title="YouTube video player"
                                          frameBorder="0"
                                          allowFullScreen
                                      ></iframe>
                                  </div>
                                  <div className="request-block_subtitles-sent">
                                      <div className="request-subtitle">Наши менеджеры перезвонят</div>
                                      <div className="request-subtitle">Вам в ближайшие сутки!</div>
                                  </div>
                              </div>
                            ) : (
                          <>
                            <div className="request-block_titles">
                                <div className="request-title">Оставьте <label className="title-color">заявку</label></div>
                                <div className="request-subtitle">Первый день аренды бесплатно</div>
                            </div>
                            <div className="input-container">
                                <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input-container">
                                <input type="tel" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="input-container">
                                <input type="comment" placeholder="Комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
                            </div>
                            <div className="request-checkbox">
                                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                                <label className="checkbox-pad">Я согласен с политикой конфиденциальности</label>
                            </div>
                            <div className="request-block_btn">
                                <button className="btn-header" onClick={handleSubmit}>
                                    Оставить заявку
                                </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;