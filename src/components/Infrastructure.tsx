import React from 'react';
import overviewImg from '../assets/img/overview_map_of_the_territory.jfif'
import goreMoreImg from '../assets/img/gore_more.png';
import izumrudnoeImg from '../assets/img/izumrudnoe.jfif';
import cheeseFactoryImg from '../assets/img/cheese_factory_Kurtsevo.png';
import holySpringNikolaKlyuch from '../assets/img/holy_spring_Nikola_Klyuch.png';
import horseClubKonemaniaImg from '../assets/img/Horse_club_Konemania.png';
import grocceryStore from '../assets/img/grocery_store.png'

export const Infrastructure: React.FC = () => {
    return (
        <section id="infrastructure" className="infrastructure">
            <div className="infrastructure-banner">
                <img src={overviewImg} alt="Карта территории" className="banner-bg" />
                <div className="banner-overlay">
                    <h2 className="infrastructure-title">Обзорная карта территории</h2>
                </div>
            </div>
            <div className="infrastructure-bottom">
                <h2 className="nearby-title">Что рядом с нами</h2>
                <div className="nearby-grid">
                    <div className="nearby-item">
                        <img src={goreMoreImg} alt="Горьковское водохранилище"/>
                        <p>Горьковское водохранилище</p>
                    </div>
                    <div className="nearby-item">
                        <img src={izumrudnoeImg} alt="Комплекс Изумрудное"/>
                        <p>Комплекс Изумрудное</p>
                    </div>
                    <div className="nearby-item">
                        <img src={cheeseFactoryImg} alt="Сырованя Курцево"/>
                        <p>Сырованя Курцево</p>
                    </div>
                    <div className="nearby-item">
                        <img src={holySpringNikolaKlyuch} alt="Источник Никола Ключ"/>
                        <p>Источник "Никола Ключ"</p>
                    </div>
                    <div className="nearby-item">
                        <img src={horseClubKonemaniaImg} alt="Конный клуб Конемания"/>
                        <p>Конный клуб "Конемания"</p>
                    </div>
                    <div className="nearby-item">
                        <img src={grocceryStore} alt="Супермаркеты"/>
                        <p>Супермаркеты WB, OZON</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
