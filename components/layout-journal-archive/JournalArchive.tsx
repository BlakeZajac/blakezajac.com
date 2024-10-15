import Image from "next/image";

import { Journal } from "@/types/journal";
import { useJournal } from "@/hooks/use-journal";

import Hero from "@/components/layout-hero/Hero";
import ArticleCardCollection from "@/components/layout-article-card-collection/ArticleCardCollection";

const JournalArchive = () => {
  const journal: Journal[] = useJournal();

  return (
    <>
      {/* <pre>{JSON.stringify(journal, null, 2)}</pre> */}

      <Hero
        title="Journal"
        description01="Reflections, programming, design, photography, and more."
      />

      <ArticleCardCollection items={journal} />
    </>
  );
};

export default JournalArchive;
