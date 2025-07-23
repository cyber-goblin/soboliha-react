import React, { useState } from 'react';
import budapestImg from '../assets/img/budapest.jfif';
import romeImg from '../assets/img/Rome.jfif'
import madridImg from '../assets/img/Madrid.jfif';
import helsinkiImg from '../assets/img/Helsinki.jfif';
import ottawaImg from '../assets/img/ottawa.jfif';
import amsterdamImg from '../assets/img/amsterdam.jfif';
import CallbackModal from './CallbackModal';




export const Houses: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = (data: { name: string; phone: string; comment?: string }) => {
        console.log('Форма отправлена из баннера:', data);
        // Тут позже будет отправка в Bitrix24
    };
    return (
        <section id="houses" className="houses">
            <div className="houses-container">
                <h2 className="houses-title">Современные дома</h2>
                <div className="house-grid">
                    <div className="house-card">
                        <img src={budapestImg} alt="Будапешт"/>
                        <h3>Будапешт</h3>
                        <p>от 6 800 000 руб.</p>
                    </div>
                    <div className="house-card">
                        <img src={romeImg} alt="Рим"/>
                        <h3>Рим</h3>
                        <p>от 7 800 000 руб.</p>
                    </div>
                    <div className="house-card">
                        <img src={madridImg} alt="Мадрид"/>
                        <h3>Мадрид</h3>
                        <p>от 8 800 000 руб.</p>
                    </div>
                    <div className="house-card">
                        <img src={helsinkiImg} alt="Хельсинки"/>
                        <h3>Хельсинки</h3>
                        <p>от 9 800 000 руб.</p>
                    </div>
                    <div className="house-card">
                        <img src={ottawaImg} alt="Оттава"/>
                        <h3>Оттава</h3>
                        <p>от 10 800 000 руб.</p>
                    </div>
                    <div className="house-card">
                        <img src={amsterdamImg} alt="Амстердам"/>
                        <h3>Амстердам</h3>
                        <p>от 11 800 000 руб.</p>
                    </div>
                </div>
                <div className="cta-button">
                    <button className="info-call-btn" onClick={() => setModalOpen(true)}>
                        ЗАКАЗАТЬ ЗВОНОК
                    </button>
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
