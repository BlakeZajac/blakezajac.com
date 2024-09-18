import { Journal } from "@/types/journal";
import { useJournal } from "@/hooks/use-journal";

import Hero from "@/components/layout-hero/Hero";

const JournalArchive = () => {
    const journal: Journal[] = useJournal();

    return (
        <>
            <Hero title="Journal" description01="Self improvement, reflections, programming, design, and more." />

            {/* <pre>{JSON.stringify(journal, null, 2)}</pre> */}
        </>
    );
};

export default JournalArchive;
