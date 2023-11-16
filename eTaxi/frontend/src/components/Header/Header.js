import React, {useEffect, useState} from 'react';
// import'../../styles/Header.css'

function Header (){
      const [latitude, setLatitude] = useState(null);
      const [longitude, setLongitude] = useState(null);
      const [cityInfo, setCityInfo] = useState(null);

      useEffect(() => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            setLatitude(lat);
            setLongitude(lon);

            try {
              const response = await fetch(`http://127.0.0.1:8000/api/v1/getcity/?lat=${lat}&lon=${lon}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ lat, lon }),
              });
              if (response.ok) {
                const data = await response.json();
                console.log('Data', data)
                setCityInfo(data);
              } else {
                console.error('Ошибка при получении данных с сервера');
              }
            } catch (error) {
              console.error('Ошибка при выполнении запроса: ', error);
            }
          });
        } else {
          console.error("Geolocation API не поддерживается в вашем браузере.");
        }
      }, []);


      return (
        <div  className="header">
          <h3>Информация о городе и таксопарке</h3>
          {latitude && longitude ? (
            <div>
              {cityInfo ? (
                <div  className="header-info">
                  <p>Город: {cityInfo.city.city}</p>
                  <p>Телефонный номер города: {cityInfo.city.phone_number}</p>
                  <p>Адрес таксопарка: </p>
                    <ul>
                      {cityInfo.city.offices.map(office => (
                        <li key={office.id}>
                          <p>{office}</p>
                        </li>
                      ))}
                    </ul>
                </div>
              ) : (
                <p>Загрузка информации...</p>
              )}
            </div>
          ) : (
            <p>Определение геолокации...</p>
          )}

        </div>
        );
};

export default Header;