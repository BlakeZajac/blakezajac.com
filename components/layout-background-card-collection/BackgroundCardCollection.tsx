"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";
import BackgroundCard, {
  BackgroundCardProps,
} from "../block-background-card/BackgroundCard";

import "swiper/css";
interface BackgroundCardCollectionProps {
  title?: string;
  items: BackgroundCardProps[];
}

const BackgroundCardCollection: React.FC<BackgroundCardCollectionProps> = ({
  title,
  items,
}) => {
  const [loopEnabled, setLoopEnabled] = useState(true);

  useEffect(() => {
    if (items.length <= 5) {
      setLoopEnabled(false);
    }
  }, [items.length]);

  return (
    <Section className="card-collection">
      {/* @todo - Find a better way to apply the overflow in both directions without breaking the title */}
      <Container className="u-overflow-right">
        <h2 className="card-collection__title">{title}</h2>

        <Swiper
          breakpoints={{
            1920: {
              slidesPerView: 4.25,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3.125,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2.25,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1.25,
              spaceBetween: 30,
            },
            0: {
              slidesPerView: 1.125,
              spaceBetween: 30,
            },
          }}
          loop={loopEnabled}
          grabCursor={true}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="card-collection__slide">
              <BackgroundCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default BackgroundCardCollection;
