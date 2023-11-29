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

        const requestData = {
          name: formData.name,
          phone: formData.phone,
          comment: formData.comment,
        };

        console.log('requestData: ', requestData)

        try {
          const response = await fetch('http://127.0.0.1:8000/api/v1/sendbitrix', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
              body: JSON.stringify(requestData),
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
                <div className="request-title-1">
                    <p>Оставить <br/>заявку</p>
                </div>
                <div className="request">
                    <form className="request-form" onSubmit={handleSubmit}>
                        <div className="request-row">
                            <div className="request-input">
                                <label htmlFor="name">Ваше имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="request-input">
                                <label htmlFor="phone">Телефон</label>
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
                              <label htmlFor="comment">Комментарий</label>
                              <input
                                id="comment"
                                type="comment"
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