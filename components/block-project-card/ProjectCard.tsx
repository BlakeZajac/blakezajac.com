"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface ProjectCardProps {
  className?: string;
  link: string;
  media: string;
  mediaAlt: string;
  title: string;
  width: number;
  height: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  link,
  media,
  mediaAlt,
  title,
  width,
  height,
}) => {
  return (
    <div className={twMerge(`project-card`, className)}>
      <div className="project-card__overlay"></div>

      <div className="project-card__media">
        <a href={link} className="project-card__link">
          {media ? (
            <Image
              src={media}
              alt={mediaAlt}
              className="project-card__image"
              width={width}
              height={height}
            />
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
