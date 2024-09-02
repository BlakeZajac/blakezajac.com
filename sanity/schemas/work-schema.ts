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
            name: "content",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});
