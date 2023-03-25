import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../styles/images/logo_kasa.png';

function Header() {
    return(
        <header className='header'>
            <div className='header_logo'>   
                <img src='{logo}' alt='logo-kasaa' className='header_logo_img' />
            </div>
            <nav className='header_nav'>
                
            </nav>
        </header>
    )
}