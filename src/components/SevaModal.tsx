import React, { useEffect } from 'react';
import styles from './SevaModal.module.css';

interface SevaModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        title: string;
        subtitle?: string;
        description?: string;
        activities?: string[];
        impact?: string[];
        quote?: string;
        image?: string;
    } | null;
}

const SevaModal: React.FC<SevaModalProps> = ({ isOpen, onClose, data }) => {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !data) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>

                <div className={styles.header}>
                    <h2 className={styles.title}>{data.title}</h2>
                    {data.subtitle && <h3 className={styles.subtitle}>{data.subtitle}</h3>}
                </div>

                <div className={styles.content}>
                    {data.image && (
                        <div className={styles.imageContainer}>
                            <img
                                src={data.image}
                                alt={data.title}
                                className={styles.modalImage}
                            />
                        </div>
                    )}

                    {data.quote && (
                        <div className={styles.section}>
                            <blockquote style={{
                                fontStyle: 'italic',
                                borderLeft: '4px solid var(--secondary-color)',
                                paddingLeft: '1rem',
                                color: 'var(--gray-800)'
                            }}>
                                &quot;{data.quote}&quot;
                            </blockquote>
                        </div>
                    )}

                    {data.description && (
                        <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>Background</h4>
                            <p className={styles.text}>{data.description}</p>
                        </div>
                    )}

                    {data.activities && data.activities.length > 0 && (
                        <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>Activities</h4>
                            <ul className={styles.list}>
                                {data.activities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {data.impact && data.impact.length > 0 && (
                        <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>Impact</h4>
                            <ul className={styles.list}>
                                {data.impact.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SevaModal;
