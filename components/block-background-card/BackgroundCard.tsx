"use client";

import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

/** @todo The following logic needs to be set up
 *
 * A project card will render a orange badge
 * A news card will render a yellow badge
 * A custom label will render a glass badge
 */

export interface BackgroundCardProps {
    className?: string;
    type: "project" | "post" | "custom";
    media: StaticImageData | string;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({ className }) => {
    return <div className={(twMerge(`background-card`), className)}>BackgroundCard</div>;
};

export default BackgroundCard;
