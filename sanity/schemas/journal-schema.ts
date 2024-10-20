import { defineField, defineType } from "sanity";

export const journalType = defineType({
  name: "journal",
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
      name: "excerpt",
      type: "text",
    }),

    defineField({
      name: "cardImage",
      type: "image",
      description:
        "Optional. Replaces the featured image on cards if one is set.",
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "featuredImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
