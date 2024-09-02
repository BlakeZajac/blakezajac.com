import { type SchemaTypeDefinition } from "sanity";

// Schemas
import { bookType } from "@/sanity/schemas/book-schema";
import { pageType } from "@/sanity/schemas/page-schema";
import { readingListType } from "@/sanity/schemas/reading-list-schema";
import { workType } from "@/sanity/schemas/work-schema";
import { yearGroupType } from "@/sanity/schemas/year-group-schema";

// Blocks'
import { backgroundCardCollection } from "@/sanity/schemas/blocks/background-card-collection";
import { featuredPosts } from "@/sanity/schemas/blocks/featured-posts";
import { hero } from "@/sanity/schemas/blocks/hero";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        bookType,
        pageType,
        readingListType,
        workType,
        yearGroupType,
        backgroundCardCollection,
        featuredPosts,
        hero,
    ],
};
