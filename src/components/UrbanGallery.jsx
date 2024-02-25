import React, { useRef, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../assets/urbanImages/image-1.jpg';
import image2 from '../assets/urbanImages/image-2.jpg';
import image3 from '../assets/urbanImages/image-3.jpg';
import image4 from '../assets/urbanImages/image-4.jpg';
import image5 from '../assets/urbanImages/image-5.jpg';
import image6 from '../assets/urbanImages/image-6.jpg';
import image7 from '../assets/urbanImages/image-7.jpg';
import image8 from '../assets/urbanImages/image-8.jpg';
import image9 from '../assets/urbanImages/image-9.jpg';
import image10 from '../assets/urbanImages/image-10.jpg';
import image11 from '../assets/urbanImages/image-11.jpg';
import image12 from '../assets/urbanImages/image-12.jpg';
import image13 from '../assets/urbanImages/image-13.jpg';
import image14 from '../assets/urbanImages/image-14.jpg';
import image15 from '../assets/urbanImages/image-15.jpg';
import image16 from '../assets/urbanImages/image-16.jpg';
import image17 from '../assets/urbanImages/image-17.jpg';
import image18 from '../assets/urbanImages/image-18.jpg';
import image19 from '../assets/urbanImages/image-19.jpg';
import image20 from '../assets/urbanImages/image-20.jpg';
import image21 from '../assets/urbanImages/image-21.jpg';
import image22 from '../assets/urbanImages/image-22.jpg';
import image23 from '../assets/urbanImages/image-23.jpg';
import image24 from '../assets/urbanImages/image-24.jpg';
import image25 from '../assets/urbanImages/image-25.jpg';
import image26 from '../assets/urbanImages/image-26.jpg';
import image27 from '../assets/urbanImages/image-27.jpg';
import image28 from '../assets/urbanImages/image-28.jpg';
import image29 from '../assets/urbanImages/image-29.jpg';

// Array of image URLs
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25, image26, image27, image28, image29];

const UrbanGallery = () => {
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

export default UrbanGallery;