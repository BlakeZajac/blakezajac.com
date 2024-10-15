import Image from "next/image";

import { Journal } from "@/types/journal";

interface ArticleCardProps {
  item: Journal;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ item }) => {
  const getCardImage = (item: Journal): string => {
    if (item.cardImage && "url" in item.cardImage && item.cardImage.url) {
      return item.cardImage.url as string;
    } else if (
      item.featuredImage &&
      "url" in item.featuredImage &&
      item.featuredImage.url
    ) {
      return item.featuredImage.url as string;
    }

    return "";
  };

  const getCardImageAlt = (item: Journal): string => {
    if (item.cardImage && "alt" in item.cardImage && item.cardImage.alt) {
      return item.cardImage.alt as string;
    } else if (
      item.featuredImage &&
      "alt" in item.featuredImage &&
      item.featuredImage.alt
    ) {
      return item.featuredImage.alt as string;
    }

    return "";
  };

  const cardImage = getCardImage(item);
  const cardImageAlt = getCardImageAlt(item);

  return (
    <div className="article-card">
      <div className="article-card__media">
        {cardImage && (
          <Image
            src={cardImage}
            alt={cardImageAlt}
            className="article-card__image"
            width={500}
            height={500}
          />
        )}
      </div>

      <div className="article-card__title">
        <a href={`/journal/${item.slug}`} className="article-card__link">
          {item.title}
        </a>
      </div>

      {item.excerpt && (
        <div className="article-card__excerpt">{item.excerpt}</div>
      )}
    </div>
  );
};

export default ArticleCard;
