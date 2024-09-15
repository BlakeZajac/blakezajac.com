"use client";

import { ReadingList as ReadingListType } from "@/types/reading-list";
import { Book } from "@/types/book";

import { useReadingList } from "@/hooks/use-reading-list";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import Status from "@/components/block-status/Status";
import RevealText from "@/components/block-reveal-text/RevealText";

interface ReadingListProps {
    title?: string;
}

// @todo - Add support for book image and link
// @todo - If an image and a link, show the image on hover and follow the mouse position for each item

const ReadingList: React.FC<ReadingListProps> = ({ title }) => {
    const readingList: ReadingListType[] = useReadingList();

    // Filter out the reading list year with no books
    const filteredReadingList = readingList.filter((yearData) => yearData.books && yearData.books.length > 0);

    return (
        <Section>
            <Container>
                <div className="reading-list">
                    {title && <RevealText as="h2" className="reading-list__section-title reveal-text--spacing_sm-below-md" content={title} />}

                    {filteredReadingList.map((yearData: ReadingListType) => (
                        <div key={yearData._id} className="reading-list__group">
                            <div className="reading-list__unit reading-list__unit--year">
                                <h3 className="reading-list__year">{yearData.title}</h3>
                            </div>

                            <div className="reading-list__unit reading-list__unit--items">
                                {yearData.books &&
                                    yearData.books.map((book: Book) => (
                                        <div key={book._key} className="reading-list__item">
                                            <div className="reading-list__content">
                                                <h4 className="reading-list__title">{book.title}</h4>
                                                <h5 className="reading-list__author">{book.author}</h5>
                                                <Status status={book.status} />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ReadingList;
