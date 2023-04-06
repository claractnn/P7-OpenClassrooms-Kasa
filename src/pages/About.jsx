import React from 'react';
import Header from '../components/Layout/Header';
import AboutBanner from '../components/About/AboutBanner';
import Scrollings from '../components/About/Scrollings';
import Values from '../datas/values.json';
import Footer from '../components/Layout/Footer';
//importer toutes les layout de la page home (footer, banner, allcards)

function About() {
    return(
        <div>
            <Header />
            <AboutBanner />
            <Scrollings data={Values} />
            <Footer />
        </div>
    )
}

export default About;