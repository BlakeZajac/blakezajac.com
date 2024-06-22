import { defineField, defineType } from "sanity";

export const featuredPosts = defineType({
    name: "featuredPosts",
    title: "Featured Posts",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
    ],
});
