"use client";

import { StaticImageData } from "next/image";

export interface FeaturedProjectProps {
    media: StaticImageData | string;
    title: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ media, title }) => {
    return <div>FeaturedProject</div>;
};

export default FeaturedProject;
