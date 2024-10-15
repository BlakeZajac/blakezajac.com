import Image from "next/image";

import { Journal } from "@/types/journal";

import Button from "@/components/block-button/Button";

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
          <Image src={cardImage} alt={cardImageAlt} width={500} height={500} />
        )}
      </div>

      <div className="article-card__title">{item.title}</div>

      {item.excerpt && (
        <div className="article-card__excerpt">{item.excerpt}</div>
      )}

      <Button
        buttonHref={`/journal/${item.slug}`}
        buttonLabel="Continue Reading"
      />
    </div>
  );
};

export default ArticleCard;
