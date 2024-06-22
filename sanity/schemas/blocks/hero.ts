import { defineField, defineType } from "sanity";

export const hero = defineType({
    name: "hero",
    type: "object",
    fields: [
        defineField({
            name: "theme",
            type: "string",
            options: {
                list: [
                    { title: "Default", value: "default" },
                    { title: "Orange", value: "orange" },
                    { title: "Light Orange", value: "lightOrange" },
                    { title: "Yellow", value: "yellow" },
                    { title: "Light Yellow", value: "lightYellow" },
                ],
            },
        }),
        defineField({
            name: "heading",
            type: "string",
        }),
        defineField({
            name: "content",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});
