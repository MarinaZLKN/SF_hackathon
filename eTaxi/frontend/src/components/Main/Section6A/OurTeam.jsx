import React, { useEffect } from 'react';
import Subtitle from '../../Subtitle.jsx';
import '../../../styles/OurTeam.css'

function OurTeam() {
    function Card(props) {
        return (
            <li className='card'>
                <img className="card-photo" src={props.image} alt="Employee Photo" />
                <p className="card-name">
                    {props.name}
                </p>
                <p className="card-position">
                    {props.position}
                </p>
            </li>
        )
    }

    function SliderLine(employees) {
        // employees.map(Card())
        return employees.map((employee, index) => <Card key={index} {...employee} />)
        // employees.map((employee) => <Card {...employee} />)
    }

    useEffect(() => {
        let i = 1;
        const carousel = document.getElementById('carousel');

        for (let li of carousel.querySelectorAll('li')) {
            li.style.position = 'relative';
            li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
            i++;
        }

        let width = 404;

        let list = carousel.querySelector('ul');
        let listElems = carousel.querySelectorAll('li');

        let position = 0;

        document.querySelector('.prev').onclick = function () {
            position += width;
            list.style.marginLeft = position + 'px';
        };

        document.querySelector('.next').onclick = function () {
            position -= width;
            list.style.marginLeft = position + 'px';
        };
    }, []);

    return (
        <div className="container team">
            <Subtitle text={
                <>
                    <span className="black-subtitle">наша </span>
                    <span className="yellow-subtitle">команда</span></>
            } />
            <div className="team-top-panel">
                <p className="team-top-panel__text">
                    В нашей компании у каждого есть возможность карьерного роста: водитель → менеджер → руководитель
                </p>
                <button className="team-top-panel__btn prev">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.0002 19.9201L8.48021 13.4001C7.71021 12.6301 7.71021 11.3701 8.48021 10.6001L15.0002 4.08008"
                            stroke="none" strokeWidth="1.98214" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="team-top-panel__btn next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.99979 4.07992L15.5198 10.5999C16.2898 11.3699 16.2898 12.6299 15.5198 13.3999L8.99979 19.9199"
                            stroke="none" strokeWidth="1.98214" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div id="carousel" className="carousel">
                <div className="slider-team">
                    <ul className="slider-line">
                        {SliderLine(employees)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;