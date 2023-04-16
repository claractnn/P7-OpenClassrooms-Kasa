import React from 'react';

function Banner(props) {
    return (
        <div className="banner">
            <h1 className='banner_title'>{props.title}</h1>
            <img src={props.src} alt='Bannière Kasa' className='banner_img banner_img_about' />
        </div>
    )
}

export default Banner;

