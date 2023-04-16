import React from 'react';
import imgBannerAbout from '../../styles/images/img_about_banner.webp';
import Banner from '../Layout/Banner';

function AboutBanner() {
    return (
        <Banner className="banner_img_about"
            src={imgBannerAbout}
        />
    )
}
export default AboutBanner

