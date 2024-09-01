import { twMerge } from "tailwind-merge";

interface StatusProps {
    className?: string;
    title: string;
    tooltip?: string;
}

const Status: React.FC<StatusProps> = ({ className, title, tooltip }) => {
    return (
        <div className={`status ${twMerge(className)}`}>
            <div className="status__title">{title}</div>
            {tooltip && <div className="status__tooltip">{tooltip}</div>}
        </div>
    );
};

export default Status;
