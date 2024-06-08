"use client";

import React, { useEffect, useState } from "react";

import { TfiArrowRight } from "react-icons/tfi";

interface WordToggleProps {
    href: string;
    title: string;
    secondaryTitle: Array<string> | string;
}

const WordToggle: React.FC<WordToggleProps> = ({ href, title, secondaryTitle }) => {
    const isAnimated = Array.isArray(secondaryTitle);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isAnimated) {
            const interval = setInterval(() => {
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % (secondaryTitle as string[]).length
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isAnimated, secondaryTitle]);

    return (
        <div className={`word-toggle ${isAnimated ? "word-toggle--is-animated" : ""}`}>
            <a href={href} className="word-toggle__link"></a>
            <div className="word-toggle__unit word-toggle__unit--primary">
                <div className="word-toggle__title">{title}</div>
                <TfiArrowRight
                    className="word-toggle__icon"
                    role="presentation"
                    focusable="false"
                />
            </div>
            <div className="word-toggle__unit word-toggle__unit--secondary">
                {isAnimated ? (
                    <div className="word-toggle-ticker">
                        {secondaryTitle.map((title, index) => (
                            <div
                                key={index}
                                className={`word-toggle-ticker__item ${
                                    index === currentIndex ? "is-active" : ""
                                }`}
                            >
                                {title}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="word-toggle__title">{secondaryTitle}</div>
                )}
            </div>
        </div>
    );
};

export default WordToggle;
