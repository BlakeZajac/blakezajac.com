import { type SchemaTypeDefinition } from "sanity";

// Schemas
import { pageType } from "@/sanity/schemas/page-schema";
import { workType } from "@/sanity/schemas/work-schema";

// Blocks'
import { backgroundCardCollection } from "@/sanity/schemas/blocks/background-card-collection";
import { featuredPosts } from "@/sanity/schemas/blocks/featured-posts";
import { hero } from "@/sanity/schemas/blocks/hero";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pageType, workType, backgroundCardCollection, featuredPosts, hero],
};
