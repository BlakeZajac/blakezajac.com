import { useState, useEffect } from "react";

import { getJournal } from "@/sanity/utils/get-journal";
import { Journal } from "@/types/journal";

export function useJournal() {
    const [journal, setJournal] = useState<Journal[]>([]);

    useEffect(() => {
        async function fetchJournal() {
            const journalData = await getJournal();

            console.log("Fetched journal data:", JSON.stringify(journalData, null, 2));
            setJournal(journalData);
        }

        fetchJournal();
    }, []);

    return journal;
}
