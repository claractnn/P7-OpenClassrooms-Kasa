import React from 'react';
import Header from '../components/Layout/Header'
import HomeBanner from '../components/Home/HomeBanner'
//importer toutes les layout de la page home (footer, banner, allcards)

function Home() {
    return(
        <div>
            <Header />
            <HomeBanner />
        </div>
    )
}

export default Home