import React, { useState, useEffect } from 'react';
import '../../styles/Header.css';
import {useDispatch} from "react-redux";
import {setCityInfo} from "../../actions";

function CitiesList({handleCitySelect}) {
    const [cities, setCities] = useState([]);
    const dispatch = useDispatch();

      const handleCityClick = (city) => {
          console.log('Selected city:', city);
          dispatch(setCityInfo(city));
          handleCitySelect();
      };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/cities/');
            if (response.ok) {
                const data = await response.json();
                setCities(data);
            } else {
              console.error('Ошибка при получении данных с сервера');
            }
          } catch (error) {
            console.error('Ошибка при выполнении запроса: ', error);
          }
        };

      fetchData();
    }, []);

    return (
        <div className="cities-list">
            {cities.map(city => (
              <div key={city.id}>
                <div className="cities-list_city">
                    <label className="city-drop" onClick={() => handleCityClick({city})}>{city.city}</label>
                </div>
              </div>
            ))}
        </div>
    );
}

export default CitiesList;
