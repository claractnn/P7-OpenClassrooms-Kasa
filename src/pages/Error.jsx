import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

function Error() {
    return ( 
        <div>
            <Header />
            <section className='error'>
                <div className='error_title'>
                    <h1 className='error_title_number'>404</h1>
                    <p className='error_title_message'>Oups ! La page que vous demandez n'existe pas.</p>
                </div>
                    <Link to='/'>Retourner sur la page d'accueil</Link>               
            </section>
            <Footer />
        </div>
    )
}

export default Error;