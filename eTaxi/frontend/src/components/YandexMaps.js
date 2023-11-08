import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import React, {useEffect, useState} from 'react';

function YandexMaps () {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const { latitude, longitude } = position.coords;
            setPosition({ latitude, longitude });
          });
        } else {
          console.error("Geolocation is not available in this browser.");
        }
      }, []);

    return(
        <div>
      {position ? (
        <YMaps>
          <div style={{ width: '100%', height: '400px' }}>
            <Map
              defaultState={{ center: [position.latitude, position.longitude], zoom: 10 }}
              width={'100%'}
              height={'100%'}
            >
              <Placemark geometry={[position.latitude, position.longitude]} />
            </Map>
          </div>
        </YMaps>
      ) : (
        <p> Загружаем данные...</p>
      )}
    </div>
    );
}

export default YandexMaps;