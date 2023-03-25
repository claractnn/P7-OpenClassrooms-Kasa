import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../styles/images/logo_kasa.png';

function Header() {
    return(
        <header className='header'>
            <div className='header_logo'>   
                <img src={logo} alt='Logo Kasa' className='header_logo_img' />
            </div>
            <nav className='header_nav'>
                <ul>
                    <li className='header_nav_link'> 
                        <NavLink>

                        </NavLink>
                    </li>
                </ul>
               
            </nav>
        </header>
    )
}

export default Header