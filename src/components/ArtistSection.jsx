import React from 'react';
import ArtistGallery from './ArtistGallery';
import MiniBio from './MiniBio';

const ArtistSection = () => {
    return (
        <div className="App">
            <ArtistGallery />
            <MiniBio />
        </div>
    );
};

export default ArtistSection;