import React, { useState, useEffect } from 'react';
import { FaInstagram, FaBars } from 'react-icons/fa';
import logo from '../assets/logo/CARLETON III Logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(false); // Close the menu whenever the screen size is adjusted
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="top-bar">
                <div className="instagram-link">
                    <a href="https://www.instagram.com/carletoniii" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="instagram-icon" />
                    </a>
                </div>
            </div>
            <div className={`container main-navigation-container`}>
                <div className="header-content">
                    <div className="logo">
                        <a href="/" className="logo-link">
                            <img src={logo} alt="Logo" className="logo-image" />
                        </a>
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        MENU <FaBars style={{ marginLeft: '5px', marginTop: '2px' }} />
                    </div>
                    <nav className="main-navigation">
                        <ul>
                            <li><a href="artist">ARTIST</a></li>
                            <li><a href="nature">NATURE</a></li>
                            <li><a href="urban">URBAN</a></li>
                            <li><a href="about">ABOUT</a></li>
                            <li><a href="contact">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <nav className={`dropdown-navigation ${isMenuOpen ? 'menu-open' : ''}`}>
                <ul>
                    <li><a href="artist">ARTIST</a></li>
                    <li><a href="nature">NATURE</a></li>
                    <li><a href="urban">URBAN</a></li>
                    <li><a href="about">ABOUT</a></li>
                    <li><a href="contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
