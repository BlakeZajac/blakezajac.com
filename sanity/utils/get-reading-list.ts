import { createClient, groq } from "next-sanity";
import { ReadingList } from "@/types/reading-list";

import { apiVersion, dataset, projectId } from "../env";

const client = createClient({
    projectId,
    dataset,
    apiVersion,
});

export async function getReadingList(): Promise<ReadingList[]> {
    return client.fetch(
        groq`*[_type == 'readingList'] {
            _id,
            _createdAt,
            _updatedAt,
            title,
            books[]{
                title,
                author,
                status,
                image{
                    asset->{
                        url,
                        metadata
                    }
                },
                link
            }
        }`
    );
}
