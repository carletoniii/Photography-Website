import React, { useRef, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../assets/artistImages/artistImage-1.webp';
import image2 from '../assets/artistImages/artistImage-2.webp';
import image3 from '../assets/artistImages/artistImage-3.webp';
import image4 from '../assets/artistImages/artistImage-4.webp';
import image5 from '../assets/artistImages/artistImage-5.webp';
import image6 from '../assets/artistImages/artistImage-6.webp';
import image7 from '../assets/artistImages/artistImage-7.webp';
import image8 from '../assets/artistImages/artistImage-8.webp';
import image9 from '../assets/artistImages/artistImage-9.webp';
import image10 from '../assets/artistImages/artistImage-10.webp';
import image11 from '../assets/artistImages/artistImage-11.webp';
import image12 from '../assets/artistImages/artistImage-12.webp';
import image13 from '../assets/artistImages/artistImage-13.webp';
import image14 from '../assets/artistImages/artistImage-14.webp';
import image15 from '../assets/artistImages/artistImage-15.webp';

// Array of image URLs
const images = [
    { src: image1, alt: "Alaina Moore of Tennis performing at the Hollywood Palladium in Los Angeles, California" },
    { src: image2, alt: "Drummer Kody Nielson performing at an Unknown Mortal Orchestra concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image3, alt: "Ruban Nielson of Unknown Mortal Orchestra playing guitar at a concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image4, alt: "Ruban Nielson and Jacob Portrait of Unknown Mortal Orchestra bathed in blue light and performing at the Hollywood Palladium in Los Angeles, California" },
    { src: image5, alt: "Stage lights forming a 'V' at an Unknown Mortal Orchestra concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image6, alt: "Ruban Nielson of Unknown Mortal Orchestra playing guitar and singing at a concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image7, alt: "Drummer Kody Nielson performing in front of stage lights at an Unknown Mortal Orchestra concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image8, alt: "Ruban Nielson of Unknown Mortal Orchestra performing a guitar solo at a concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image9, alt: "Randall Taylor of Amulets playing a keyboard at a concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image10, alt: "Ruban Nielson and Jacob Portrait of Unknown Mortal Orchestra performing at the Hollywood Palladium in Los Angeles, California" },
    { src: image11, alt: "Flume bathed in red lights and performing at a concert at the Santa Barbara Bowl in Santa Barbara, California" },
    { src: image12, alt: "Joji guitarist Joshua Snow playing a red Gibson SG guitar with Seymour Duncan pickups" },
    { src: image13, alt: "Seymour Duncan artist Patrick Dean playing a reg Gibson SG guitar" },
    { src: image14, alt: "Randall Taylor of Amulets playing guitar at a concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image15, alt: "Wayne Coyne of the Flaming Lips performing and holding balloons that read 'FUCK YEAH SANTA BARBARA' at the Arlington Theatre in Santa Barbara, California" }
];

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

export default ArtistGallery;