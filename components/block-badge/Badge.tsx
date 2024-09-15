interface BadgeProps {
    label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
    return (
        <div className="badge">
            <span className="badge__label">{label}</span>
        </div>
    );
};

export default Badge;
