import React, { useEffect, useState } from 'react';
import Advantages from './Main/Section2/Advantages.jsx';
import Header from "./Header/Header.jsx";
import Hero from "./Main/Section1/Hero.jsx";
import RentAll from "./Main/Section4/RentAll.jsx";
import RentHow from "./Main/Section4/RentHow.jsx";
import Calculator from "./Main/Section3A/Calculator.jsx";
import VideoSlider from "./Main/Section5/VideoSlider.jsx";
import {setCityInfo, setVideos, setCarInfo} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import Section6 from "./Main/Section6/Section6.jsx";
import Request from "./Main/Section6B/Request.jsx";
import CarSlider from "./Main/Section3/CarSlider.jsx";
import Geography from './Main/Geography/Geography.jsx';
import Footer from "./Footer/Footer.jsx";


function App() {
  const cityInfo = useSelector((state) => state.cityInfo);
  const videos = useSelector((state) => state.videos);
  const carInfo = useSelector((state) => state.carInfo);
  const dispatch = useDispatch();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


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

            if (data.feedback) {
              const videos = data.feedback.map(feedback => ({
              name: feedback.name,
              url_video: feedback.url_video,
            }));
            dispatch(setVideos(videos));
            console.log('Видео данные:', videos);
            }
            if (data.cars) {
              dispatch(setCarInfo(data.cars));
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
        <Header cityInfo={cityInfo} scrollToSection={scrollToSection}  />
      </header>
      <main>
        <section className="section-1">
          <Hero />
        </section>
        <section id="advantages" className='section-2'>
          <Advantages />
        </section>
        <section id="autopark" className="section-3">
          <CarSlider carInfo={carInfo}/>
        </section>
        <section id="calculator" className="section-3A">
          <Calculator scrollToSection={scrollToSection}/>
        </section>
        <section id="conditions" className='section-4'>
          <RentAll />
          <RentHow />
        </section>
        <section className="section-5">
            <VideoSlider videos={videos} city={cityInfo}/>
        </section >
        <section className="section-6">
          <Section6 />
        </section>
        <section className="section-6B">
            <Request/>
        </section>
        <section className="Geography">
          <Geography />
        </section>
      </main>
      <footer className="section-8">
        <Footer/>

      </footer>
    </div>
  );
}

export default App;