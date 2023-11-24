import React, {useEffect, useState} from 'react';
import '../../../styles/Calculator.css'


const Calculator = () => {
    const [value1, setValue1] = useState(500);
    const [value2, setValue2] = useState(100);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(1);
    const [earnings, setEarnings] = useState(0);
    const [profit, setProfit] = useState(0);
    const [initialized, setInitialized] = useState(false);


    const handleChange1 = (event) => setValue1(event.target.value);
    const handleChange2 = (event) => setValue2(event.target.value);
    const handleChange3 = (event) => setValue3(event.target.value);
    const handleChange4 = (event) => setValue4(event.target.value);

    useEffect(() => {
        const calculateEarnings = () => {
            if (value1 === 500 && value2 === 100 && value3 === 0 && value4 === 1) {
                return 0;
            }
            return (value1 - value2 - value3) * value4;
        };
        setEarnings(calculateEarnings());
        if (!initialized) {
            setProfit(0);
            setInitialized(true);
        } else {
            const profitValue = Math.round(((value2 / 300 * 200) * value4));
            setProfit(profitValue);
        }
    }, [value1, value2, value3, value4]);

    //TODO сделать цвет трека восприимчивым к передвижению
    return(
        <div className="container calc-container">
            <div className="calc-content">
                <div className="calc-left">
                    <div className="calc-title">
                        <p className="calc-title-style"> Калькулятор <br />для расчета дохода</p>
                    </div>
                    <div className="calculator">
                        <div className="calc-slider_container">
                            <div className="value-label">Ваша выручка в день </div>
                            <div className="slider-value">{value1} ₽</div>
                            <input type="range" min="500" max="12000" value={value1} onChange={handleChange1} className="slider"/>
                            <div className="min-max-values">
                                <span>500 ₽</span>
                                <span>12 000 ₽</span>
                            </div>
                            <div className="value-label">Расходы на газ в день </div>
                            <div className="slider-value">{value2} ₽</div>
                            <input type="range" min="100" max="3000" value={value2} onChange={handleChange2} className="slider" />
                             <div className="min-max-values">
                                <span>100 ₽</span>
                                <span>3000 ₽</span>
                            </div>
                            <div className="value-label">Расходы на аренду автомобиля в день </div>
                            <div className="slider-value">{value3} ₽</div>
                            <input type="range" min="0" max="5000" value={value3} onChange={handleChange3} className="slider" />
                             <div className="min-max-values">
                                <span>0 ₽</span>
                                <span>5000 ₽</span>
                            </div>
                            <div className="value-label">Количество рабочих дней </div>
                            <div className="slider-value">{value4}</div>
                            <input type="range" min="1" max="31" value={value4} onChange={handleChange4} className="slider" />
                            <div className="min-max-values">
                                <span>1</span>
                                <span>31</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calc-right">
                    <p className="calc-right_title">Вы зарабатываете на газу</p>
                    <p className="calc-right_value1">{earnings} ₽</p>
                    <p className="calc-right_title">Ваша выгода</p>
                    <p className="calc-right_value2">+ {profit} ₽</p>
                    <p className="calc-right_subtitle"><sup>*</sup> примерный заработок на основе средних значений</p>
                    <button className="calc-btn">Начать зарабатывать</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;