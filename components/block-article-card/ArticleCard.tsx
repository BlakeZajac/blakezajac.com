import Image from "next/image";

import { Journal } from "@/types/journal";
import { getCardImage, getCardImageAlt } from "@/hooks/get-card-image";

interface ArticleCardProps {
  item: Journal;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ item }) => {
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
