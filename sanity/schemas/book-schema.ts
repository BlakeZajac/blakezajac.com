import { defineField, defineType } from "sanity";

export const bookType = defineType({
    name: "book",
    title: "Book",
    type: "object",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "author",
            title: "Author",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Complete", value: "Complete" },
                    { title: "In Progress", value: "In Progress" },
                    { title: "Incomplete", value: "Incomplete" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                },
            ],
        }),

        defineField({
            name: "link",
            title: "Link",
            type: "url",
            validation: (Rule) =>
                Rule.uri({
                    scheme: ["http", "https"],
                }),
        }),
    ],
});
