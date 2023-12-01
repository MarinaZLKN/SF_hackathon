import React, { useState, useEffect } from 'react';
import '../../styles/Header.css';
import {useDispatch} from "react-redux";
import {setCarInfo, setCityInfo, setEmployeeInfo, setVideos} from "../../actions";

function CitiesList({handleCitySelect}) {
    const [cities, setCities] = useState([]);
    const dispatch = useDispatch();

      const handleCityClick = (city) => {
          console.log('Selected city:', city);
          dispatch(setCityInfo(city));
          const cityData = city.city;

          if (cityData && cityData.feedback) {
            const videosData = cityData.feedback.map(feedback => ({
              name: feedback.name,
              url_video: feedback.url_video,
            }));
            dispatch(setVideos(videosData));
          }

          if (cityData && cityData.cars) {
            const photosData = cityData.cars
            dispatch(setCarInfo(photosData));
          }
          if (cityData && cityData.employees) {
            const employyesData = cityData.employees.map(employee => ({
                image: employee.image,
                name: employee.name,
                position: employee.position
              }))
              console.log('employyesData :', employyesData)
            dispatch(setEmployeeInfo(employyesData));
          }

          handleCitySelect();
      };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/cities/');
            if (response.ok) {
                const data = await response.json();
                console.log('data in CitiesList: ', data)
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
