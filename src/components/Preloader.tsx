import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo_real_gold.png';

export const Preloader: React.FC = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="preloader" className={`preloader ${hidden ? 'hide' : ''}`}>
            <div className="preloader-logo">
                <img src={logo} alt="Логотип" />
            </div>
        </div>
    );
};
