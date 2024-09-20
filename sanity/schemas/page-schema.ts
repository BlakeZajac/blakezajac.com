import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
    name: "page",
    title: "Pages",
    type: "document",

    fields: [
        defineField({
            name: "hero",
            type: "hero",
        }),

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
                    name: "featuredContent",
                    title: "Featured Content",
                    type: "featuredContent",
                }),

                defineArrayMember({
                    name: "featuredPosts",
                    title: "Featured Posts",
                    type: "featuredPosts",
                }),

                defineArrayMember({
                    name: "fullwidthMedia",
                    title: "Fullwidth Media",
                    type: "fullwidthMedia",
                }),

                defineArrayMember({
                    name: "iconGrid",
                    title: "Icon Grid",
                    type: "iconGrid",
                }),

                defineArrayMember({
                    name: "imageGallery",
                    title: "Image Gallery",
                    type: "imageGallery",
                }),

                defineArrayMember({
                    name: "mediaContent",
                    title: "Media Content",
                    type: "mediaContent",
                }),
            ],
        }),
    ],
});
