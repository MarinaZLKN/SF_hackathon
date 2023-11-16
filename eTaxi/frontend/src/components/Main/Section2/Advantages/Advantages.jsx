import React from 'react';
import Subtitle from '../../../Subtitle.jsx';
import '../../../../styles/Advantages.css'

function Advantages() {
    return (
        <div className='container container-adv'>
            <Subtitle text={
                <>
                    <span className="black-subtitle">почему <br />выбирают </span>
                    <span className="yellow-subtitle">нас</span></>
            } />
            <ul className='list-adv'>
                <li className='adv-card'>
                    <h3 className='adv-card--subtitle'>
                        Поддержка 24/7
                    </h3>
                    <p className='adv-card--text'>
                        В любой сложной или непонятной ситуации, менеджеры помогут вам, всё расскажут и объяснят.
                    </p>
                </li>
                <li className='adv-card'>
                    <h3 className='adv-card--subtitle'>
                        Помощь на дорогах
                    </h3>
                    <p className='adv-card--text'>
                        От нашей службы безопасности. Вам ответят по телефону, а если возникнут затруднения – приедут на место.
                    </p>
                </li>
                <li className='adv-card'>
                    <h3 className='adv-card--subtitle'>
                        Приоритет по заказам
                    </h3>
                    <p className='adv-card--text'>
                        У вас будут заказы даже когда их мало. Мы являемся крупнейшим партнёром Яндекс Такси.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Advantages;