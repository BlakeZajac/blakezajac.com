import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
        }),
        defineField({
            name: "pageBuilder",
            title: "Page Builder",
            type: "array",
            of: [
                defineArrayMember({
                    name: "backgroundCardCollection",
                    title: "Background Card Collection",
                    type: "backgroundCardCollection",
                }),
                defineArrayMember({
                    name: "featuredPosts",
                    title: "Featured Posts",
                    type: "featuredPosts",
                }),
            ],
        }),
    ],
});
