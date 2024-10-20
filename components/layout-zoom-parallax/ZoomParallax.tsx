"use client";

// @todo - update to work with sanity images

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useInView, useScroll, useTransform, motion } from "framer-motion";

import Picture1 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture2 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture3 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture4 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture5 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture6 from "@/src/img/headshots/headshots-1920x1080-01.webp";
import Picture7 from "@/src/img/headshots/headshots-1920x1080-01.webp";

interface ZoomParallaxProps {}

const ZoomParallax: React.FC<ZoomParallaxProps> = () => {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(container, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", () =>
      setTimeout(() => checkMobile(), 200)
    );

    return () => {
      window.removeEventListener("resize", () =>
        setTimeout(() => checkMobile(), 200)
      );
    };
  }, []);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      mobileScale: scale2,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="zoom-parallax">
      <div className="zoom-parallax__container">
        {pictures.map(({ src, scale, mobileScale }, index) => (
          <motion.div
            key={index}
            style={{
              scale:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? mobileScale
                  : scale,
            }}
            className="zoom-parallax__item"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1.08, 0.38, 0.98],
              delay: index * 0.1,
            }}
          >
            <div className="zoom-parallax__media">
              <Image
                src={src}
                fill
                alt=""
                placeholder="blur"
                className="zoom-parallax__image"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZoomParallax;
