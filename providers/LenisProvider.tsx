"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface LenisProviderProps {
  children: React.ReactNode;
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.075, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
