"use client";

import { useEffect, useState } from "react";

// @todo - Move menuItems array to Sanity CMS
const offcanvasMenuItems = [
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

interface OffcanvasMenuItemProps {
    label: string;
    href: string;
}

const OffcanvasMenuItem: React.FC<OffcanvasMenuItemProps> = ({ label, href }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const currentPath = window.location.pathname;
        setIsActive(currentPath === href);
    }, [href]);

    return (
        <li className="offcanvas-menu__item">
            <a href={href} className={`offcanvas-menu__link ${isActive ? "offcanvas-menu__link--active" : ""}`} itemProp="url">
                <span className="offcanvas-menu__label">{label}</span>
                <meta content={label} itemProp="name" />
            </a>
        </li>
    );
};

const OffcanvasMenu = () => {
    return (
        <nav className="offcanvas-menu">
            <ul itemType="http://schema.org/SiteNavigationElement" itemScope={true} className="offcanvas-menu__list">
                {offcanvasMenuItems.map((menuItem, index) => (
                    <OffcanvasMenuItem key={index} label={menuItem.label} href={menuItem.href} />
                ))}
            </ul>
        </nav>
    );
};

export default OffcanvasMenu;
