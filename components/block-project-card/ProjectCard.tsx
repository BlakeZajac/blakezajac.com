"use client";

import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface ProjectCardProps {
    className?: string;
    link: string;
    media: StaticImageData | string;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, link, media, title }) => {
    return (
        <div className={twMerge(`project-card`, className)}>
            <div className="project-card__media">
                <a href={link} className="project-card__link">
                    {media ? (
                        <Image src={media} alt="" className="project-card__image" width={1920} height={1080} />
                    ) : (
                        <div className="project-card__image"></div>
                    )}
                </a>
            </div>
            <div className="project-card__content">
                <div className="project-card__title">{title}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
