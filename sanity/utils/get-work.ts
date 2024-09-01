import { createClient, groq } from "next-sanity";
import { Work } from "@/types/work";

import { apiVersion, dataset, projectId } from "../env";

const client = createClient({
    projectId,
    dataset,
    apiVersion,
});

export async function getWork(): Promise<Work[]> {
    return client.fetch(
        groq`*[_type == 'work'] {
            __id,
            __createdAt,
            __updatedAt,
            title,
            "slug": slug.current,
            "featuredImage": featuredImage.asset->url,
        }`
    );
}

export async function getWorkItem(slug: string): Promise<Work[]> {
    return client.fetch(
        groq`*[_type == "work" && slug.current == $slug[0]] {
            __id,
            __createdAt,
            __updatedAt,
            title,
            "slug": slug.current,
            "featuredImage": featuredImage.asset->url,
        }`,
        { slug }
    );
}
