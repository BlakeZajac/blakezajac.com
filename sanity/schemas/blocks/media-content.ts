import { defineField, defineType } from "sanity";

export const mediaContent = defineType({
    name: "mediaContent",
    title: "Media Content",
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

        // defineField({
        //     name: "link",
        //     type: "link",
        // }),
    ],
});
