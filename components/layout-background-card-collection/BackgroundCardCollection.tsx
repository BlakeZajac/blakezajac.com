import BackgroundCard, { BackgroundCardProps } from "../block-background-card/BackgroundCard";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";

interface BackgroundCardCollectionProps {
    title?: string;
    items: BackgroundCardProps[];
}

const BackgroundCardCollection: React.FC<BackgroundCardCollectionProps> = ({ title, items }) => {
    return (
        <Section>
            <Container>
                {items.map((item, index) => (
                    <BackgroundCard key={index} {...item} />
                ))}
            </Container>
        </Section>
    );
};

export default BackgroundCardCollection;
