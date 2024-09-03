"use client";

import { Work } from "@/types/work";
import { ReadingList } from "@/types/reading-list";

import { useReadingList } from "@/hooks/use-reading-list";
import { useWork } from "@/hooks/use-work";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

const ApiPage = () => {
    const work: Work[] = useWork();
    const readingList: ReadingList[] = useReadingList();

    return (
        <Section>
            <Container>
                <pre>{JSON.stringify(work, null, 2)}</pre>
                <pre>{JSON.stringify(readingList, null, 2)}</pre>
            </Container>
        </Section>
    );
};

export default ApiPage;
