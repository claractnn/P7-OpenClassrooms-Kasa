import React from 'react';
import Header from '../components/Layout/Header';
import HomeBanner from '../components/Home/HomeBanner';
import Accommodations from '../data/accommodations.json';
import Gallery from '../components/Home/Gallery';
import Footer from '../components/Layout/Footer';

//importer toutes les layout de la page home (footer, banner, allcards)

function Home() {
    return(
        <div>
            <Header />
            <HomeBanner />
            <Gallery accommodations={Accommodations}/>
            <Footer />
        </div>
    )
}

export default Home;