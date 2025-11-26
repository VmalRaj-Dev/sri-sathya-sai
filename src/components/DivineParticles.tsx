import React, { useEffect, useState } from 'react';
import styles from './DivineParticles.module.css';

interface Particle {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    type: 'circle' | 'om' | 'lotus' | 'heart';
}

const DivineParticles: React.FC = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate static particles on mount to avoid hydration mismatch
        const newParticles = Array.from({ length: 40 }).map((_, i) => {
            const rand = Math.random();
            let type: Particle['type'] = 'circle';
            if (rand > 0.9) type = 'om';
            else if (rand > 0.8) type = 'lotus';
            else if (rand > 0.7) type = 'heart';

            return {
                id: i,
                left: Math.random() * 100, // %
                size: type === 'circle' ? Math.random() * 15 + 5 : Math.random() * 20 + 10, // px
                duration: Math.random() * 20 + 10, // s
                delay: Math.random() * 5, // s
                type
            };
        });

        // Wrap in timeout to avoid synchronous state update warning during render phase
        const timer = setTimeout(() => setParticles(newParticles), 0);
        return () => clearTimeout(timer);
    }, []);

    const getContent = (type: Particle['type']) => {
        switch (type) {
            case 'om': return '🕉️';
            case 'lotus': return '🪷';
            case 'heart': return '🤍';
            default: return null;
        }
    };

    return (
        <div className={styles.particlesContainer}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className={`${styles.particle} ${p.type === 'circle' ? styles.circle : styles.symbol}`}
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        fontSize: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        top: '100%', // Start from bottom
                    }}
                >
                    {getContent(p.type)}
                </div>
            ))}
        </div>
    );
};

export default DivineParticles;
