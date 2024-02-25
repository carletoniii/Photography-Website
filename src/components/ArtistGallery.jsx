import React, { useRef, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import artistImage1 from '../assets/artistImages/artistImage-1.jpg';
import artistImage2 from '../assets/artistImages/artistImage-2.jpg';
import artistImage3 from '../assets/artistImages/artistImage-3.jpg';
import artistImage4 from '../assets/artistImages/artistImage-4.jpg';
import artistImage5 from '../assets/artistImages/artistImage-5.jpg';
import artistImage6 from '../assets/artistImages/artistImage-6.jpg';
import artistImage7 from '../assets/artistImages/artistImage-7.jpg';
import artistImage8 from '../assets/artistImages/artistImage-8.jpg';
import artistImage9 from '../assets/artistImages/artistImage-9.jpg';
import artistImage10 from '../assets/artistImages/artistImage-10.jpg';
import artistImage11 from '../assets/artistImages/artistImage-11.jpg';
import artistImage12 from '../assets/artistImages/artistImage-12.jpg';
import artistImage13 from '../assets/artistImages/artistImage-13.jpg';
import artistImage14 from '../assets/artistImages/artistImage-14.jpg';
import artistImage15 from '../assets/artistImages/artistImage-15.jpg';

// Array of image URLs
const images = [artistImage1, artistImage2, artistImage3, artistImage4, artistImage5, artistImage6, artistImage7, artistImage8, artistImage9, artistImage10,
    artistImage11, artistImage12, artistImage13, artistImage14, artistImage15];

const ArtistGallery = () => {
    const breakpointColumnsObj = { default: 4 };
    const lightboxRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [loadedImages, setLoadedImages] = useState({}); // State to track loaded images

    useEffect(() => {
        const handleTouchStart = (event) => {
            const lightbox = lightboxRef.current;
            const touchTarget = event.target;

            if (lightbox && lightbox.contains && !lightbox.contains(touchTarget)) {
                setLightboxOpen(false);
            }
        };

        document.addEventListener('touchstart', handleTouchStart);
        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    // Function to handle image load
    const handleImageLoad = (index) => {
        setLoadedImages((prevLoadedImages) => ({
            ...prevLoadedImages,
            [index]: true,
        }));
    };

    return (
        <section className="gallery">
            <div className="container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="gallery-grid"
                    columnClassName="gallery-column"
                >
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <LazyLoadImage
                                src={image}
                                alt={`${index + 1}`}
                                onClick={() => openLightbox(index)}
                                onLoad={() => handleImageLoad(index)} // Adjusted to use the new handler
                                className={`gallery-image ${loadedImages[index] ? 'image-loaded' : ''}`} // Conditionally apply 'image-loaded' class
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
            <SlideshowLightbox
                ref={lightboxRef}
                backgroundColor="rgba(39, 39, 39, 0.9)"
                className="lightbox"
                modalClose="clickOutside"
                open={lightboxOpen}
                startingSlideIndex={currentIndex}
                onClose={closeLightbox}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                {images.map((image, index) => (
                    <LazyLoadImage key={index} src={image} alt={`${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }} />
                ))}
            </SlideshowLightbox>
        </section>
    );
};

export default ArtistGallery;