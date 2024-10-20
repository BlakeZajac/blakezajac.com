import { useRef } from "react";
import { useRouter } from "next/navigation";

import Text3d from "@/components/block-text-3d/Text3d";

const FooterCta = () => {
  const router = useRouter();
  const plane = useRef<HTMLDivElement>(null);
  const maxRotate = 45;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;

    if (plane.current) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    }
  };

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      onClick={handleClick}
      className="footer-cta"
    >
      <div ref={plane} className="footer-cta__plane">
        <Text3d primary="Let's" secondary="Let's" />
        <Text3d primary="make" secondary="make" />
        <Text3d primary="something" secondary="something" />
        <Text3d primary="exciting" secondary="exciting" />
      </div>
    </div>
  );
};

export default FooterCta;
