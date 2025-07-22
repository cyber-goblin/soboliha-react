import React from 'react';
import telegramIconImg from '../assets/img/telegram_icon.png';
import whatsappIconImg from '../assets/img/whatsapp_icon.png';

export const TourSignup: React.FC = () => {
    return (
        <section className="tour-signup">
            <div className="signup-box">
                <h2>Запишитесь на персональную<br />экскурсию по посёлку</h2>
                <form className="signup-form">
                    <div className="input-row">
                        <input type="text" placeholder="Имя" />
                        <input type="tel" placeholder="Телефон" />
                    </div>
                    <div className="button-row">
                        <a href="https://t.me/your_link" target="_blank" className="messenger-btn telegram">
                            <img src={telegramIconImg} alt="Telegram" />
                        </a>
                        <a href="https://wa.me/your_number" target="_blank" className="messenger-btn whatsapp">
                            <img src={whatsappIconImg}alt="WhatsApp" />
                        </a>
                        <button type="submit" className="consult-button">Получить консультацию</button>
                    </div>
                </form>
                <p className="small-text">Мы создадим комфортные условия<br />для Вашей жизни за городом</p>
            </div>
        </section>
    );
};
