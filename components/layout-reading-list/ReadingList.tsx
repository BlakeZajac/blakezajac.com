"use client";

import React from "react";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";

interface Book {
    title: string;
    author: string;
    completed?: boolean;
}

interface Year {
    year: number;
    books: Book[];
}

interface ReadingListProps {
    title?: string;
    data?: Year[];
}

const ReadingList: React.FC<ReadingListProps> = ({ title, data = [] }) => {
    const processedData = data.map((yearObj) => ({
        ...yearObj,
        books: yearObj.books.map((book) => ({
            ...book,
            completed: book.completed ?? false,
        })),
    }));

    return (
        <Section>
            <Container>
                <div className="reading-list">
                    {title && <h2 className="reading-list__title">{title}</h2>}
                    {data.map((yearObj) => (
                        <div key={yearObj.year} className="reading-list__group">
                            <div className="reading-list__unit reading-list__unit--year">
                                <h3>{yearObj.year}</h3>
                            </div>
                            <div className="reading-list__unit reading-list__unit--items">
                                {yearObj.books.map((book, index) => (
                                    <div key={index} className="reading-list__item">
                                        <div className="reading-list__content">
                                            <div className="reading-list__title">{book.title}</div>
                                            <div className="reading-list__author">
                                                {book.author}
                                            </div>
                                        </div>
                                        <div
                                            className={`reading-list__status ${
                                                book.completed
                                                    ? "reading-list__status--completed"
                                                    : "reading-list__status--in-progress"
                                            }`}
                                        >
                                            {book.completed ? "Completed" : "In progress"}
                                        </div>{" "}
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
