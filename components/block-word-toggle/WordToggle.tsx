"use client";

import React from "react";

import { TfiArrowRight } from "react-icons/tfi";

interface WordToggleProps {
    href: string;
    title: string;
    secondaryTitle: Array<string> | string;
}

const WordToggle: React.FC<WordToggleProps> = ({ href, title, secondaryTitle }) => {
    const isAnimated = Array.isArray(secondaryTitle);

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
                            <div key={index} className="word-toggle-ticker__item">
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
