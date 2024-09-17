"use client";

import { Work } from "@/types/work";

import RevealImage from "../block-reveal-image/RevealImage";

interface PostHeroProps extends Pick<Work, "title" | "featuredImage"> {}

const PostHero: React.FC<PostHeroProps> = ({ title, featuredImage }) => {
    return <RevealImage image={featuredImage} imageAlt={title} isRounded={false}></RevealImage>;
};

export default PostHero;
