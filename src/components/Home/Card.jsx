import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
    const { id , title, cover } = props.accomodation 
    return ( 
        <Link className='accomodation' to={`/accomodation/${id}`}>
            <h2 className='accommodation_title'>{title}</h2>
            <img src={`${cover}`} alt={`${title}`}/>
        </Link>
    )
}

export default Card;