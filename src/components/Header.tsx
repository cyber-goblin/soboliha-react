import React, { useState } from 'react';
import logo from '../assets/img/logo_real_gold.png';


export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Soboliha logo" />
                    <div className="logo-text">
                        <div className="top-line-logo">Soboliha</div>
                        <div className="logo-under-line">

                        </div>
                        <div className="bottom-line-logo">Residence</div>
                    </div>
                </div>
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✖' : '☰'}
                </div>
                <nav className={menuOpen ? 'active' : ''}>
                    <ul className="nav-list">
                        <li><a href="#about">О посёлке</a></li>
                        <li><a href="#master-plan">Генплан</a></li>
                        <li><a href="#houses">Дома</a></li>
                        <li><a href="#infrastructure">Инфраструктура</a></li>
                        <li><a href="#contacts">Контакты</a></li>

                    </ul>
                </nav>
                <div className="phone">
                    <a href="tel:+78310000000">8-831-000-00-00</a>
                </div>

            </div>
        </header>
    );
};
