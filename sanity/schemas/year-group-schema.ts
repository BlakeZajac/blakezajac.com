import { defineField, defineType } from "sanity";

export const yearGroupType = defineType({
    name: "yearGroup",
    title: "Year Group",
    type: "object",

    fields: [
        defineField({
            name: "year",
            title: "Year",
            type: "number",
            validation: (Rule) => Rule.required().min(1000).max(9999),
        }),

        defineField({
            name: "books",
            title: "Books",
            type: "array",
            of: [{ type: "book" }],
        }),
    ],
});
