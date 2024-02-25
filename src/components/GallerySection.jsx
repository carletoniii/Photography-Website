import React, { useRef, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../assets/images/image-1.jpg';
import image2 from '../assets/images/image-2.jpg';
import image3 from '../assets/images/image-3.jpg';
import image4 from '../assets/images/image-4.jpg';
import image5 from '../assets/images/image-5.jpg';
import image6 from '../assets/images/image-6.jpg';
import image7 from '../assets/images/image-7.jpg';
import image8 from '../assets/images/image-8.jpg';
import image9 from '../assets/images/image-9.jpg';
import image10 from '../assets/images/image-10.jpg';
import image11 from '../assets/images/image-11.jpg';
import image12 from '../assets/images/image-12.jpg';
import image13 from '../assets/images/image-13.jpg';
import image14 from '../assets/images/image-14.jpg';
import image15 from '../assets/images/image-15.jpg';
import image16 from '../assets/images/image-16.jpg';
import image17 from '../assets/images/image-17.jpg';
import image18 from '../assets/images/image-18.jpg';
import image19 from '../assets/images/image-19.jpg';
import image20 from '../assets/images/image-20.jpg';
import image21 from '../assets/images/image-21.jpg';
import image22 from '../assets/images/image-22.jpg';
import image23 from '../assets/images/image-23.jpg';
import image24 from '../assets/images/image-24.jpg';
import image25 from '../assets/images/image-25.jpg';
import image26 from '../assets/images/image-26.jpg';
import image27 from '../assets/images/image-27.jpg';
import image28 from '../assets/images/image-28.jpg';
import image29 from '../assets/images/image-29.jpg';
import image30 from '../assets/images/image-30.jpg';
import image31 from '../assets/images/image-31.jpg';
import image32 from '../assets/images/image-32.jpg';
import image33 from '../assets/images/image-33.jpg';
import image34 from '../assets/images/image-34.jpg';
import image35 from '../assets/images/image-35.jpg';
import image36 from '../assets/images/image-36.jpg';
import image37 from '../assets/images/image-37.jpg';
import image38 from '../assets/images/image-38.jpg';
import image39 from '../assets/images/image-39.jpg';
import image40 from '../assets/images/image-40.jpg';
import image41 from '../assets/images/image-41.jpg';
import image42 from '../assets/images/image-42.jpg';
import image43 from '../assets/images/image-43.jpg';
import image44 from '../assets/images/image-44.jpg';
import image45 from '../assets/images/image-45.jpg';
import image46 from '../assets/images/image-46.jpg';
import image47 from '../assets/images/image-47.jpg';
import image48 from '../assets/images/image-48.jpg';
import image49 from '../assets/images/image-49.jpg';
import image50 from '../assets/images/image-50.jpg';

// Array of image URLs
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40,
    image41, image42, image43, image44, image45, image46, image47, image48, image49, image50];

const GallerySection = () => {
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

export default GallerySection;