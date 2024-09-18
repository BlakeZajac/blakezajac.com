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
            "cardImage": cardImage.asset->url,
            "featuredImage": featuredImage.asset->url,
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
            "featuredImage": featuredImage.asset->url,
            excerpt,
            content,
        }`,
        { slug }
    );

    return result[0];
}
