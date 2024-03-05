import { twMerge } from "tailwind-merge";

interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <div className={twMerge(className, `l-section`)}>{children}</div>;
};

export default Section;
