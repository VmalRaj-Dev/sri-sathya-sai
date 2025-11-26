import React from 'react';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLast = false }) => {
    return (
        <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
                <div className={styles.yearCircle}>
                    <span className={styles.year}>{year}</span>
                </div>
                {!isLast && <div className={styles.connectingLine} />}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default TimelineItem;
