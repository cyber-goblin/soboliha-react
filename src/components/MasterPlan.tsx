import React from 'react';
import planImage from '../assets/img/master-plan-new.jpg';
import barrierIcon from '../assets/img/barrier_icon.png';
import tennisIcon from '../assets/img/paddle_tennis_icon.png'
import sliderIcon from '../assets/img/slider_icon.png';
import walkingZoneIcon from '../assets/img/walking_zone_icon.png';
import coffeeIcon from '../assets/img/coffee_icon.png';
import dogIcon from '../assets/img/dog_icon.png';
import parkingIcon from '../assets/img/parking_icon.png';
import kindergartenIcon from '../assets/img/kindergarten_icon.png';

export const MasterPlan: React.FC = () => {
    return (
        <section id="master-plan" className="master-plan">
            <div className="plan-container">
                <div className="plan-left">
                    <h2>Генплан</h2>
                    <ul className="features">
                        <li><img src={barrierIcon} alt="Охрана"/><span>круглосуточная охрана</span>
                        </li>
                        <li><img src={tennisIcon} alt="Теннис"/><span>падел-теннис</span></li>
                        <li><img src={sliderIcon} alt="Площадка"/><span>детская площадка</span></li>
                        <li><img src={walkingZoneIcon} alt="Прогулки"/><span>прогулочная зона</span>
                        </li>
                        <li><img src={coffeeIcon} alt="Кофе"/><span>кофейня</span></li>
                        <li><img src={dogIcon} alt="Питомцы"/><span>pet-friendly</span></li>
                        <li><img src={parkingIcon} alt="Парковка"/><span>гостевая парковка</span></li>
                        <li><img src={kindergartenIcon} alt="Детсад"/><span>частный детский сад</span>
                        </li>
                    </ul>
                </div>
                <div className="plan-right">
                    <img src={planImage} alt="Генплан поселка"/>
                </div>
            </div>
        </section>
    );
};
