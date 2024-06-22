import { defineArrayMember, defineField, defineType } from "sanity";

import { hero } from "./blocks/hero";

export const pageType = defineType({
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        defineField({
            name: "hero",
            type: "hero",
        }),
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
        }),
        defineField({
            name: "pageBuilder",
            title: "Page Builder",
            type: "array",
            of: [
                defineArrayMember({
                    name: "backgroundCardCollection",
                    title: "Background Card Collection",
                    type: "backgroundCardCollection",
                }),
                defineArrayMember({
                    name: "featuredPosts",
                    title: "Featured Posts",
                    type: "featuredPosts",
                }),
            ],
        }),
    ],
});
