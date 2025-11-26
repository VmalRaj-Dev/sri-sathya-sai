import React from 'react';
import styles from './SevaGrid.module.css';

interface SevaGridProps {
    children: React.ReactNode;
}

const SevaGrid: React.FC<SevaGridProps> = ({ children }) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    );
};

export default SevaGrid;
