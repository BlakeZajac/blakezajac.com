import Image from "next/image";

import { Work } from "@/types/work";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

interface PostHeroProps extends Pick<Work, "title" | "shortDescription" | "shortDescriptionAlt" | "liveLink" | "featuredImage"> {}

const PostHero: React.FC<PostHeroProps> = ({ title, shortDescription, shortDescriptionAlt, liveLink, featuredImage }) => {
    if (!title) {
        return;
    }

    const liveLinkUrl = liveLink.link ? liveLink.link : false;
    const liveLinkTitle = liveLink.title ? liveLink.title : false;
    const liveLinkTarget = liveLink.openInNewTab ? "_blank" : "_self";

    const hasAltDescriptionOrFeaturedImage = shortDescriptionAlt?.length || featuredImage?.length;

    return (
        <Section>
            <Container>
                <div className="post-hero">
                    <div className="post-hero__unit post-hero__unit--01">
                        <div className="post-hero__accessory">Accessory</div>
                        <h1 className="post-hero__title">{title}</h1>
                        {shortDescription && <div className="post-hero__description">{shortDescription}</div>}

                        {liveLinkUrl && (
                            <a href={liveLinkUrl} target={liveLinkTarget} className="post-hero-link">
                                <span className="post-hero-link__title">View live: {liveLinkTitle}</span>
                            </a>
                        )}
                    </div>

                    {hasAltDescriptionOrFeaturedImage && (
                        <div className="post-hero__unit post-hero__unit--02">
                            <div className="post-hero__alt-description">{shortDescriptionAlt}</div>

                            {featuredImage && <Image src={featuredImage} alt={title} className="post-hero__featured-image" />}
                        </div>
                    )}
                </div>
            </Container>
            {featuredImage && <Image src={featuredImage} alt={title} className="post-hero__background" />}
        </Section>
    );
};

export default PostHero;