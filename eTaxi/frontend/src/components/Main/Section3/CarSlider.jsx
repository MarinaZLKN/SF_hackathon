import React, {useState} from 'react';
import '../../../styles/CarSlider.css';
import Subtitle from "../../Subtitle.jsx";
import Slider from "react-slick";
import image1 from '../../../images/image1.jpg';
import image2 from '../../../images/image2.jpg';
import image3 from '../../../images/image3.jpg';
import image4 from '../../../images/image4.jpg';

function CarSlider () {
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
          image1,
          image2,
          image3,
          image4
          ];


  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      centerPadding: '10px',
      variableWidth: true,
      beforeChange: (_, next) => setSlideIndex(next),
      centerMode: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          // nextArrow: <EmptyArrow />,
          // prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <div className=" car-slider_container">
        <div className="car-slider_content">
            <div className="container car-slider-title">
                <p>Автомобили <br/> нашего автопарка</p>
            </div>
          <div className="slider_wrapper">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div
                  className={index === slideIndex ? "slide active" : "slide"}
                  key={index}
                >
                  <div className="slider-1">
                    <img src={img} alt="" />
                      <div className="slide_text_car-name">
                            <div className="car-name">Volkswaden Polo</div>
                        </div>

                        <div className={index === slideIndex ? "slide_text_wrapper active" : "slide_text_wrapper"}>
                            <div className="block-container">
                                <div className="value-container">
                                    <div className="prop_name">Цена за сутки</div>
                                    <div className="prop-value">3000 р</div>
                                </div>
                                <div className="separator"></div>
                            </div>
                            <div className="block-container">
                                <div className="value-container">
                                    <div className="prop_name">Коробка передач</div>
                                    <div className="prop-value">АКПП</div>
                                </div>
                                <div className="separator"></div>
                            </div>
                          <div className="block-container">
                                <div className="value-container">
                                    <div className="prop_name">Вид топлива</div>
                                    <div className="prop-value">Газ</div>
                                </div>
                            </div>
                            <div className="car-btn">
                                <button className="car-slider-btn">Подробнее</button>
                            </div>
                        </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
    </div>

  );

};

export default CarSlider;