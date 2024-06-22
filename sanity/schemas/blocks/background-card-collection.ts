import { defineField, defineType } from "sanity";

export const backgroundCardCollection = defineType({
    name: "backgroundCardCollection",
    title: "Background Card Collection",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
    ],
});
