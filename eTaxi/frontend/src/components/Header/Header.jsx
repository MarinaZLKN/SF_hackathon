import React, {useState} from 'react';
import Logo from "./Logo.jsx";
import loc from '../../images/typcn_location-arrow.svg'
import icon from '../../images/Call.png';
import drop from '../../images/ic_sharp-arrow-left.svg'
import '../../styles/Header.css';
import '../../styles/App.css';
import close from '../../images/close_FILL1_wght200_GRAD0_opsz24 2.png';
import CitiesList from "./CitiesList.jsx";


function Header({cityInfo, scrollToSection}) {
    const [infoBlockVisible, setInfoBlockVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

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


    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        comment: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setFormData({
              ...formData,
              [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
          name: formData.name,
          phone_number: formData.phone_number,
          comment: formData.comment,
        };

        console.log('requestData Header: ', requestData);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/sendbitrix', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                console.log('Данные успешно отправлены на сервер.');
                setFormSubmitted(true); //При успешной отправке данных преключается окно
            } else {
                console.error('Ошибка при отправке данных на сервер.');
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    };

    //TODO после отправки данных добавить обновление заявки

    return (
        <div className={`header ${infoBlockVisible ? 'info-block-open' : ''}`}>
            <div className="header-container">
                <div className="header-left">
                    <div className="header-logo">
                        <Logo/>
                    </div>
                    <div className="header-city_selection">
                        <img src={loc} alt="Location"/>
                        <span className="header-city" onClick={handleCityClick}>
                            {cityInfo ? cityInfo.city.city : "Загрузка..."}
                        </span>
                        <img src={drop} alt="Drop"/>
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
                    <label onClick={() => scrollToSection('advantages')}>Преимущества</label>
                    <label onClick={() => scrollToSection('autopark')}>Автопарк</label>
                    <label onClick={() => scrollToSection('calculator')}>Калькулятор</label>
                    <label onClick={() => scrollToSection('conditions')}>Условия</label>
                    <label onClick={() => scrollToSection('contacts')}>Контакты</label>
                </div>
                <div className="header-right">
                    <div className="header-phone_number">
                        <img className="header_phone-icon" src={icon}/>
                        {cityInfo ? (
                            <p className="header-phone_number">
                                <a className="phone-to-call" href={`tel:${cityInfo.city.phone_number}`}>{cityInfo.city.phone_number}</a></p>
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
                            <img src={close} alt="Закрыть"/>
                        </button>
                        <div className="request-block">
                            {formSubmitted ? (
                                <div className="request-block_titles-sent">
                                    <div className="request-title">Ваша заявка <label
                                        className="title-color">принята</label></div>
                                    <div className="request-title-sec" id="request-sent">Спасибо за обращение!</div>
                                    <div className="request-block_subtitles-sent">
                                        <div className="request-subtitle">Наши менеджеры перезвонят</div>
                                        <div className="request-subtitle">Вам в ближайшие сутки!</div>
                                    </div>
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
                                </div>
                            ) : (
                                <>
                                    <div className="request-wrapper">
                                        <div className="request-block_upper">
                                            <div className="request-block_titles">
                                                <div className="request-title">Оставьте заявку</div>
                                                <div className="request-subtitle">Первый день аренды бесплатно</div>
                                                <div className="request-title-another">Требования к водителям</div>
                                                <div className="yellow-bar">
                                                    <div className="circle left"></div>
                                                    <div className="circle center-1"></div>
                                                    <div className="circle right"></div>
                                                </div>
                                                <div className="request-underyellowbar-titles">
                                                    <p className="underyellow-title">Вам более <br/> 21 года</p>
                                                    <p className="underyellow-title">Опыт вождения <br/> более 3 лет</p>
                                                    <p className="underyellow-title">Категория <br/> прав "B"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="request-block_down">
                                            <form className="request-header-form" onSubmit={handleSubmit}>
                                                <div className="request-input-header">
                                                    <label htmlFor="name">Ваше имя</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="request-input-header">
                                                    <label htmlFor="name">Телефон</label>
                                                    <input
                                                        type="text"
                                                        id="phone"
                                                        name="phone_number"
                                                        value={formData.phone_number}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="request-input-header">
                                                    <label htmlFor="name">Комментарий</label>
                                                    <input
                                                        type="text"
                                                        id="comment"
                                                        name="comment"
                                                        placeholder="Что вас интересует?"
                                                        value={formData.comment}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="request-bottom-part">
                                                    <div className="request-checkbox">
                                                        <input className="request-checkbox-input" type="checkbox"
                                                               />
                                                        <label className="checkbox-pad">Я соглашаюсь
                                                            с <b>политикой <br/>конфиденциальности</b></label>
                                                    </div>
                                                    <div className="request-block_btn">
                                                        <button className="btn-header_down">
                                                            Оставить заявку
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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

