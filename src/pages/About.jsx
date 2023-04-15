import React from 'react';
import Header from '../components/Layout/Header';
import AboutBanner from '../components/About/AboutBanner';
import Collapses from '../components/Layout/Collapses';
import Values from '../datas/values.json';
import Footer from '../components/Layout/Footer';

function About() {
    return(
        <div>
            <Header />
            <AboutBanner />
            <Collapses data={Values} />
            <Footer />
        </div>
    )
}

export default About;