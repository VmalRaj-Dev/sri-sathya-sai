import React from 'react';
import styles from './SevaOrb.module.css';

interface SevaOrbProps {
    icon: string;
    title: string;
    angle: number;
    radius: number;
    onClick: () => void;
    onHover: () => void;
    image?: string;
    customStyle?: React.CSSProperties;
}

const SevaOrb: React.FC<SevaOrbProps> = ({ icon, title, angle, radius, onClick, onHover, image, customStyle }) => {
    // Calculate position
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
        <div
            className={styles.orbWrapper}
            style={customStyle || { transform: `translate(${x}px, ${y}px)` }}
        >
            <div
                className={styles.orbContent}
                onClick={onClick}
                onMouseEnter={onHover}
            >
                {image ? (
                    <img src={image} alt={title} className={styles.orbImage} />
                ) : (
                    <span className={styles.orbIcon}>{icon}</span>
                )}
                <div className={styles.orbLabel}>{title}</div>
            </div>
        </div>
    );
};

export default SevaOrb;
