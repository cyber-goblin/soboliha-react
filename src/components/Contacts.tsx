import React, { useState } from 'react';
import whatsappIcon from '../assets/img/whatsapp.svg';
import telegramIcon from '../assets/img/telegram.svg';

import CallbackModal from './CallbackModal';



const Contacts: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = (data: { name: string; phone: string; comment?: string }) => {
        console.log('Форма отправлена из баннера:', data);

    };

    return (
        <section id="contacts" className="contacts-section">
            <div className="contacts-card">
                <div className="contacts-info">
                    <h2>Контакты</h2>
                    <p>Оставьте заявку или свяжитесь с нами<br />любым удобным способом.</p>

                    <div className="contacts-details">
                        <p className="phone-contacts">+7 920 257 88 49</p>
                        <p className="phone-contacts">+7 910 891 08 77</p>
                        <p className="email">info@soboliha-residence.ru</p>
                        <p>Пн–Вс: 10:00–20:00</p>
                    </div>

                    <div className="messengers">
                        <a href="https://t.me/your_username" target="_blank" rel="noreferrer">
                            <img src={telegramIcon} alt="Telegram" />
                        </a>

                        <a href="https://wa.me/79202578849" target="_blank" rel="noreferrer">
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </a>
                    </div>

                    <div className="address">
                        <h4>Офис продаж:</h4>
                        <p>Нижегородская область, Городецкий район,<br />деревня Соболиха, 39а</p>
                    </div>

                    <button className="info-call-btn" onClick={() => setModalOpen(true)}>
                        ЗАКАЗАТЬ ЗВОНОК
                    </button>
                </div>

                <div className="contacts-map">
                    <iframe
                        src="https://yandex.com/map-widget/v1/?um=constructor%3Aedc1d74ab88af21ebb578d00ef870ae0d0a904a9ecab2831e658afd0db2b0855&amp;source=constructor"
                        width="100%" height="100%" frameBorder="0" title="map"></iframe>
                </div>
            </div>
            <CallbackModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleFormSubmit}
            />
        </section>
    );
};

export default Contacts;
