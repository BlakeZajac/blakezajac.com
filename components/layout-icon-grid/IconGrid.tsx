import React from "react";
import { StaticImageData } from "next/image";
import Section from "../layout-section/Section";
import Container from "../layout-container/Container";

interface IconGridItem {
    icon: StaticImageData | string;
    title: string;
    description: string;
    link?: string;
}

interface IconGridProps {
    title?: string;
    description?: string;
    columns: 2 | 3 | 4;
    items: IconGridItem[];
}

const IconGrid: React.FC<IconGridProps> = ({ title, description, columns, items }) => {
    const getCellClasses = (numColumns: 2 | 3 | 4): string => {
        const cellClasses: string[] = [];

        switch (numColumns) {
            case 4:
                cellClasses.push("l-grid__cell--25-at-xl");
            case 3:
                cellClasses.push("l-grid__cell--33-at-lg");
            default:
                cellClasses.push("l-grid__cell--50-at-md");
        }

        return cellClasses.reverse().join(" ");
    };

    const cellClass = getCellClasses(columns);

    return (
        <Section>
            <Container>
                <div className="icon-grid">
                    {title && <h2 className="icon-grid__title">{title}</h2>}
                    {description && <div className="icon-grid__content">{description}</div>}
                    <div className="l-grid">
                        {items.map((item, index) => (
                            <div key={index} className={`l-grid__cell ${cellClass}`}>
                                {/* @todo - Create IconText block */}
                                {/* <IconText icon={item.icon} title={item.title} description={item.description} link={item.link} /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default IconGrid;
