import { PortableTextBlock } from "next-sanity";

export type Work = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  shortDescription: string;
  shortDescriptionAlt: string;
  liveLink: {
    title: string;
    link: string;
    openInNewTab: boolean;
  };
  cardImage: {
    url: string;
    alt: string;
  };
  featuredImage: {
    url: string;
    alt: string;
  };
  role: string[];
  technology: string[];
  overviewTitle: string;
  overviewDescription: PortableTextBlock[];
};
