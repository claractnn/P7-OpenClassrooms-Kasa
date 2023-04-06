import React from 'react';
import Header from '../components/Layout/Header';
import AboutBanner from '../components/About/AboutBanner';
import Footer from '../components/Layout/Footer';
//importer toutes les layout de la page home (footer, banner, allcards)

function About() {
    return(
        <div>
            <Header />
            <AboutBanner />
            <Footer />
        </div>
    )
}

export default About