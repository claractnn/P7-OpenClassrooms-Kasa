import React from 'react';
import Header from '../components/Layout/Header'
import Banner from '../components/Layout/Banner'
//importer toutes les layout de la page home (footer, banner, allcards)

function Home() {
    return(
        <div>
            <Header />
            <Banner />
        </div>
    )
}

export default Home