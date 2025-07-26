import React, { useState } from 'react';
import CallbackModal from './CallbackModal';

export const Banner: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = (data: { name: string; phone: string; comment?: string }) => {
        console.log('Форма отправлена из баннера:', data);
    };

    return (
        <section className="banner">
            {/* 🎥 Видео-фон */}
            <video
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/src/video/banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="hero-content">
                <h1>Коттеджный посёлок премиум-класса SOBOLIHA Residence</h1>
            </div>

            <div className="info-banner">
                <div className="info-grid">
                    <div className="info-item">
                        <div className="info-value">25 Га</div>
                        <div className="info-label">земли<br />в вековых соснах</div>
                    </div>
                    <div className="divider-vertical" />
                    <div className="info-item">
                        <div className="info-value">90 мин</div>
                        <div className="info-label">от центра<br />Нижнего Новгорода</div>
                    </div>
                </div>

                <div className="divider-horizontal" />

                <button className="info-call-btn" onClick={() => setModalOpen(true)}>
                    ЗАКАЗАТЬ ЗВОНОК
                </button>

                <div className="info-value">Старт закрытых продаж</div>
            </div>

            <CallbackModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleFormSubmit}
            />
        </section>
    );
};
