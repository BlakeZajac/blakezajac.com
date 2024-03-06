import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import { MdArrowForward } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

interface ButtonProps {
  buttonClassname?: string;
  buttonHref?: string;
  buttonTarget?: string;
  buttonLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  buttonClassname,
  buttonHref = "#",
  buttonTarget = "_self",
  buttonLabel,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <a
      href={buttonHref}
      className={twMerge(buttonClassname, `btn`)}
      target={buttonTarget}
      onMouseMove={handleMouseMove}
    >
      <span className="btn__label">{buttonLabel}</span>
      <div className="btn__accessory">
        <MdArrowForward className="btn__icon btn__icon--arrow" />
        <FaRegSmile
          style={{
            left: `${mousePosition.x - 8}px`,
            top: `${mousePosition.y - 8}px`,
          }}
          className="btn__icon btn__icon--smile"
        />
      </div>
    </a>
  );
};

export default Button;
