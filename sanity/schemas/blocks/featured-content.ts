import { defineField, defineType } from "sanity";

export const featuredContent = defineType({
    name: "featuredContent",
    title: "Featured Content",
    type: "object",
    fields: [
        defineField({
            name: "imagePosition",
            type: "string",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Right", value: "right" },
                ],
            },
        }),

        defineField({
            name: "image",
            type: "image",
        }),

        defineField({
            name: "heading",
            type: "string",
        }),

        defineField({
            name: "content",
            type: "array",
            of: [{ type: "block" }],
        }),

        defineField({
            name: "link",
            type: "link",
        }),

        defineField({
            name: "statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", type: "string" },
                        { name: "description", type: "string" },
                    ],
                },
            ],
        }),
    ],
});
