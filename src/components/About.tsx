import React, { useState } from 'react';
import mainImage from '../assets/img/about_village.jfif';
import playgroundImg from '../assets/img/playground.jfif';
import paddleTennisImg from '../assets/img/paddle_tennis.jfif';
import sportsZoneImg from '../assets/img/sports_zone.jfif';
import workoutImg from '../assets/img/workout.jfif';

const About: React.FC = () => {
    const [activeImage, setActiveImage] = useState({
        src: mainImage,
        alt: 'Главное изображение',
    });

    const [galleryImages, setGalleryImages] = useState([
        { src: playgroundImg, alt: 'Детская площадка' },
        { src: paddleTennisImg, alt: 'Падел-теннис' },
        { src: sportsZoneImg, alt: 'Спортивная зона' },
        { src: workoutImg, alt: 'Воркаут-площадка' },
    ]);

    const handleClick = (clickedImg: { src: string; alt: string }, index: number) => {
        // обмен: clicked становится главным, главный возвращается в галерею
        const newGallery = [...galleryImages];
        newGallery[index] = activeImage;
        setGalleryImages(newGallery);
        setActiveImage(clickedImg);
    };

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-left">
                        <div className="main-image">
                            <img src={activeImage.src} alt={activeImage.alt} />
                        </div>
                    </div>


                    <div className="about-right">
                        <h2>О посёлке</h2>
                        <p>
                            <strong>Soboliha Residence</strong> — коттеджный посёлок премиального класса,
                            расположенный в живописном сосновом лесу на Горьковском море.
                        </p>
                        <p>
                            Поселок отличается высоким уровнем безопасности, развитой инфраструктурой и
                            эксклюзивными удобствами, такими как падел-теннис, спортивные и детские площадки,
                            а также зоны для отдыха и пикников. Это идеальное место для тех, кто ценит спокойствие
                            и роскошь загородной жизни.
                        </p>
                    </div>
                </div>
                <div className="image-gallery">
                    {galleryImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            className="gallery-thumb"
                            onClick={() => handleClick(img, index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
