"use client";

import { useState } from "react";

const SiteOffcanvasTrigger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`site-offcanvas-trigger ${
        isActive ? "site-offcanvas-trigger--is-active" : ""
      }`}
      onClick={toggleActive}
    >
      <span className="site-offcanvas-trigger__icon"></span>
      <span className="site-offcanvas-trigger__label u-visually-hidden">
        Menu
      </span>
    </button>
  );
};

export default SiteOffcanvasTrigger;
