import { twMerge } from "tailwind-merge";

interface StatisticProps {
    className?: string;
    number?: string;
    numberSuffix?: string;
    content?: string;
}

const Statistic: React.FC<StatisticProps> = ({ className, number, numberSuffix, content }) => {
    return (
        <div className={twMerge(className, `statistic`)}>
            <div className="statistic__grid l-grid l-grid--align-items_center">
                <div className="statistic__cell statistic__cell--number l-grid__cell l-grid__cell--50-at-sm">
                    <span className="statistic-title">{number}</span>
                    {numberSuffix && <span className="statistic-title statistic-title--suffix">{numberSuffix}</span>}
                </div>
                <div className="statistic__cell statistic__cell--content l-grid__cell l-grid__cell--50-at-sm">
                    <div className="statistic__content">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
