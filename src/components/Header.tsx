import React, { useState } from 'react';
import logo from '../assets/img/logo_real_gold.png';
import CallbackModal from './CallbackModal';
import telegramIconImg from '../assets/img/telegram_icon.png';
import whatsappIconImg from '../assets/img/whatsapp_icon.png';
import vkIconImg from '../assets/img/vk_icon.svg.webp';

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = (formData: any) => {
        console.log(formData);
        setModalOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="top-strip">
                    <div className="top-strip__content">
                        <span>🏡 Повышение цен с 1 августа — успейте забронировать!</span>
                        <button className="top-strip__btn" onClick={() => setModalOpen(true)}>
                            Записаться на закрытую презентацию посёлка
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="Soboliha logo" />
                        <div className="logo-text">
                            <div className="top-line-logo">Soboliha</div>
                            <div className="logo-under-line"></div>
                            <div className="bottom-line-logo">Residence</div>
                        </div>
                    </div>
                    <div className="right-block">
                        <div className="messenger-icons mobile-icons">
                            <a href="https://t.me/..." target="_blank"><img src={telegramIconImg} /></a>
                            <a href="https://wa.me/..." target="_blank"><img src={whatsappIconImg} /></a>
                            <a href="https://vk.com/..." target="_blank"><img src={vkIconImg} /></a>
                        </div>
                        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? '✖' : '☰'}
                        </div>
                    </div>

                    <nav className={menuOpen ? 'active' : ''}>
                        <ul className="nav-list">
                            <li><a href="#about" onClick={() => setMenuOpen(false)}>О посёлке</a></li>
                            <li><a href="#master-plan" onClick={() => setMenuOpen(false)}>Генплан</a></li>
                            <li><a href="#houses" onClick={() => setMenuOpen(false)}>Дома</a></li>
                            <li><a href="#infrastructure" onClick={() => setMenuOpen(false)}>Инфраструктура</a></li>
                            <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a></li>
                        </ul>
                    </nav>
                    <div className="phone">
                        <a href="tel:+78310000000">8-831-000-00-00</a>
                        <div className="messenger-icons">
                            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                                <img src={telegramIconImg} alt="Telegram" />
                            </a>
                            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                                <img src={whatsappIconImg} alt="WhatsApp" />
                            </a>
                            <a href="https://vk.com/yourpage" target="_blank" rel="noopener noreferrer">
                                <img src={vkIconImg} alt="VK" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* МОДАЛКА */}
            <CallbackModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleFormSubmit}
            />
        </>
    );
};
