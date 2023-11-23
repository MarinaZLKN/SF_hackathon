import React, {useState} from 'react';
import '../../../styles/Request.css';

function Request () {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        comment: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setFormData({
              ...formData,
              [name]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Здесь создаем объект данных
        const requestData = {
          name: formData.name,
          phone: formData.phone,
          comment: formData.comment,
        };

        console.log('requestData: ', requestData)


        // эта логика помещает все в двойные кавычки, если нужно посмотреть вариант как это обычно работает
        // закомментируй эту функцию и выбери правильный body. Варианты обьектов смотри в консоли :)
        const requestDataString = JSON.stringify(requestData, null, 4);
        console.log('requestDataString: ', requestDataString);

        // Выполнение запроса к серверу - нужен ли s в http при отправке запроса?
        try {
          const response = await fetch('http://127.0.0.1:8000/api/v1/sendbitrix', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

              //отправляемый обьект

              //этот вариант то, как это обычно работает
              //body: JSON.stringify(requestData),

              // этот вариант есть нужны двойные кавычки обеим частям
              body: requestDataString,
          });

          if (response.ok) {
            console.log('Данные успешно отправлены на сервер.');
          } else {
            console.error('Ошибка при отправке данных на сервер.');
          }
        } catch (error) {
          console.error('Произошла ошибка:', error);
        }
    };

    return(
        <div className="container request-container">
            <div className="request-content">
                <div className="request-title">
                    <p>Оставить <br/>заявку</p>
                </div>
                <div className="request">
                    <form className="request-form" onSubmit={handleSubmit}>
                        <div className="request-row">
                            <div className="request-input">
                                <label htmlFor="name">Ваше имя:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="request-input">
                                <label htmlFor="phone">Телефон:</label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  placeholder="+ 7 (___)___-__-__"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                />
                            </div>
                        </div>
                          <div className="request-input" id="request-comment">
                              <label htmlFor="comment">Комментарий:</label>
                              <input
                                id="comment"
                                name="comment"
                                placeholder="Что вас интересует?"
                                value={formData.comment}
                                onChange={handleInputChange}
                              ></input>
                          </div>
                          <div className="request-btn">
                            <button className="btn-request" type="submit">Отправить</button>
                          </div>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default Request;