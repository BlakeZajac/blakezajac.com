import { type SchemaTypeDefinition } from "sanity";

// Schemas
import { bookType } from "@/sanity/schemas/book-schema";
import { journalType } from "@/sanity/schemas/journal-schema";
import { pageType } from "@/sanity/schemas/page-schema";
import { readingListType } from "@/sanity/schemas/reading-list-schema";
import { workType } from "@/sanity/schemas/work-schema";

// Blocks
import { backgroundCardCollection } from "@/sanity/schemas/blocks/background-card-collection";
import { featuredContent } from "@/sanity/schemas/blocks/featured-content";
import { featuredPosts } from "@/sanity/schemas/blocks/featured-posts";
import { fullwidthMedia } from "@/sanity/schemas/blocks/fullwidth-media";
import { hero } from "@/sanity/schemas/blocks/hero";
import { imageGallery } from "@/sanity/schemas/blocks/image-gallery";

const schemas = [bookType, journalType, pageType, readingListType, workType];
const blocks = [backgroundCardCollection, featuredContent, featuredPosts, fullwidthMedia, hero, imageGallery];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [...schemas, ...blocks],
};
