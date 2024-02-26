import React, { useRef, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../assets/images/image-1.webp';
import image2 from '../assets/images/image-2.webp';
import image3 from '../assets/images/image-3.webp';
import image4 from '../assets/images/image-4.webp';
import image5 from '../assets/images/image-5.webp';
import image6 from '../assets/images/image-6.webp';
import image7 from '../assets/images/image-7.webp';
import image8 from '../assets/images/image-8.webp';
import image9 from '../assets/images/image-9.webp';
import image10 from '../assets/images/image-10.webp';
import image11 from '../assets/images/image-11.webp';
import image12 from '../assets/images/image-12.webp';
import image13 from '../assets/images/image-13.webp';
import image14 from '../assets/images/image-14.webp';
import image15 from '../assets/images/image-15.webp';
import image16 from '../assets/images/image-16.webp';
import image17 from '../assets/images/image-17.webp';
import image18 from '../assets/images/image-18.webp';
import image19 from '../assets/images/image-19.webp';
import image20 from '../assets/images/image-20.webp';
import image21 from '../assets/images/image-21.webp';
import image22 from '../assets/images/image-22.webp';
import image23 from '../assets/images/image-23.webp';
import image24 from '../assets/images/image-24.webp';
import image25 from '../assets/images/image-25.webp';
import image26 from '../assets/images/image-26.webp';
import image27 from '../assets/images/image-27.webp';
import image28 from '../assets/images/image-28.webp';
import image29 from '../assets/images/image-29.webp';
import image30 from '../assets/images/image-30.webp';
import image31 from '../assets/images/image-31.webp';
import image32 from '../assets/images/image-32.webp';
import image33 from '../assets/images/image-33.webp';
import image34 from '../assets/images/image-34.webp';
import image35 from '../assets/images/image-35.webp';
import image36 from '../assets/images/image-36.webp';
import image37 from '../assets/images/image-37.webp';
import image38 from '../assets/images/image-38.webp';
import image39 from '../assets/images/image-39.webp';
import image40 from '../assets/images/image-40.webp';
import image41 from '../assets/images/image-41.webp';
import image42 from '../assets/images/image-42.webp';
import image43 from '../assets/images/image-43.webp';
import image44 from '../assets/images/image-44.webp';
import image45 from '../assets/images/image-45.webp';
import image46 from '../assets/images/image-46.webp';
import image47 from '../assets/images/image-47.webp';
import image48 from '../assets/images/image-48.webp';
import image49 from '../assets/images/image-49.webp';
import image50 from '../assets/images/image-50.webp';

// Array of image URLs
const images = [
    { src: image1, alt: "Laundromat in Goleta, California on a sunny day" },
    { src: image2, alt: "Moving walkway in O'Hare International Airport in Chicago, Illinois" },
    { src: image3, alt: "Poppies on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image4, alt: "Drummer Kody Nielson performing at an Unknown Mortal Orchestra concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image5, alt: "Bushes in front of a house on a sunny day in Santa Barbara, California" },
    { src: image6, alt: "Alaina Moore of Tennis performing at the Hollywood Palladium in Los Angeles, California" },
    { src: image7, alt: "View of the Channel Islands from an airplane departing the Santa Barbara Airport" },
    { src: image8, alt: "Sun shining on a shower handle in the Siren Hotel in Detroit, Michigan" },
    { src: image9, alt: "Sunset view from Gibraltar Rock in Santa Barbara, California" },
    { src: image10, alt: "Red-colored panels in O'Hare International Airport in Chicago, Illinois" },
    { src: image11, alt: "Disco ball in Candy Bar in the Siren Hotel in Detroit, Michigan" },
    { src: image12, alt: "Muskegon South Pierhead Lighthouse on a sunny day on the shore of Lake Michigan in Muskegon, Michigan" },
    { src: image13, alt: "Cliffside view of the Pacific Ocean on a sunny day in Santa Barbara, CA" },
    { src: image14, alt: "Mountain views during a sunny day at Mammoth Mountain in California" },
    { src: image15, alt: "Abstract double exposure of exhibits in an art gallery" },
    { src: image16, alt: "Base of 150 North Riverside Plaza in Chicago, Illinois" },
    { src: image17, alt: "Sunset view from the driver's seat of a 2001 Toyota Corolla parked at Gibraltar Rock in Santa Barbara, California" },
    { src: image18, alt: "Ruban Nielson of Unknown Mortal Orchestra playing guitar at a concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image19, alt: "Intertwining Sky Lupines in front of a foggy valley and mountain peaks on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image20, alt: "Beatiful woman gazing out the window of a Getaway cabin on a gray day in Columbiaville, Michigan" },
    { src: image21, alt: "Abstract double exposure of an art exhibit and a sunset view of a mountain range in Santa Barbara, California" },
    { src: image22, alt: "Parent and child holding hands at the end of a parade during the 2022 Old Spanish Days celebration in Santa Barbara, California" },
    { src: image23, alt: "Sunset view from Douglas Family Preserve in Santa Barbara, California" },
    { src: image24, alt: "Reflection in storefront glass window showing an embraced couple next to the Hollywood Palladium in Los Angeles, California" },
    { src: image25, alt: "View of tall buildings from the top of the Willis Tower on a foggy day in Chicago, Illinois" },
    { src: image26, alt: "View of the Channel Islands and Pacific Ocean behind flowers and vegetation on a sunny day on a cliff in Santa Barbara, California" },
    { src: image27, alt: "View of windows with red trim on a tan buliding on a sunny day in Los Angeles, California" },
    { src: image28, alt: "Stage lights forming a 'V' at an Unknown Mortal Orchestra concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image29, alt: "Seagull perched upon rubble at a Pacific Ocean shoreline in Gaviota, California" },
    { src: image30, alt: "View of a sailboat on the Pacific Ocean with the Channel Islands in the background from Stearns Wharf in Santa Barbara, California" },
    { src: image31, alt: "Tilted rock strata at a Pacific Ocean shoreline in Gaviota, California" },
    { src: image32, alt: "Red leaves on branches on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image33, alt: "Randall Taylor of Amulets playing guitar at a concert at the Hollywood Palladium in Los Angeles, California" },
    { src: image34, alt: "Poppies and Sky Lupines on a hillside on a sunny day at Figueroa Mountain in the Transverse Ranges of California" },
    { src: image35, alt: "Water ripples reflecting a sunset on the Pacific Ocean near Santa Barbara, California" },
    { src: image36, alt: "Gorgeous woman standing in a sconce-lit hallway with checkered floor tiles in the Siren Hotel in Detroit, Michigan" },
    { src: image37, alt: "Snow-covered branches on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image38, alt: "Crowd observing a parade during the 2022 Old Spanish Days celebration in Santa Barbara, California" },
    { src: image39, alt: "Flower-covered hillside next to a Pacific Ocean shoreline in Santa Barbara, California" },
    { src: image40, alt: "Shell-covered beach next to the Gulf of Mexico in Panama City Beach, Florida" },
    { src: image41, alt: "Wind ripples on the sand of a beach next to the Gulf of Mexico in Panama City Beach, Florida" },
    { src: image42, alt: "Sunset view of Lake Michigan shoreline in Lake Harbor Park in Norton Shores, Michigan" },
    { src: image43, alt: "Fluorescent light surrounded by green tiles inside a bathroom at a rest area in Illinois" },
    { src: image44, alt: "View of a tan building with a sign that reads 'Customer Parking Only' and a green lamp casting a shadow during a sunny day in Santa Barbara, California" },
    { src: image45, alt: "Snow-covered trees on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image46, alt: "Sunset view of the Pacific Ocean at Arroyo Burro Beach County Park in Santa Barbara, California" },
    { src: image47, alt: "Pretty woman holding and peering into a glass of white wine" },
    { src: image48, alt: "Snow-covered street sign on Lyon Street NE on a gray, snowy day in Grand Rapids, Michigan" },
    { src: image49, alt: "Views of Santa Barbara Harbor, a residential hillside, and the Santa Ynez mountains on a sunny day in Santa Barbara, California" },
    { src: image50, alt: "View of a hiking trail with adjacent trees before a foggy valley and mountain peaks on a sunny day at Figueroa Mountain in the Transverse Ranges of California" }
];

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

export default GallerySection;