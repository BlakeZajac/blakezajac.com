"use client";

// @todo - update to work with sanity images
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

import Picture1 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture2 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture3 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture4 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture5 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture6 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture7 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture8 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture9 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture10 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture11 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture12 from "@/src/img/headshots/headshots-1920x1080-01.webp";

interface ParallaxScrollProps {}

const images = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
  Picture8,
  Picture9,
  Picture10,
  Picture11,
  Picture12,
];

const ParallaxScroll: React.FC<ParallaxScrollProps> = () => {
  const container = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const { height } = dimensions;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", () => setTimeout(() => resize(), 200));

    resize();

    return () => {
      window.removeEventListener("resize", () =>
        setTimeout(() => resize(), 200)
      );
    };
  }, []);

  return (
    <Section>
      <Container>
        <div ref={container} className="parallax-scroll">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </Container>
    </Section>
  );
};

const Column = ({ images, y }: { images: any[]; y: any }) => {
  return (
    <motion.div style={{ y }} className="parallax-scroll__column">
      {images.map((image, index) => (
        <div key={index} className="parallax-scroll__media">
          <Image src={image} alt="" fill className="parallax-scroll__image" />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxScroll;
