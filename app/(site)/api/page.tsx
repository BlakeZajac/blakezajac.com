"use client";

import { Work } from "@/types/work";
import { ReadingList } from "@/types/reading-list";

import { useReadingList } from "@/hooks/use-reading-list";
import { useWork } from "@/hooks/use-work";

const ApiPage = () => {
    const work: Work[] = useWork();
    const readingList: ReadingList[] = useReadingList();

    return (
        <div>
            <pre>{JSON.stringify(work, null, 2)}</pre>
            <pre>{JSON.stringify(readingList, null, 2)}</pre>
        </div>
    );
};

export default ApiPage;
