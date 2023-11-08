import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import React from 'react';

function YandexMaps () {

    return(
        <YMaps>
            <div>Приветики карты Yandex!</div>
        <Map
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 5,
            }}
          >
            <Placemark geometry={[55.684758, 37.738521]} />
            <Placemark geometry={[54.684578, 37.733521]} />
          </Map>
      </YMaps>
    );
}

export default YandexMaps;