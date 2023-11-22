import React, {useState} from 'react';
import TabAccordion from "./TabAccordion.jsx";
import '../../../styles/TabAccordion.css';

function Section6 (){
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabData = [
        { title: "Аренда", accordionData: [
            { title: "У вас можно арендовать автомобиль?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "С какими агрегаторами такси вы работаете?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Как работает аренда?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
        ] },
        { title: "Транспорт", accordionData: [
            { title: " Вопрос для секции транспорта 1?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции транспорта 2?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции транспорта 3?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
        ] },
        { title: "Документы", accordionData: [
            { title: "Вопрос для секции Документы 1?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции Документы 2?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции Документы 3?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
        ] },
        { title: "График", accordionData: [
            { title: "Вопрос для секции График 1?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции График 2?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции График 3?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
        ] },
        { title: "Заработок", accordionData: [
            { title: "Вопрос для секции Заработок 1?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции Заработок 2?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции Заработок 3?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
        ] },
        { title: "Обслуживание", accordionData: [
            { title: "Вопрос для секции Обслуживание 1?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции Обслуживание 2?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
            { title: "Вопрос для секции Обслуживание 3?", content: "Оставьте заявку, а мы перезвоним Вам и предложим несколько вариантов" },
        ] },
    ];

    return (
        <div className="container container-section6">
            <div className="section6-content">
                <div className="section6-title">
                    <p>Часто задаваемые <br/> вопросы</p>
                </div>
                <div className="tab-navigation">
                    {tabData.map((item, index) => (
                        <div key={index} onClick={() => handleTabClick(index)} className={`tab-item ${index === activeTab ? 'active' : ''}`}>
                            <label className="tab-title">{item.title}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="accordion-section">
                {tabData[activeTab].accordionData.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <TabAccordion title={item.title} content={item.content} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Section6;