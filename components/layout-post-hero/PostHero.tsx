import { Work } from "@/types/work";

import { twMerge } from "tailwind-merge";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

interface PostHeroProps extends Pick<Work, "title" | "shortDescription" | "shortDescriptionAlt" | "liveLink" | "featuredImage"> {
    className?: string;
}

const PostHero: React.FC<PostHeroProps> = ({ className, title, shortDescription, shortDescriptionAlt, liveLink, featuredImage }) => {
    const linkUrl = liveLink.link ? liveLink.link : false;
    const linkTitle = liveLink.title ? liveLink.title : false;
    const linkTarget = liveLink.openInNewTab ? "_blank" : "_self";

    return (
        <Section>
            <Container>
                <div className={`post-hero ${twMerge(className)}`}>
                    <div className="post-hero__unit post-hero__unit--01">
                        <div className="post-hero__accessory">Accessory</div>
                        <h1 className="post-hero__title">{title}</h1>
                        {shortDescription && <div className="post-hero__description">{shortDescription}</div>}
                        {linkUrl && (
                            <a href={linkUrl} target={linkTarget} className="post-hero-link">
                                <span className="post-hero-link__title">View live: {linkTitle}</span>
                            </a>
                        )}
                    </div>

                    {shortDescriptionAlt && (
                        <div className="post-hero__unit post-hero__unit--02">
                            <div className="post-hero__alt-description">{shortDescriptionAlt}</div>
                            {featuredImage && <div className="post-hero__featured-image"></div>}
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default PostHero;
