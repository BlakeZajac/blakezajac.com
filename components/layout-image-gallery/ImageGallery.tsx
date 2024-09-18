import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    const [loopEnabled, setLoopEnabled] = useState(true);

    useEffect(() => {
        // Split the images into landscape and portrait
        const landscapeImages = images.filter((image) => image.orientation === "landscape");
        const portraitImages = images.filter((image) => image.orientation === "portrait");

        // Randomise each array
        const shuffleLandscape = [...landscapeImages].sort(() => Math.random() - 0.5);
        const shufflePortrait = [...portraitImages].sort(() => Math.random() - 0.5);

        // Merge the two arrays in an alternating fashion
        const alternating = [];
        const maxLength = Math.max(shuffleLandscape.length, shufflePortrait.length);

        for (let i = 0; i < maxLength; i++) {
            if (shuffleLandscape[i]) alternating.push(shuffleLandscape[i]);
            if (shufflePortrait[i]) alternating.push(shufflePortrait[i]);
        }

        setAlternatingImages(alternating);
        setLoopEnabled(alternating.length > 5);
    }, [images]);

    return (
        <Section className="image-gallery">
            <Container className="u-overflow-right">
                <Swiper
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
                    loop={loopEnabled}
                    grabCursor={true}
                >
                    {alternatingImages.map((image, index) => (
                        <SwiperSlide key={index} className="image-gallery__item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className={`image-gallery__image ${image.orientation === "portrait" && "image-gallery__image--portrait"}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Section>
    );
};

export default ImageGallery;
