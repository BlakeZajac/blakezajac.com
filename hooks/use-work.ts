import { useState, useEffect } from "react";

import { getWork } from "@/sanity/utils/get-work";
import { Work } from "@/types/work";

export function useWork() {
    const [work, setWork] = useState<Work[]>([]);

    useEffect(() => {
        async function fetchWork() {
            const workData = await getWork();

            console.log("Fetched work data:", JSON.stringify(workData, null, 2));
            setWork(workData);
        }

        fetchWork();
    }, []);

    return work;
}
