import React from 'react';
import profileImage from '../assets/profilePhoto/bioPhoto.jpg';

const MiniBio = () => {
    return (
        <div className="mini-bio">
            <div className="bio-text">
                <h3 className='bio-h3'>Web Developer and Film Photographer</h3>
                <p className='bio-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="about" className="logo-link">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </a>
            </div>
        </div>
    );
};

export default MiniBio;
