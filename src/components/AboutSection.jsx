import React from 'react';
import aboutPhoto from '../assets/profilePhoto/bioPhoto-3.webp';

function AboutSection() {
    return (
        <div className="about-section">
            <h2 className="about-section-title">Film Photographer and Web Developer</h2>
            <div className="about-content-wrapper">
                <div className="about-photo-section">
                    <img src={aboutPhoto} alt="Carleton Barrett Foster III" />
                </div>
                <div className="about-text-section">
                    <p>
                        I began shooting 35mm film in early 2022 and was immediately hooked. The subjects
                        of the first few rolls of film that I shot were the mountainous and coastal
                        landscapes of Santa Barbara, California; I became obsessed with capturing the
                        beautiful scenes that were part of my day-to-day experience. As I continued to
                        refine my understanding of cameras and composition, I expanded my focus to
                        include artist, concert, and urban subjects. Film photography quickly developed
                        into a tool for me to document my life and present those moments in an authentic
                        manner.
                    </p>
                    <p>
                        Simultaneously, I began learning about web development, taking my first web
                        development class around the same time I discovered film photography. This new
                        pursuit allowed me to merge my artistic vision with the technical capabilities
                        of digital platforms. It has been a goal of mine to build a photography website
                        to both highlight my film photography and exercise my skills as a web developer
                        and designer. To bring my exact design to life and further my web development
                        knowledge, I crafted this website from scratch using React.
                    </p>
                    <p>
                        As I continue exploring film photography and web development, I am searching
                        for new, exciting ways to collaborate and create. If my work sparks an interest
                        or if you envision a project we could bring to life together, please do not
                        hesitate to get in touch. You can
                        reach me via <a href="mailto:carletonfosteriii@gmail.com">email</a> or
                        through the form available on my <a href="contact">contact page</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
