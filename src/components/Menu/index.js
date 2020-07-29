import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';




function Menu() {
    return (
        <nav className='Menu'>
            <a to='/'> 
            <img as={Link} className="Logo" src={Logo} alt="Meteflix Logo" to="/" ></img>
            </a>

            <Button as={Link} className='ButtonLink' to="/register/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;