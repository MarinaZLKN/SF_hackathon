import React, { useEffect, useState } from 'react';
import Advantages from './Main/Section2/Advantages.jsx';
import Header from "./Header/Header.jsx";
import Hero from "./Main/Section1/Hero.jsx";
import RentAll from "./Main/Section4/RentAll.jsx";
import RentHow from "./Main/Section4/RentHow.jsx";
import Calculator from "./Main/Section3A/Calculator.jsx";
import VideoSlider from "./Main/Section5/VideoSlider.jsx";
import {setCityInfo} from "../actions";
import {useDispatch, useSelector} from "react-redux";


function App() {
  const cityInfo = useSelector((state) => state.cityInfo);
  const dispatch = useDispatch();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [videos, setVideos] = useState([]);


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
            dispatch(setCityInfo(data));
            //setCityInfo(data);
            if (data.feedback) {
              const videoLinks = data.feedback.map(feedback => feedback.url_video);
              setVideos(videoLinks);
              console.log('Ссылки на видео:', videoLinks);
            }
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
    <div className="main-page">
      <header>
        <Header cityInfo={cityInfo} />
      </header>
      <main>
        <div className="section-1">
          <Hero />
        </div>
        <section className='section-2'>
          <Advantages />
        </section>
        <section className="section-3A">
          <Calculator/>
        </section>
        <section className='section-4'>
          <RentAll />
          <RentHow />
        </section>
        <section className="section-5">
            <VideoSlider/>
        </section>
      </main>
      <footer>
        <h2> Footer</h2>

      </footer>
    </div>
  );
}

export default App;