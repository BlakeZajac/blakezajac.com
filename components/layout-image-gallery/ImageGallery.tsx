import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";
import Image from "next/image";

import ImageOne from "../../src/img/headshots/headshots-1920x1080-01.webp";
import ImageTwo from "../../src/img/headshots/headshots-1920x1080-01.webp";
import ImageThree from "../../src/img/headshots/headshots-1920x1080-01.webp";
import ImageFour from "../../src/img/headshots/headshots-1920x1080-01.webp";

const images = [ImageOne, ImageTwo, ImageThree, ImageFour].map(
  (src, index) => ({
    src,
    alt: `Image ${index + 1}`,
  })
);

const ImageGallery = () => {
  const [loopEnabled, setLoopEnabled] = useState(true);

  useEffect(() => {
    if (images.length <= 5) {
      setLoopEnabled(false);
    }
  }, []);

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
          {images.map((image, index) => (
            <SwiperSlide key={index} className="image-gallery__item">
              <Image
                src={image.src}
                alt={image.alt}
                className={`image-gallery__image ${
                  index % 2 === 1 ? "image-gallery__image--alt" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default ImageGallery;
