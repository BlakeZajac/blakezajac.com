"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface WaypointProps {
  activeClass: string;
  children: React.ReactNode;
}

const Waypoint: React.FC<WaypointProps> = ({ activeClass, children }) => {
  const { ref: waypointRef, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    const bodyClassList = document.body.classList;
    if (inView) {
      bodyClassList.forEach((className) => {
        if (className.startsWith("theme-")) {
          bodyClassList.remove(className);
        }
      });
      bodyClassList.add(activeClass);
    } else {
      const timeout = setTimeout(() => {
        bodyClassList.remove(activeClass);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [inView, activeClass]);

  return (
    <div
      className={`waypoint ${inView ? "waypoint--is-active" : ""}`}
      ref={waypointRef}
    >
      {children}
    </div>
  );
};

export default Waypoint;
