import { defineField, defineType } from "sanity";

export const iconGrid = defineType({
    name: "iconGrid",
    title: "Icon Grid",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),

        defineField({
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        }),

        defineField({
            name: "numColumns",
            type: "string",
            options: {
                list: ["two", "three", "four"],
            },
        }),

        defineField({
            name: "items",
            type: "array",
            of: [
                defineField({
                    name: "item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "icon",
                            type: "image",
                        }),

                        defineField({
                            name: "title",
                            type: "string",
                        }),

                        defineField({
                            name: "description",
                            type: "array",
                            of: [{ type: "block" }],
                        }),
                    ],
                }),
            ],
        }),
    ],
});
