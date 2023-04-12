import React from 'react';
//import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Carrousel from '../components/Accomodation/Carrousel';

function Accomodation() {
    return (
        <div>
            <Header />
            <Carrousel />
            <Footer />
        </div>
    )
}

export default Accomodation;