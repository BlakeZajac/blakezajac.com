import { defineField, defineType } from "sanity";

export const workType = defineType({
    name: "work",
    title: "Work",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
    ],
});
