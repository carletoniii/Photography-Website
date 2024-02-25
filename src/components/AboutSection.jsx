import React from 'react'
import aboutPhoto from '../assets/profilePhoto/bioPhoto.jpg'

function AboutSection() {
    return (
        <div className="about-section">
            <h2 className="about-section-title">Web Developer and Film Photographer</h2>
            <div className="about-content-wrapper">
                <div className="about-text-section">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur lorem non ipsum accumsan, vel pulvinar mi eleifend.
                        Nulla facilisi. Fusce non purus vehicula, tincidunt ligula vitae, ullamcorper nulla. Ut imperdiet elit non nisi blandit,
                        quis aliquet odio vestibulum. Suspendisse potenti. Nulla facilisi. Donec vel velit ut sapien aliquam aliquam ac vel erat.
                        Phasellus sollicitudin magna eu justo iaculis condimentum.
                    </p>
                </div>
                <div className="about-photo-section">
                    <img src={aboutPhoto} alt="Carleton Barrett Foster III in a flower field in California" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;