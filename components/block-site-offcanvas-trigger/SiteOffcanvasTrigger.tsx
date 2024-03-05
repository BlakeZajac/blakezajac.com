"use client";

import { useState, useEffect } from "react";

const SiteOffcanvasTrigger = () => {
  const [isActive, setIsActive] = useState(false);
  const activeClass = "site-offcanvas--active";

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add(activeClass);
    } else {
      document.body.classList.remove(activeClass);
    }
  }, [isActive]);

  return (
    <button
      className={`site-offcanvas-trigger ${isActive ? activeClass : ""}`}
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
