import React from 'react';
import styles from './SevaPreviewCard.module.css';

interface SevaPreviewCardProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode; // Emoji or SVG component
    onClick: () => void;
    delay?: string;
}

const SevaPreviewCard: React.FC<SevaPreviewCardProps> = ({ title, subtitle, icon, onClick, delay = '0s' }) => {
    return (
        <div
            className={styles.card}
            onClick={onClick}
            style={{ animationDelay: delay }}
        >
            <div className={styles.iconWrapper}>
                {icon || "🕉️"}
            </div>
            <h3 className={styles.title}>{title}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.action}>View Details &rarr;</div>
        </div>
    );
};

export default SevaPreviewCard;
