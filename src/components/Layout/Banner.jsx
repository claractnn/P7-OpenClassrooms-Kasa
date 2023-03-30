import React from 'react';
import img_banner from '../../styles/images/img_banner.webp'

function Banner() {
    return (
        <div className="banner">
            <img src={img_banner} alt='Bannière' className='banner_img' />
        </div>
    )
}

export default Banner
