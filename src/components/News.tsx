import React from 'react';
import kotlovan from '../assets/img/kotlovan.png'
import salesStart from '../assets/img/private_sales_banner.png'

const News: React.FC = () => {
    return (
        <section className="news-section">
            <h2>Новости нашего посёлка</h2>

            <div className="featured-news">


                <article className="news-item">
                    <img src={salesStart} alt="..." />
                    <h3> Старт закрытых продаж в Soboliha Residence</h3>
                    <p>В Soboliha Residence начался первый этап продаж коттеджей — только для тех, кто заранее оставил заявку. На этом этапе доступны лучшие участки, индивидуальные планировки и персональное сопровождение сделки. </p>
                </article>
                <article className="news-item">
                    <img src={kotlovan} alt="..." />
                    <h3>Начато строительство коттеджей в окружении соснового леса</h3>
                    <p>В посёлке Soboliha Residence стартовали работы по подготовке участков — ведётся разработка котлованов под первые дома. Строительство идёт в строгом соответствии с проектом, с сохранением природного ландшафта и хвойных массивов. Уже скоро на этом месте появятся современные коттеджи, гармонично вписанные в лесной пейзаж.</p>
                </article>
            </div>

            <div className="news-carousel">
                {/* Место для остальных новостей */}
                <div className="carousel-track">
                    {/* Отрисовывай здесь остальные <article className="news-item"> слайдером */}
                </div>
            </div>
        </section>
    );
};

export default News;
