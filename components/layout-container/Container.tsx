import { twMerge } from "tailwind-merge";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={twMerge(className, `l-container`)}>{children}</div>;
};

export default Container;
