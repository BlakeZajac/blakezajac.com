import { PortableTextBlock } from "next-sanity";

export type Journal = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  cardImage: {
    url: string;
    alt: string;
  };
  featuredImage: {
    url: string;
    alt: string;
  };
  excerpt: string;
  content: PortableTextBlock[];
};
