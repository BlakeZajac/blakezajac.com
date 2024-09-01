interface StatusProps {
    status: "Complete" | "In Progress" | "Incomplete" | "";
}

const Status: React.FC<StatusProps> = ({ status }) => {
    const getStatusClass = (status: string) => {
        switch (status) {
            case "Complete":
                return "status--success";
            case "In Progress":
                return "status--alert";
            case "Incomplete":
                return "status--error";
            default:
                return "status--alert";
        }
    };

    const displayStatus = status || "In Progress";

    return <div className={`status ${getStatusClass(status)}`}>{status}</div>;
};

export default Status;
