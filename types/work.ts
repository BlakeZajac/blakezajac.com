import { PortableTextBlock } from "next-sanity";

export type Work = {
    __id: string;
    __createdAt: string;
    name: string;
    slug: string;
    featuredImage: string;
    content: PortableTextBlock[];
};
