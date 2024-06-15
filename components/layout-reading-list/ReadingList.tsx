"use client";

import React from "react";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";

interface Book {
    title: string;
    author: string;
    status?: string;
}

interface Year {
    year: number;
    books: Book[];
}

interface ReadingListProps {
    title?: string;
    years?: Year[];
}

const ReadingList: React.FC<ReadingListProps> = ({ title, years = [] }) => {
    return (
        <Section>
            <Container>
                <div className="reading-list">
                    {title && <h2>{title}</h2>}
                    {years.map((yearObj) => (
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
                                        <div className="reading-list__status">{book.status}</div>
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
