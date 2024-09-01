"use client";

import { useWork } from "@/hooks/use-work";
import { Work } from "@/types/work";

const ApiPage = () => {
    const work: Work[] = useWork();

    return (
        <div>
            <pre>{JSON.stringify(work, null, 2)}</pre>
        </div>
    );
};

export default ApiPage;
