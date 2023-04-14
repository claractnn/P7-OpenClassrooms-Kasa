import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Carousel from '../components/Accomodation/Carousel';
import accomodations from '../datas/accomodations.json';

function Accomodation() {
    const { id } = useParams();
    const accomodation = accomodations.find((item) => item.id === id)

    return !accomodation ? (<Navigate to="/error" />) : ( 
        <div>
            <Header />
            <section className='accomodation_container'>
            <Carousel pictures={accomodation.pictures} title={accomodation.title}/>
            </section>
            
            <Footer />
        </div>
    )
}

export default Accomodation;