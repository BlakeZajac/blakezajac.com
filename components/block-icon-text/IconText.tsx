import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface IconTextProps {
    className?: string;
    icon?: StaticImageData | string;
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
        <div className={twMerge("icon-text", className)}>
            <div className="icon-text__header">
                {icon ? (
                    <Image className="icon-text__icon" src={icon} alt="" />
                ) : (
                    <div className="icon-text__icon"></div>
                )}
            </div>
            <div className="icon-text__body">
                <h3 className="icon-text__title">{title}</h3>
                <div className="icon-text__description">{description}</div>
            </div>
            {link && linkTitle && (
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
