"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

import Button from "../block-button/Button";

export interface BackgroundCardProps {
    className?: string;
    type: "project" | "post" | "custom";
    media: StaticImageData | string;
    mediaAlt: string;
    badge?: string;
    date?: string;
    title: string;
    description: string;
    buttonHref: string;
    buttonLabel: string;
}

const getBadgeClass = (type: "project" | "post" | "custom") => {
    if (type === "project") return "badge--primary";
    if (type === "post") return "badge--secondary";
    if (type === "custom") return "badge--tertiary";
};

const BackgroundCard: React.FC<BackgroundCardProps> = ({
    className,
    type = "custom",
    media,
    mediaAlt = "",
    badge,
    date,
    title,
    description,
    buttonHref = "#",
    buttonLabel,
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { offsetWidth, offsetHeight } = target as HTMLDivElement;
        const x = offsetX / offsetWidth - 0.5;
        const y = offsetY / offsetHeight - 0.5;
        setMousePosition({ x, y });
    };

    return (
        <div className={twMerge("background-card", className)}>
            <div className="background-card__header" onMouseMove={handleMouseMove}>
                <a href={buttonHref} className="background-card__link"></a>
                <Image src={media} alt={mediaAlt} className="background-card__image" />
                <div className="background-card__badge-wrapper">
                    <div
                        className={`background-card__badge badge ${getBadgeClass(type)}`}
                        style={{
                            transform: `translate(${mousePosition.x * 24}px, ${
                                mousePosition.y * 24
                            }px)`,
                        }}
                    >
                        {badge}
                    </div>
                </div>
            </div>
            <div className="background-card__content">
                {date && <div className="background-card__date">{date}</div>}
                <div className="background-card__title">
                    {title}: <span className="background-card__description">{description}</span>
                </div>
            </div>
            <div className="background-card__actions">
                <Button buttonHref={buttonHref} buttonLabel={buttonLabel} />
            </div>
        </div>
    );
};

export default BackgroundCard;
