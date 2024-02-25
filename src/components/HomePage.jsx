import React from 'react';
import Title from './Title';
import GallerySection from './GallerySection';
import MiniBio from './MiniBio';

const HomePage = () => {
    return (
        <div className="App">
            <Title />
            <GallerySection />
            <MiniBio />
        </div>
    );
};

export default HomePage;
