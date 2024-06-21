"use client";

import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface ProjectCardProps {
    className?: string;
    media: StaticImageData | string;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, media, title }) => {
    return (
        <div className={twMerge(`project-card`, className)}>
            <div className="project-card__media">
                <Image src={media} alt="" />
                <div className="project-card__title">{title}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
