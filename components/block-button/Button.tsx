import { twMerge } from "tailwind-merge";

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
      className={twMerge(buttonClassname, `btn btn--primary`)}
      target={buttonTarget}
    >
      <span className="btn__label">{buttonLabel}</span>
    </a>
  );
};

export default Button;
