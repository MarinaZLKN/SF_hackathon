import React, { useEffect, useRef, useState } from 'react';
import '../../../styles/Geography.css';
import '../../../styles/App.css';
import map from '../../../images/map-geography.png'


const Geography = ({cityInfo}) => {
    console.log(cityInfo)
    if (!cityInfo || !cityInfo.city) {
        return null;
    }
    const selectedCity = cityInfo.city && cityInfo.city.id
    console.log('ID', selectedCity)

    const Icon = (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#CBCCCE"/>
            <path d="M21.5 14H18.5V18.5H14V21.5H18.5V26H21.5V21.5H26V18.5H21.5V14Z" fill="#FFCB00"/>
        </svg>
    );

    const activeIcon = (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#FFCB00" fillOpacity="0.2"/>
            <circle cx="20" cy="20" r="4" fill="#FFCB00"/>
        </svg>
    );
    
    

    const [currentCity, setCurrentCity] = useState(0);
    const [cityInfo1, setCityInfo1] = useState(null);
    const [width, setWidth] = useState(null);
    const divRef = useRef([])
    const buttonRef = useRef([])

    const Icons = [
        {id: 1, className: 'icon-ekb', icon: Icon,  active: false},
        {id: 2, className: 'icon-tum', icon: Icon, active: false},
        {id: 3, className: 'icon-omsk', icon: Icon, active: false},
        {id: 4, className: 'icon-nsk', icon: Icon, active: false}
    ]

    const [buttons, setButtons] = useState(
        Icons.map(but => ({
        ...but,
        active: but.id === selectedCity ? true : but.active
    })));



    const [activeButton, setActiveButton] = useState(selectedCity);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/cities');
                if (!response.ok) {
                    throw new Error('Error')
                }

                const result = await response.json();
                console.log('res', result)
                setCityInfo1(result);
                setCurrentCity(result[0])
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        if (divRef.current[activeButton - 1] && buttonRef.current[activeButton - 1]) {
            const buttonRect = buttonRef.current[activeButton - 1].getBoundingClientRect();
            const divRect = divRef.current[activeButton - 1].getBoundingClientRect();       
            const distanceX = Math.abs(buttonRect.left + buttonRect.width / 2 - divRect.left - divRect.width )
            const distanceY = Math.abs(buttonRect.top + buttonRect.height / 2 - divRect.top - divRect.height / 2)
            const calcWidth = Math.sqrt(distanceX ** 2 + distanceY ** 2)
            setWidth(calcWidth)
        }
    }, [divRef.current, buttonRef.current, activeButton]);


    const toggle = (id, buttonIndex) => {
        setButtons((prevButtons) =>
            prevButtons.map((button, index) => 
                index === buttonIndex
                    ? { ...button, active: !button.active }
                    : { ...button, active: false }
            )
        );
        console.log(id)
        setActiveButton(id);
        const selectedCity = cityInfo1.find((city) => city.id === id)
        if (selectedCity) {
            console.log(selectedCity)
            setCurrentCity(selectedCity);
        }
}

    return (
        <section>
            <div className='geography-container'>
                <div className='left-side'>
                    <p className='geography-title'>Мы активно <br></br>развиваемся</p>
                    <ul className='geo-list'>
                        <li className='geo-list_item'>
                            <p className='number'>2015</p>
                            <p className='text'> Год основания</p>
                        </li>
                        <li className='geo-list_item'>
                            <p className='number'>4 000 +</p>
                            <p className='text'>Клиентов ежедневно</p>
                        </li>
                        <li className='geo-list_item'>
                            <p className='number'>54</p>
                            <p className='text'>Автопарка в сети</p>
                        </li>
                        <li>
                            <p className='number'>150</p>
                            <p className='text'>Водителей</p>
                        </li>
                    </ul>
                </div>
                <div className='right-side'>
                    <div className='map'>
                        <div className='cart'>
                            <img className='map_img' src="../../../images/map-geography.png" alt="map" />

                            {buttons.map((button, index) => (
                                <div key={button.id} >
                                    <button ref={(ref) => (buttonRef.current[index] = ref)}
                                        className={`${button.className}`}
                                        onClick={() => toggle(button.id, index)}
                                    >
                                        {button.active ? activeIcon : button.icon}
                                    </button>
                                    {button.active && width != null && (
                                    <div className={`line-${button.className}`} style={{
                                                                position: 'absolute',
                                                                background: 'yellow',
                                                    
                                                                height: '2px',
                                                                width: `${width}px`}}>

                                    </div>)}
                                    {button.active && (
                                        <div ref={(ref) => (divRef.current[index] = ref)} className='center'>
                                                <div className='center-info'>
                                                    
                                                    <h4 className='city-info_title'>{currentCity.city}</h4>                                                                                     
                                                    <p className='city-info_text'>Телефон</p>
                                                    <p className='city-info_subtext'>{currentCity.phone_number}</p>
                                                    <p className='city-info_text'>Часы работы</p>
                                                    <p className='city-info_subtext'>ПН-ЧТ 9:00 - 18:00</p>
                                                </div>       
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}

export default Geography;