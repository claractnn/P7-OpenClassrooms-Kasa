import React from 'react';
import imgBanner from '../../styles/images/img_banner.webp';
import Banner from '../Layout/Banner';

function HomeBanner() {
    return (
        <Banner 
        title='Chez vous, partout et ailleurs'
        src={imgBanner}
        />
    )
}
export default HomeBanner