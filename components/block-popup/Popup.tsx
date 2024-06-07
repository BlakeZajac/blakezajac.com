"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface PopupProps {
    className?: string;
    triggerClass?: string;
    triggerLabel: string;
    content: string;
    highlightedContent?: string;
}

const Popup: React.FC<PopupProps> = ({
    className,
    triggerClass,
    triggerLabel,
    content,
    highlightedContent,
}) => {
    const [isActive, setIsActive] = useState(false);

    const togglePopup = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={twMerge(
                className,
                `popup ${isActive ? "popup--active" : ""}`
            )}
        >
            <button
                className={twMerge(triggerClass, "popup__trigger")}
                onClick={togglePopup}
            >
                {triggerLabel}
            </button>
            <div className="popup__content">
                {content}
                {highlightedContent && (
                    <>
                        {" "}
                        <span className="popup__content--highlighted">
                            {highlightedContent}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Popup;
