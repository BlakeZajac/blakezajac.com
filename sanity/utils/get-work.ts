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
            _id,
            _createdAt,
            _updatedAt,
            title,
            "slug": slug.current,
            shortDescription,
            shortDescriptionAlt,
            liveLink,
            "featuredImage": featuredImage.asset->url,
            role[],
            technology[],
            overviewTitle,
            overviewDescription
        }`
    );
}

export async function getWorkItem(slug: string): Promise<Work> {
    const result = await client.fetch(
        groq`*[_type == "work" && slug.current == $slug] {
            _id,
            _createdAt,
            _updatedAt,
            title,
            "slug": slug.current,
            shortDescription,
            shortDescriptionAlt,
            liveLink,
            "featuredImage": featuredImage.asset->url,
            role[],
            technology[],
            overviewTitle,
            overviewDescription
        }`,
        { slug }
    );

    return result[0];
}
