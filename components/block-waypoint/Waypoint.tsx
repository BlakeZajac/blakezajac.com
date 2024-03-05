"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface WaypointProps {
  activeClass: string;
  threshold?: number | Array<number>;
  children: React.ReactNode;
}

const Waypoint: React.FC<WaypointProps> = ({
  activeClass,
  threshold = 0.5,
  children,
}) => {
  const { ref: waypointRef, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      document.body.classList.add(activeClass);
    } else {
      document.body.classList.remove(activeClass);
    }

    return () => {
      document.body.classList.remove(activeClass);
    };
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
