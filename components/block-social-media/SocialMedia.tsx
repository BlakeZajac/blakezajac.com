import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import separator from "../../src/img/icon/icon-star.svg";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/BlakeZajac",
    },
    {
        label: "Behance",
        href: "https://www.behance.net/BlakeZajac",
    },
    {
        label: "LinkedIn",
        href: "https://au.linkedin.com/in/blake-zajac",
    },
];

interface SocialMediaProps {
    className?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ className }) => {
    return (
        <div className={twMerge(className, `social-media`)}>
            {socials.map((social, index) => (
                <React.Fragment key={index}>
                    <a href={social.href} className="social-media__link underlink" target="_blank">
                        {social.label}
                    </a>
                    {index !== socials.length - 1 && (
                        <Image src={separator} alt="" className="social-media__separator" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default SocialMedia;
