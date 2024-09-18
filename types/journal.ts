import { PortableTextBlock } from "next-sanity";

export type Journal = {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    cardImage: string;
    featuredImage: string;
    excerpt: string;
    content: PortableTextBlock[];
};
