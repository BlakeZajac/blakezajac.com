import { defineField, defineType } from "sanity";

export const fullwidthMedia = defineType({
    name: "fullwidthMedia",
    title: "Fullwidth Media",
    type: "object",
    fields: [
        defineField({
            name: "image",
            type: "image",
        }),
    ],
});
