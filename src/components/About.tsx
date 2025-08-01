import React from 'react';
import feature1 from '../assets/img/feature1.jpg';
import feature2 from '../assets/img/feature2.jpg';
import feature3 from '../assets/img/feature3.jpg';
import feature4 from '../assets/img/feature4.jpg';
import feature5 from '../assets/img/feature5.jpg';
import feature6 from '../assets/img/feature6.jpg';
import feature7 from '../assets/img/feature7.jpg';
import feature8 from '../assets/img/feature8.jpg';
import feature9 from '../assets/img/feature9.jpg';

const features = [
    {
        img: feature1,
        title: 'Коммуникации',
        text: 'Свет, газ, вода - всё есть на участке',
    },
    {
        img: feature2,
        title: 'Близость к Нижнему Новгороду',
        text: 'Доехать до центра Нижнего Новгорода можно за 40 минут по скоростной трассе.',
    },
    {
        img: feature3,
        title: 'Близость к Нижнему Новгороду',
        text: 'Доехать до центра Нижнего Новгорода можно за 40 минут по скоростной трассе.',
    },
    {
        img: feature4,
        title: 'Детские площадки',
        text: 'Тут будет подходящий текст.',
    },
    {
        img: feature5,
        title: 'Зоны отдыха',
        text: 'Тихие уголки природы для отдыха всей семьей.',
    },
    {
        img: feature6,
        title: 'Охраняемая территория',
        text: 'Круглосуточная охрана и видеонаблюдение.',
    },
    {
        img: feature7,
        title: 'Падел теннис',
        text: 'Современные площадки для активного отдыха.',
    },
    {
        img: feature8,
        title: 'Экологически чистый район',
        text: 'Лес, озеро и тишина вокруг — для перезагрузки и вдохновения.',
    },
    {
        img: feature9,
        title: 'Досуг на воде',
        text: 'Тут будет подходящий текст',
    },
];

const About: React.FC = () => {
    return (
        <section id="about" className="about-grid">
            <div className="feature-grid">
                {features.map((item, index) => (
                    <div className="feature-card" key={index}>
                        <img src={item.img} alt={item.title} />
                        <h3 className="feature-title">{item.title}</h3>
                        <div className="overlay">
                            <p>{item.text}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
