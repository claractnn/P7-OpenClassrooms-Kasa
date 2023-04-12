import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    const { id , title, cover } = props.accomodation 
    return ( 
        <Link className='accomodation' to={`/accomodation/${id}`}>
            <img className='accomodation_img' src={`${cover}`} alt={`${title}`}/>
            <h2 className='accomodation_title'>{title}</h2>
        </Link>
    )
}

export default Card;