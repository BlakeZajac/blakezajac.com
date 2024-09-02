import { defineField, defineType } from "sanity";

export const readingListType = defineType({
    name: "readingList",
    title: "Reading List (Year)",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Year",
            type: "string",
            validation: (Rule) => Rule.required().regex(/^\d{4}$/, { name: "year", invert: false }),
        }),

        defineField({
            name: "books",
            title: "Books",
            type: "array",
            of: [{ type: "book" }],
        }),
    ],
});
