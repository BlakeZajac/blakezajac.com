"use client";

import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface ProjectCardProps {
    className?: string;
    media: StaticImageData | string;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, media, title }) => {
    return <div className={twMerge(`project-card`, className)}>ProjectCard</div>;
};

export default ProjectCard;
