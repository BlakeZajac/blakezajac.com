import Image, { StaticImageData } from "next/image";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";
import Button from "../block-button/Button";
import Statistic from "../block-statistic/Statistic";

interface FeaturedContentProps {
  mediaPosition?: "left" | "right";
  title?: string;
  content01?: string;
  content02?: string;
  buttonHref?: string;
  buttonLabel?: string;
  statisticNumber01?: string;
  statisticNumberSuffix01?: string;
  statisticContent01?: string;
  statisticNumber02?: string;
  statisticNumberSuffix02?: string;
  statisticContent02?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({
  mediaPosition,
  title,
  content01,
  content02,
  buttonHref,
  buttonLabel,
  statisticNumber01,
  statisticNumberSuffix01,
  statisticContent01,
  statisticNumber02,
  statisticNumberSuffix02,
  statisticContent02,
  image,
  imageAlt = "",
}) => {
  const componentClass = `${
    mediaPosition === "right"
      ? "featured-content--media-right"
      : "featured-content--media-left"
  }`;

  return (
    <Section className={`featured-content ${componentClass}`}>
      <Container className="featured-content__container">
        {title ? <h2 className="featured-content__title">{title}</h2> : ""}
        <div className="featured-content__grid l-grid">
          <div className="featured-content__cell featured-content__cell--content l-grid__cell l-grid__cell--50-at-lg l-grid__cell--25-at-2xl">
            <div className="featured-content__unit featured-content__unit--copy copy">
              {content01 || content02 ? (
                <>
                  {content01 ? <p>{content01}</p> : ""}
                  {content02 ? <p>{content02}</p> : ""}
                </>
              ) : (
                ""
              )}
              {buttonHref ? (
                <Button buttonHref={buttonHref} buttonLabel={buttonLabel} />
              ) : (
                ""
              )}
            </div>
            <div className="featured-content__unit featured-content__unit--statistics">
              {statisticNumber01 ? (
                <Statistic
                  number={statisticNumber01}
                  numberSuffix={statisticNumberSuffix01}
                  content={statisticContent01}
                />
              ) : (
                ""
              )}
              {statisticNumber02 ? (
                <Statistic
                  number={statisticNumber02}
                  numberSuffix={statisticNumberSuffix02}
                  content={statisticContent02}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="featured-content__cell featured-content__cell--content l-grid__cell l-grid__cell--50-at-lg l-grid__cell--75-at-2xl">
            {image ? (
              <Image
                src={image}
                alt={imageAlt}
                className="featured-content__media u-rounded"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedContent;
