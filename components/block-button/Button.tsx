import { twMerge } from "tailwind-merge";
import { MdArrowForward } from "react-icons/md";

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
  return (
    <a
      href={buttonHref}
      className={twMerge(buttonClassname, `btn`)}
      target={buttonTarget}
    >
      <span className="btn__label">{buttonLabel}</span>
      <div className="btn__accessory">
        <MdArrowForward className="btn__icon btn__icon--arrow" />
      </div>
    </a>
  );
};

export default Button;
