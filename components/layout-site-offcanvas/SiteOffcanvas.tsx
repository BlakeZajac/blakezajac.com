"use client";

import { useState } from "react";

const SiteOffcanvas = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  return <div className="site-offcanvas">SiteOffcanvas</div>;
};

export default SiteOffcanvas;
