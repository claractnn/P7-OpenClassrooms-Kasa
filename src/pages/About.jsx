import React from 'react';
import Header from '../components/Layout/Header'
import AboutBanner from '../components/Layout/Banner'
//importer toutes les layout de la page home (footer, banner, allcards)

function About() {
    return(
        <div>
            <Header />
            <AboutBanner />
        </div>
    )
}

export default About