import React from "react";
import { StaticImageData } from "next/image";

interface IconGridItem {
    icon?: StaticImageData | string;
    title?: string;
    description?: string;
    link?: string;
}

interface IconGridProps {
    title?: string;
    description?: string;
    columns: 2 | 3 | 4;
    items: IconGridItem[];
}

const IconGrid: React.FC<IconGridProps> = ({ title, description, columns, items }) => {
    return <div>IconGrid</div>;
};

export default IconGrid;
