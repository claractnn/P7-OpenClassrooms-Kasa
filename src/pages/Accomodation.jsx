import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Carousel from '../components/Accomodation/Carousel';
import accomodations from '../datas/accomodations.json';
import Presentation from '../components/Accomodation/Presentation';
import Collapse from '../components/Layout/Collapse';

function Accomodation() {
    const { id } = useParams();
    const accomodation = accomodations.find((item) => item.id === id)

    return !accomodation ? (<Navigate to="/error" />) : ( 
        <div>
            <Header />
            <section className='accomodation_container'>
                <Carousel 
                    pictures={accomodation.pictures} 
                    title={accomodation.title}
                />
                <Presentation 
                    title={accomodation.title}
                    location={accomodation.location}
                    tags={accomodation.tags}
                    host={accomodation.host}
                    rating={accomodation.rating}
                />
                <div className='accomodation_collapses'>
                    <Collapse 
                        title="Description"
                        content={<p>{accomodation.description}</p>} 
                    />
                    <Collapse 
                        title="Équipements"
                        content={
                            <ul>
                                {accomodation.equipments.map((equip, index) => {
                                    return <li key={`${index}${equip}`}>{equip}</li>;
                                })}
                            </ul>
                        } 
                    />
                </div>
                </section>
            <Footer />
        </div>
    )
}

export default Accomodation;