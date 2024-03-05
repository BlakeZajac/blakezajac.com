import { twMerge } from "tailwind-merge";

interface StatisticProps {
  className?: string;
  number?: string;
  numberSuffix?: string;
  content?: string;
}

const Statistic: React.FC<StatisticProps> = ({
  className,
  number,
  numberSuffix,
  content,
}) => {
  return (
    <div className={twMerge(className, `statistic`)}>
      <div className="statistic__unit statistic__unit--number">
        <span className="statistic-title">{number}</span>
        {numberSuffix ? (
          <span className="statistic-title__suffix">{numberSuffix}</span>
        ) : (
          ""
        )}
      </div>
      <div className="statistic__unit statistic__unit--content">{content}</div>
    </div>
  );
};

export default Statistic;
