import { createClient, groq } from "next-sanity";
import { Journal } from "@/types/journal";

import { apiVersion, dataset, projectId } from "../env";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
});

export async function getJournal(): Promise<Journal[]> {
  return client.fetch(
    groq`*[_type == 'journal'] {
            _id,
            _createdAt,
            _updatedAt,
            title,
            "slug": slug.current,
            "cardImage": {
                "url": cardImage.asset->url,
                "alt": cardImage.alt
            },
            "featuredImage": {
                "url": featuredImage.asset->url,
                "alt": featuredImage.alt
            },
            excerpt,
            content,
        }`
  );
}

export async function getJournalItem(slug: string): Promise<Journal> {
  const result = await client.fetch(
    groq`*[_type == "journal" && slug.current == $slug] {
            _id,
            _createdAt,
            _updatedAt,
            title,
            "slug": slug.current,
            "featuredImage": {
                "url": featuredImage.asset->url,
                "alt": featuredImage.alt
            },            excerpt,
            content,
        }`,
    { slug }
  );

  return result[0];
}
