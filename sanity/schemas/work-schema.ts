import { defineField, defineType } from "sanity";

export const workType = defineType({
    name: "work",
    type: "document",

    fields: [
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
            name: "shortDescription",
            type: "string",
        }),

        defineField({
            name: "shortDescriptionAlt",
            type: "string",
        }),

        defineField({
            name: "liveLink",
            type: "url",
        }),

        defineField({
            name: "featuredImage",
            title: "Featured Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    type: "string",
                },
            ],
        }),

        defineField({
            name: "role",
            type: "array",
            of: [{ type: "string" }],
        }),

        defineField({
            name: "technology",
            type: "array",
            of: [{ type: "string" }],
        }),

        defineField({
            name: "overviewTitle",
            type: "string",
        }),

        defineField({
            name: "overviewDescription",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});
