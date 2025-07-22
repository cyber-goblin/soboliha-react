import React from 'react';
import logo from '../assets/img/soboliha_logo.png';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Soboliha Logo" />
                    <span className="footer-brand">
            SOBOLIHA<br />
            <span className="residence">RESIDENCE</span>
          </span>
                </div>
                <ul className="footer-links">
                    <li><a href="about.html">О посёлке</a></li>
                    <li><a href="master-plan.html">Генплан</a></li>
                    <li><a href="contacts.html">Контакты</a></li>
                    <li><a href="privacy.html">Политика конфиденциальности</a></li>
                    <li className="footer-phone">8-831-000-00-00</li>
                </ul>
            </div>
        </footer>
    );
};
