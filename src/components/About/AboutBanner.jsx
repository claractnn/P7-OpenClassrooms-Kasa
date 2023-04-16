import React from 'react';
import imgBannerAbout from '../../styles/images/img_about_banner.webp';
import Banner from '../Layout/Banner';

function AboutBanner() {
    return (
        <Banner
            src={imgBannerAbout}
            className="img_banner_about"
        />
    )
}
export default AboutBanner

