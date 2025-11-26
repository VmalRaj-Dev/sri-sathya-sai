import React, { useEffect, useState } from 'react';
import styles from './GoldenThread.module.css';

const GoldenThread: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(Math.min(Math.max(currentProgress, 0), 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.threadContainer}>
            <div className={styles.line}>
                <div
                    className={styles.progress}
                    style={{ height: `${progress}%` }}
                />
                <div
                    className={styles.endSymbol}
                    style={{ top: `${progress}%` }}
                >
                    🪷
                </div>
            </div>
        </div>
    );
};

export default GoldenThread;
