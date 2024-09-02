import { useState, useEffect } from "react";

import { getReadingList } from "@/sanity/utils/get-reading-list";
import { ReadingList } from "@/types/reading-list";

export function useReadingList() {
    const [readingList, setReadingList] = useState<ReadingList[]>([]);

    useEffect(() => {
        async function fetchReadingList() {
            const readingListData = await getReadingList();

            console.log("Fetched reading list:", readingListData);
            setReadingList(readingListData);
        }

        fetchReadingList();
    }, []);

    return readingList;
}
