import React, { useRef, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../assets/urbanImages/image-1.webp';
import image2 from '../assets/urbanImages/image-2.webp';
import image3 from '../assets/urbanImages/image-3.webp';
import image4 from '../assets/urbanImages/image-4.webp';
import image5 from '../assets/urbanImages/image-5.webp';
import image6 from '../assets/urbanImages/image-6.webp';
import image7 from '../assets/urbanImages/image-7.webp';
import image8 from '../assets/urbanImages/image-8.webp';
import image9 from '../assets/urbanImages/image-9.webp';
import image10 from '../assets/urbanImages/image-10.webp';
import image11 from '../assets/urbanImages/image-11.webp';
import image12 from '../assets/urbanImages/image-12.webp';
import image13 from '../assets/urbanImages/image-13.webp';
import image14 from '../assets/urbanImages/image-14.webp';
import image15 from '../assets/urbanImages/image-15.webp';
import image16 from '../assets/urbanImages/image-16.webp';
import image17 from '../assets/urbanImages/image-17.webp';
import image18 from '../assets/urbanImages/image-18.webp';
import image19 from '../assets/urbanImages/image-19.webp';
import image20 from '../assets/urbanImages/image-20.webp';
import image21 from '../assets/urbanImages/image-21.webp';
import image22 from '../assets/urbanImages/image-22.webp';
import image23 from '../assets/urbanImages/image-23.webp';
import image24 from '../assets/urbanImages/image-24.webp';
import image25 from '../assets/urbanImages/image-25.webp';
import image26 from '../assets/urbanImages/image-26.webp';
import image27 from '../assets/urbanImages/image-27.webp';
import image28 from '../assets/urbanImages/image-28.webp';
import image29 from '../assets/urbanImages/image-29.webp';

// Array of image URLs
const images = [
    { src: image1, alt: "Laundromat in Goleta, California on a sunny day" },
    { src: image2, alt: "Moving walkway in O'Hare International Airport in Chicago, Illinois" },
    { src: image3, alt: "Bushes in front of a house on a sunny day in Santa Barbara, California" },
    { src: image4, alt: "Red, yellow, and green-tinted opaque glass blocks outside an apartment in Grand Rapids, Michigan" },
    { src: image5, alt: "View of the Channel Islands from an airplane departing the Santa Barbara Airport" },
    { src: image6, alt: "Sun shining on a shower handle in the Siren Hotel in Detroit, Michigan" },
    { src: image7, alt: "Reflection in storefront glass window showing an embraced couple next to the Hollywood Palladium in Los Angeles, California" },
    { src: image8, alt: "Disco ball in Candy Bar in the Siren Hotel in Detroit, Michigan" },
    { src: image9, alt: "Crowd observing a parade during the 2022 Old Spanish Days celebration in Santa Barbara, California" },
    { src: image10, alt: "Base of 150 North Riverside Plaza in Chicago, Illinois" },
    { src: image11, alt: "Kinzie Street railroad bridge on a gray day in Chicago, Illinois" },
    { src: image12, alt: "View from the base of Willis tower on a gray day in Chicago Illinois" },
    { src: image13, alt: "Pedestrain traffic and the 'L' train on a sunny, summer evening in Chicago, Illinois" },
    { src: image14, alt: "Muskegon South Pierhead Lighthouse on a sunny day on the shore of Lake Michigan in Muskegon, Michigan" },
    { src: image15, alt: "Harry Weese-designed riverside townhouses on a gray day in Chicago, Illinios" },
    { src: image16, alt: "Sunset view from the driver's seat of a 2001 Toyota Corolla parked at Gibraltar Rock in Santa Barbara, California" },
    { src: image17, alt: "Purple-tinted view of the Channel Islands from an airplane departing the Santa Barbara Airport" },
    { src: image18, alt: "View of windows with red trim on a tan buliding on a sunny day in Los Angeles, California" },
    { src: image19, alt: "Confetti and stage lights at a concert performance by the Flaming Lips at the Arlington Theatre in Santa Barbara, California" },
    { src: image20, alt: "Parent and child holding hands at the end of a parade during the 2022 Old Spanish Days celebration in Santa Barbara, California" },
    { src: image21, alt: "Red-colored panels in O'Hare International Airport in Chicago, Illinois" },
    { src: image22, alt: "Views of Santa Barbara Harbor, a residential hillside, and the Santa Ynez mountains on a sunny day in Santa Barbara, California" },
    { src: image23, alt: "View of tall buildings from the top of the Willis Tower on a foggy day in Chicago, Illinois" },
    { src: image24, alt: "Orange-tinted, sunrise view of the Channel Islands from an airplane departing the Santa Barbara Airport" },
    { src: image25, alt: "Gorgeous woman standing in a sconce-lit hallway with checkered floor tiles in the Siren Hotel in Detroit, Michigan" },
    { src: image26, alt: "Streetview of The Chicago Theatre on a gray day in Chicago, Illinois" },
    { src: image27, alt: "Fluorescent light surrounded by green tiles inside a bathroom at a rest area in Illinois" },
    { src: image28, alt: "Snow-covered street sign on Lyon Street NE on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image29, alt: "View of a tan building with a sign that reads 'Customer Parking Only' and a green lamp casting a shadow during a sunny day in Santa Barbara, California" }
];

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

export default UrbanGallery;