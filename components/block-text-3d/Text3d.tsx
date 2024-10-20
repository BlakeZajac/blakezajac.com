"use client";

import { useRef } from "react";

interface Text3dProps {
  primary: string;
  secondary: string;
}

const Text3d: React.FC<Text3dProps> = ({ primary, secondary }) => {
  const textPrimary = useRef(null);
  const textSecondary = useRef(null);

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
