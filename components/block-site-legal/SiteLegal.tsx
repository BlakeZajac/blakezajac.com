import Image from "next/image";

import Acknowledgement from "../layout-acknowledgement/Acknowledgement";
import logo from "../../src/img/logo/logo.svg";

const SiteLegal = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-legal">
      <div className="site-legal__unit site-legal__unit--logo">
        <Image src={logo} alt="Blake Zajac logo" className="site-legal__logo" />
      </div>
      <div className="site-legal__unit site-legal__unit--copyright">
        © {currentYear} Blake Zajac
      </div>
      <div className="site-legal__unit site-legal__unit--acknowledgement">
        <Acknowledgement />
      </div>
    </div>
  );
};

export default SiteLegal;
