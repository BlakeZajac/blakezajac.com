import { defineField, defineType } from "sanity";

export const imageGallery = defineType({
    name: "imageGallery",
    title: "Image Gallery",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),

        defineField({
            name: "images",
            type: "array",
            of: [{ type: "image" }],
        }),
    ],
});
