import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface IconTextProps {
    className?: string;
    icon: StaticImageData | string;
    title: string;
    description: string;
    link?: string;
    linkTitle?: string;
}

const IconText: React.FC<IconTextProps> = ({
    className,
    icon,
    title,
    description,
    link,
    linkTitle,
}) => {
    return (
        <div className={twMerge(`icon-text ${link ? "icon-text--has-link" : ""}`, className)}>
            <div className="icon-text__header">
                <Image className="icon-text__icon" src={icon} alt="" />
            </div>
            <div className="icon-text__body">
                <h3 className="icon-text__title">{title}</h3>
                <div className="icon-text__descripton">{description}</div>
            </div>
            {link && (
                <div className="icon-text__footer">
                    <a className="icon-text__link underlink underlink--reverse" href={link}>
                        {linkTitle}
                    </a>
                </div>
            )}
        </div>
    );
};

export default IconText;
