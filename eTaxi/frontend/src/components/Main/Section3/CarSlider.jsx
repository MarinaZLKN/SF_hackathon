import React, {useState} from 'react';
import '../../../styles/CarSlider.css';
import Slider from "react-slick";


//TODO добавить кнопки для слайдера
function CarSlider ({carInfo}) {

  const [slideIndex, setSlideIndex] = useState(0);


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
              {carInfo.cars && carInfo.cars.map((car, index) => (
                <div
                  className={index === slideIndex ? "slide active" : "slide"}
                  key={index}
                >
                  <div className="slider-1">
                    <img  src={`http://127.0.0.1:8000${car.image}`} alt={car.model} />
                      <div className="slide_text_car-name">
                            <div className="car-name">{car.model}</div>
                        </div>

                        <div className={index === slideIndex ? "slide_text_wrapper active" : "slide_text_wrapper"}>
                            <div className="block-container">
                                <div className="value-container">
                                    <div className="prop_name">Цена за сутки</div>
                                    <div className="prop-value">{car.rental_price.toString()} ₽</div>
                                </div>
                                <div className="separator"></div>
                            </div>
                            <div className="block-container">
                                <div className="value-container">
                                    <div className="prop_name">Коробка передач</div>
                                    <div className="prop-value">{car.transmission}</div>
                                </div>
                                <div className="separator"></div>
                            </div>
                          <div className="block-container">
                                <div className="value-container">
                                    <div className="prop_name">Вид топлива</div>
                                    <div className="prop-value">{car.fuel_type}</div>
                                </div>
                            </div>
                            <div className="car-btn-slider">
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