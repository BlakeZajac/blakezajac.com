"use client";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";
import Status from "../block-status/Status";

interface Book {
    title: string;
    author: string;
    status: "Complete" | "In Progress" | "Incomplete" | "";
}

interface Year {
    year: number;
    books: Book[];
}

interface ReadingListProps {
    title?: string;
    data?: Year[];
}

// @todo - Add support for book image and link
// @todo - If an image and a link, show the image on hover and follow the mouse position for each item

const ReadingList: React.FC<ReadingListProps> = ({ title, data = [] }) => {
    return (
        <Section>
            <Container>
                <div className="reading-list">
                    {title && <h2 className="reading-list__section-title">{title}</h2>}
                    {data.map((yearObj) => (
                        <div key={yearObj.year} className="reading-list__group">
                            <div className="reading-list__unit reading-list__unit--year">
                                <h3 className="reading-list__year">{yearObj.year}</h3>
                            </div>
                            <div className="reading-list__unit reading-list__unit--items">
                                {yearObj.books.map((book, index) => (
                                    <div key={index} className="reading-list__item">
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
