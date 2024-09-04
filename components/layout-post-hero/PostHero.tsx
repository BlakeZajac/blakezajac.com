import Image from "next/image";

import { Work } from "@/types/work";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

import iconStar from "@/src/img/icon/icon-star.svg";

interface PostHeroProps extends Pick<Work, "title" | "shortDescription" | "shortDescriptionAlt" | "liveLink" | "featuredImage"> {}

const PostHero: React.FC<PostHeroProps> = ({ title, shortDescription, shortDescriptionAlt, liveLink, featuredImage }) => {
    if (!title) {
        return;
    }

    const hasAltDescriptionOrFeaturedImage = shortDescriptionAlt?.length || featuredImage?.length;

    return (
        <Section className="post-hero">
            <Container>
                <div className="post-hero-content">
                    <div className="post-hero-content__unit post-hero-content__unit--01">
                        <Image src={iconStar} alt="" className="post-hero-content__accessory" />

                        <h1 className="post-hero-content__title">{title}</h1>

                        {shortDescription && <div className="post-hero-content__description">{shortDescription}</div>}

                        {liveLink?.link && (
                            <a href={liveLink?.link} target={liveLink?.openInNewTab ? "_blank" : "_self"} className="post-hero-link">
                                <span className="post-hero-link__title">{liveLink?.title ? `View live: ${liveLink.title}` : "View live"}</span>
                            </a>
                        )}
                    </div>

                    {hasAltDescriptionOrFeaturedImage && (
                        <div className="post-hero-content__unit post-hero-content__unit--02">
                            <div className="post-hero-content__alt-description">{shortDescriptionAlt}</div>

                            {featuredImage && <Image src={featuredImage} alt={title} className="post-hero-content__featured-image" />}
                        </div>
                    )}
                </div>
            </Container>
            {featuredImage && <Image src={featuredImage} alt={title} className="post-hero__background" />}
        </Section>
    );
};

export default PostHero;
