import React from 'react';
import imgBannerHome from '../../styles/images/img_home_banner.webp';
import Banner from '../Layout/Banner';

function HomeBanner() {
    return (
        <Banner className="banner_img_home"
            title='Chez vous, partout et ailleurs'
            src={imgBannerHome}
        />
    )
}
export default HomeBanner;

