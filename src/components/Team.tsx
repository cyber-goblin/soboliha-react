import React from 'react';
import borisImg from '../assets/img/Boris_Sergeevich.jpg';
import markImg from '../assets/img/Mark_Mihalich.jpg'
import megapolisImg from '../assets/img/megapolis_logo.png';
import souzBetonImg from '../assets/img/souz_Beton.png';

export const Team: React.FC = () => {
    return (
        <section className="team-section">
            <div className="team-container">
                <h2 className="section-title">Наша команда</h2>
                <div className="team-members">
                    <div className="team-card">
                        <img src= {markImg} alt="Людмилин Марк Михайлович"/>
                        <p className="name">Людмилин Марк Михайлович</p>
                        <p className="role">Директор</p>
                    </div>
                    <div className="team-card">
                        <img src= {borisImg} alt="Филоненко Борис Сергеевич"/>
                        <p className="name">Филоненко Борис Сергеевич</p>
                        <p className="role">Директор</p>
                    </div>
                </div>

                <h2 className="section-title">Наша ГК</h2>
                <div className="partners">
                    <img src= {megapolisImg} alt="Мегаполис"/>
                    <img src= {souzBetonImg} alt="Союз Бетон"/>
                </div>
            </div>
        </section>
    );
};
