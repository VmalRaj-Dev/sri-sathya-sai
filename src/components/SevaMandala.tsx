import React, { useState } from 'react';
import styles from './SevaMandala.module.css';
import SevaOrb from './SevaOrb';
import StackedCards from './StackedCards'; // Mobile View

export interface SevaItem {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    image?: string;
    description?: string;
    activities?: string[];
    impact?: string[];
    quote?: string;
    [key: string]: any;
}

interface SevaMandalaProps {
    items: SevaItem[];
    onSelect: (item: SevaItem) => void;
}

const SevaMandala: React.FC<SevaMandalaProps> = ({ items, onSelect }) => {
    const [activeItem, setActiveItem] = useState<SevaItem | null>(null);

    // Radius of the orbit
    const radius = 280;
    const center = 300; // Center of the 600x600 SVG/Container

    return (
        <>
            {/* Desktop Rotating Mandala View */}
            <div className={styles.mandalaContainer}>
                <div className={styles.orbitSystem}>

                    {/* Threads of Love SVG Layer */}
                    <svg className={styles.threadsContainer} width="600" height="600" viewBox="0 0 600 600">
                        {items.map((_, index) => {
                            const angle = (360 / items.length) * index;
                            const radian = (angle * Math.PI) / 180;
                            const x = center + Math.cos(radian) * radius;
                            const y = center + Math.sin(radian) * radius;

                            return (
                                <line
                                    key={`thread-${index}`}
                                    x1={center}
                                    y1={center}
                                    x2={x}
                                    y2={y}
                                    className={styles.threadLine}
                                />
                            );
                        })}
                    </svg>

                    {/* Rotating Orbs */}
                    {items.map((item, index) => {
                        const angle = (360 / items.length) * index;
                        return (
                            <SevaOrb
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                image={item.image}
                                angle={angle}
                                radius={radius}
                                onClick={() => onSelect(item)}
                                onHover={() => setActiveItem(item)}
                            />
                        );
                    })}
                </div>

                {/* Center Core (Heart) */}
                <div className={styles.centerCore}>
                    {activeItem ? (
                        <>
                            <h3 className={styles.coreTitle}>{activeItem.title}</h3>
                            <p className={styles.coreSubtitle}>{activeItem.subtitle}</p>
                        </>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span className={styles.omSymbol}>🕉️</span>
                            <span className={styles.coreText}>SERVE WITH LOVE</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Stack View */}
            <div className={styles.mobileStack}>
                <StackedCards items={items} onSelect={onSelect} />
            </div>
        </>
    );
};

export default SevaMandala;
