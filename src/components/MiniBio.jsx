import React from 'react';
import profileImage from '../assets/profilePhoto/bioPhoto.webp';

const MiniBio = () => {
    return (
        <div className="mini-bio">
            <div className="bio-text">
                <h3 className='bio-h3'>Film Photographer and Web Developer</h3>
                <p className='bio-paragraph'>
                    Since beginning my film photography journey in early 2022, I have explored various subjects, from
                    natural landscapes to vibrant urban scenes and live concerts. This pursuit has evolved alongside my
                    venture into web development, enabling me to blend my artistic vision with digital expertise to craft
                    this website with React. As I continue exploring photography and web development, I am searching for
                    collaborative opportunities that bring unique visions to fruition. Feel free to reach out
                    via <a href="mailto:carletonfosteriii@gmail.com">email</a> or
                    or through the form available on
                    my <a href="contact">contact page</a>.
                </p>
                <a href="about" className="logo-link">
                    <img src={profileImage} alt="Carleton Barrett Foster III about section" className="profile-image" />
                </a>
            </div>
        </div>
    );
};

export default MiniBio;
