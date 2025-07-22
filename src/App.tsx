import React from 'react';
import { Header } from './components/Header';
import { Preloader } from './components/Preloader';
import { Banner } from './components/Banner';
import About  from './components/About';
import { MasterPlan } from './components/MasterPlan';
import { Houses } from './components/Houses';
import { Infrastructure } from './components/Infrastructure';
import { TourSignup } from './components/TourSignup';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import Contacts from "./components/Contacts.tsx";
import News from "./components/News.tsx";

const App: React.FC = () => {
    return (
        <>
            <Preloader />
            <Header />
            <main>
                <Banner />
                <About />
                <MasterPlan />
                <Houses />
                <Infrastructure />
                <News/>
                <TourSignup />
                <Team />
            </main>
            <Contacts />
            <Footer />
        </>
    );
};

export default App;
