import React from 'react';
import Header from '../components/Layout/Header';
import HomeBanner from '../components/Home/HomeBanner';
import Accomodations from '../datas/accomodations.json';
import Gallery from '../components/Layout/Gallery';

//importer toutes les layout de la page home (footer, banner, allcards)

function Home() {
    return(
        <div>
            <Header />
            <HomeBanner />
            <Gallery accomodations={Accomodations}/>
        </div>
    )
}

export default Home;