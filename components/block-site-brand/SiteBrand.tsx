import Image from "next/image";

import logo from "../../src/img/logo/logo.svg";
import logoWhite from "../../src/img/logo/logo-white.svg";

interface SiteBrandProps {
    link?: string;
}

const Logo = () => (
    <svg className="site-brand__logo" role="img" aria-label="Blake Zajac logo">
        <use xlinkHref="#svg-logo" />
    </svg>
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
