import React from 'react';
import styles from './WisdomCard.module.css';

interface WisdomCardProps {
    quote: string;
    author?: string;
    category?: string;
}

const WisdomCard: React.FC<WisdomCardProps> = ({ quote, author = "Sri Sathya Sai Baba", category }) => {
    return (
        <div className={styles.wisdomCard}>
            <div className={styles.gradientOverlay} />
            <div className={styles.content}>
                {category && (
                    <div className={styles.category}>{category}</div>
                )}
                <div className={styles.quoteSymbolTop}>&quot;</div>
                <p className={styles.quote}>{quote}</p>
                <div className={styles.quoteSymbolBottom}>&quot;</div>
                <p className={styles.author}>— {author}</p>
            </div>
        </div>
    );
};

export default WisdomCard;
