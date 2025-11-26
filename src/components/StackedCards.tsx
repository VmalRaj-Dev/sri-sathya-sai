import React from 'react';
import styles from './StackedCards.module.css';
import { SevaItem } from './SevaMandala';

interface StackedCardsProps {
    items: SevaItem[];
    onSelect: (item: SevaItem) => void;
}

const StackedCards: React.FC<StackedCardsProps> = ({ items, onSelect }) => {
    return (
        <div className={styles.stackContainer}>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={styles.cardWrapper}
                    style={{ top: `${100 + index * 20}px` }} // Stacking offset
                    onClick={() => onSelect(item)}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.cardIcon}>{item.icon}</span>
                        <div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSubtitle}>{item.subtitle}</p>
                        </div>
                    </div>
                    {item.image && (
                        <img src={item.image} alt={item.title} className={styles.cardImage} />
                    )}
                    <button className={styles.cardAction}>View Details</button>
                </div>
            ))}
        </div>
    );
};

export default StackedCards;
