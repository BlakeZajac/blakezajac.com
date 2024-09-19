import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

interface ImageGalleryProps {
    images: Array<{
        src: string;
        alt: string;
        orientation?: "landscape" | "portrait";
    }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [alternatingImages, setAlternatingImages] = useState(images);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        // Split the images into landscape and portrait
        const landscapeImages = images.filter((image) => image.orientation === "landscape");
        const portraitImages = images.filter((image) => image.orientation === "portrait");

        // Determine the number of images to use from each orientation
        const count = Math.min(landscapeImages.length, portraitImages.length);

        // Randomise each array
        const shuffleLandscape = [...landscapeImages].sort(() => Math.random() - 0.5);
        const shufflePortrait = [...portraitImages].sort(() => Math.random() - 0.5);

        // Create an array to hold the alternating images
        const alternating = [];

        // Merge the two arrays in an alternating fashion
        for (let i = 0; i < count; i++) {
            alternating.push(shuffleLandscape[i], shufflePortrait[i]);
        }

        setAlternatingImages(alternating);
    }, [images]);

    return (
        <Section className={`image-gallery ${isDragging ? "image-gallery--dragging" : ""}`}>
            <Container>
                <Swiper
                    modules={[FreeMode]}
                    freeMode={{
                        enabled: true,
                        momentumRatio: 0.8,
                        momentumVelocityRatio: 0.75,
                    }}
                    breakpoints={{
                        1440: {
                            slidesPerView: 3.125,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                        },
                        0: {
                            slidesPerView: 1.25,
                            spaceBetween: 30,
                        },
                    }}
                    grabCursor={true}
                    className="u-overflow-x--important"
                    onSliderMove={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                    onTouchStart={() => setIsDragging(false)}
                >
                    {alternatingImages.map((image, index) => (
                        <SwiperSlide key={index} className="image-gallery__item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className={`image-gallery__image ${image.orientation === "landscape" ? "image-gallery__image--landscape" : ""}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Section>
    );
};

export default ImageGallery;
