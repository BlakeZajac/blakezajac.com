import React from "react";
import { twMerge } from "tailwind-merge";

interface PopupProps {
    className?: string;
    content: string;
    highlightedContent?: string;
}

const Popup: React.FC<PopupProps> = ({
    className,
    content,
    highlightedContent,
}) => {
    return (
        <div className={twMerge(`popup`, className)}>
            <div className="popup__content">
                {content}
                {highlightedContent && (
                    <span className="popup__content--highlighted">
                        {highlightedContent}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Popup;
