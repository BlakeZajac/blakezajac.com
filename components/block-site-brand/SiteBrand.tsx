import Image from "next/image";
import logo from "../../src/img/logo/logo.svg";

interface SiteBrandProps {
  link?: string;
}

const Logo: React.FC = () => (
  <Image alt="Blake Zajac logo" src={logo} className="site-brand__logo" />
);

const SiteBrand: React.FC<SiteBrandProps> = ({ link }) => {
  return (
    <div className="site-brand">
      {link ? (
        <a href={link} className="site-brand__link">
          <Logo />
        </a>
      ) : (
        <Logo />
      )}
    </div>
  );
};

export default SiteBrand;
