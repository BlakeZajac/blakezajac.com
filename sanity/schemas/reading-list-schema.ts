import { defineField, defineType } from "sanity";

export const readingListType = defineType({
    name: "readingList",
    title: "Reading List",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
        }),

        defineField({
            name: "years",
            title: "Years",
            type: "array",
            of: [{ type: "yearGroup" }],
        }),
    ],
});
