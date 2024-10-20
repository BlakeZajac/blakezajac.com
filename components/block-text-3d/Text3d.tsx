"use client";

import { useRef, useEffect } from "react";

interface Text3dProps {
  primary: string;
  secondary: string;
}

let instanceCount = 0;

const Text3d: React.FC<Text3dProps> = ({ primary, secondary }) => {
  const textPrimary = useRef(null);
  const textSecondary = useRef(null);

  useEffect(() => {
    instanceCount++;

    document.documentElement.style.setProperty(
      "--text-3d-count",
      instanceCount.toString()
    );

    return () => {
      instanceCount--;
      document.documentElement.style.setProperty(
        "--text-3d-count",
        instanceCount.toString()
      );
    };
  }, []);

  return (
    <div className="text-3d">
      <p className="text-3d__item text-3d__item--primary" ref={textPrimary}>
        {primary}
      </p>

      <p className="text-3d__item text-3d__item--secondary" ref={textSecondary}>
        {secondary}
      </p>
    </div>
  );
};

export default Text3d;
