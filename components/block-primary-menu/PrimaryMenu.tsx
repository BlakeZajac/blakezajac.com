"use client";

import { useState, useEffect } from "react";

// @todo - Move menuItems array to Sanity CMS
const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Expertise",
    href: "/expertise",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsActive(currentPath === href);
  }, [href]);

  return (
    <li className="primary-menu__item">
      <a
        href={href}
        className={`primary-menu__link ${
          isActive ? "primary-menu__link--active" : ""
        }`}
        itemProp="url"
      >
        <span className="primary-menu__label">{label}</span>
        <meta content={label} itemProp="name" />
      </a>
    </li>
  );
};

const PrimaryMenu = () => {
  return (
    <nav className="primary-menu">
      <ul
        itemType="http://schema.org/SiteNavigationElement"
        itemScope={true}
        className="primary-menu__list"
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} label={menuItem.label} href={menuItem.href} />
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryMenu;
