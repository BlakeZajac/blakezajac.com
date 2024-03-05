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
  return (
    <li className="primary-menu__item">
      <a href={href} className="primary-menu__link" itemProp="url">
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
