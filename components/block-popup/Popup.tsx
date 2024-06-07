"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { IoMdClose } from "react-icons/io";

interface PopupProps {
    className?: string;
    triggerLabel: string;
    content: string;
    highlightedContent?: string;
}

const Popup: React.FC<PopupProps> = ({ className, triggerLabel, content, highlightedContent }) => {
    const [isActive, setIsActive] = useState(false);

    const togglePopup = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isActive) {
                setIsActive(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isActive]);

    return (
        <div className={twMerge(className, `popup ${isActive ? "is-active" : ""}`)}>
            <button className={`${className}__trigger`} onClick={togglePopup}>
                {triggerLabel}
            </button>
            <div className="popup__content-wrapper">
                <div className="popup__content">
                    <button className="popup__close" onClick={togglePopup}>
                        <IoMdClose />
                    </button>
                    {content}
                    {highlightedContent && (
                        <>
                            <span> </span>
                            <span className="popup__content--highlighted">
                                {highlightedContent}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Popup;
