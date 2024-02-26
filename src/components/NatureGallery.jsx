import React, { useRef, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../assets/natureImages/image-1.webp';
import image2 from '../assets/natureImages/image-2.webp';
import image3 from '../assets/natureImages/image-3.webp';
import image4 from '../assets/natureImages/image-4.webp';
import image5 from '../assets/natureImages/image-5.webp';
import image6 from '../assets/natureImages/image-6.webp';
import image7 from '../assets/natureImages/image-7.webp';
import image8 from '../assets/natureImages/image-8.webp';
import image9 from '../assets/natureImages/image-9.webp';
import image10 from '../assets/natureImages/image-10.webp';
import image11 from '../assets/natureImages/image-11.webp';
import image12 from '../assets/natureImages/image-12.webp';
import image13 from '../assets/natureImages/image-13.webp';
import image14 from '../assets/natureImages/image-14.webp';
import image15 from '../assets/natureImages/image-15.webp';
import image16 from '../assets/natureImages/image-16.webp';
import image17 from '../assets/natureImages/image-17.webp';
import image18 from '../assets/natureImages/image-18.webp';
import image19 from '../assets/natureImages/image-19.webp';
import image20 from '../assets/natureImages/image-20.webp';
import image21 from '../assets/natureImages/image-21.webp';
import image22 from '../assets/natureImages/image-22.webp';
import image23 from '../assets/natureImages/image-23.webp';
import image24 from '../assets/natureImages/image-24.webp';
import image25 from '../assets/natureImages/image-25.webp';
import image26 from '../assets/natureImages/image-26.webp';
import image27 from '../assets/natureImages/image-27.webp';
import image28 from '../assets/natureImages/image-28.webp';

// Array of image URLs
const images = [
    { src: image1, alt: "Poppies on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image2, alt: "Sunset view from Gibraltar Rock in Santa Barbara, California" },
    { src: image3, alt: "Views of Santa Barbara Harbor, a residential hillside, and the Santa Ynez mountains on a sunny day in Santa Barbara, California" },
    { src: image4, alt: "Cliffside view of the Pacific Ocean on a sunny day in Santa Barbara, CA" },
    { src: image5, alt: "Mountain views during a sunny day at Mammoth Mountain in California" },
    { src: image6, alt: "Intertwining Sky Lupines in front of a foggy valley and mountain peaks on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image7, alt: "Tilted rock strata at a Pacific Ocean shoreline in Gaviota, California" },
    { src: image8, alt: "View of the Channel Islands and Pacific Ocean behind flowers and vegetation on a sunny day on a cliff in Santa Barbara, California" },
    { src: image9, alt: "Seagull perched upon rubble at a Pacific Ocean shoreline in Gaviota, California" },
    { src: image10, alt: "Sunset view from Douglas Family Preserve in Santa Barbara, California" },
    { src: image11, alt: "Red leaves on branches on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image12, alt: "Poppies and Sky Lupines on a hillside on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image13, alt: "Water ripples reflecting a sunset on the Pacific Ocean near Santa Barbara, California" },
    { src: image14, alt: "Snow-covered branches on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image15, alt: "Flower-covered hillside next to a Pacific Ocean shoreline in Santa Barbara, California" },
    { src: image16, alt: "Shell-covered beach next to the Gulf of Mexico in Panama City Beach, Florida" },
    { src: image17, alt: "Wind ripples on the sand of a beach next to the Gulf of Mexico in Panama City Beach, Florida" },
    { src: image18, alt: "Sunset view of Lake Michigan shoreline in Lake Harbor Park in Norton Shores, Michigan" },
    { src: image19, alt: "Snow-covered trees on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image20, alt: "Ghost Rock, a pinnacle along I-70 in Utah's San Rafael Swell" },
    { src: image21, alt: "View of a hiking trail with adjacent trees before a foggy valley and mountain peaks on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image22, alt: "Sky Lupines in front of a foggy valley and mountain peaks on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image23, alt: "Mountain and valley views on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image24, alt: "Poppies and Sky Lupines before a foggy valley and mountain peaks on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image25, alt: "Mountain and valley views with a blue sky on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image26, alt: "Close-up view of Poppies and Sky Lupines on a hillside on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image27, alt: "Pink and green-tinted sunset view of the Gulf of Mexico in Panama City Beach, Florida" },
    { src: image28, alt: "Roadside cliffs on a sunny day in Utah" }
];

const NatureGallery = () => {
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
                    {images.map((images, index) => (
                        <div key={index} className="gallery-item">
                            <LazyLoadImage
                                src={images.src}
                                alt={images.alt}
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
                {images.map((images, index) => (
                    <LazyLoadImage key={index} src={images.src} alt={images.alt} style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }} />
                ))}
            </SlideshowLightbox>
        </section>
    );
};

export default NatureGallery;