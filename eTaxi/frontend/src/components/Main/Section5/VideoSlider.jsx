import React, {useState} from 'react';
import Slider from "react-slick";
import '../../../styles/VideoSlider.css';
import '../../../styles/Button.css';
import { CustomPrevButton, CustomNextButton } from './Buttons.jsx';


function VideoSlider({videos, city}) {

     const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />,
      };
    if (!videos || videos.length === 0) {
        return <div>Загрузка видео...</div>;
      }
     console.log('videos in VideoSlider: ', videos)
     const [activeSlideIndex, setActiveSlideIndex] = useState(0);

     const handleAfterChange = (currentSlide) => {
        setActiveSlideIndex(currentSlide);
     };

     return (
        <div className="container container-video">
            <div className="video-content">
                <div className="video-title">
                    <p>Отзывы <br/> водителей Ё-Такси</p>
                </div>
                <div className="video-slider">
                   <Slider {...settings2} afterChange={handleAfterChange}>
                      {videos.map((videoData, index) => {
                        const videoUrl = videoData.url_video;
                        const videoId = videoUrl.split('/').pop().split('?')[0];
                        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                        return (
                          <div className={`video-pos ${
                            index === activeSlideIndex ? 'active' : ''
                          }`} key={index}>
                            <iframe
                              className="video-pos-single"
                              src={embedUrl}
                              title={`Video ${index}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                              <div className="video-driver-name">{videoData.name}, {city.city.city} </div>
                          </div>

                        );
                      })}
                   </Slider>
                </div>
            </div>

        </div>
      );
}

export default VideoSlider;


