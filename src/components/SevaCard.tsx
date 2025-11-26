import React from 'react';
import styles from './SevaCard.module.css';
import ScrollReveal from './ScrollReveal';

interface SevaCardProps {
    title: string;
    subtitle?: string;
    quote?: string;
    description?: string; // Background
    activities?: string[];
    impact?: string[];
    imageSrc?: string; // Placeholder for now
    reverse?: boolean;
    id?: string;
}

const SevaCard: React.FC<SevaCardProps> = ({
    title,
    subtitle,
    quote,
    description,
    activities,
    impact,
    reverse = false,
    id,
}) => {
    return (
        <section id={id} className={`section-padding ${styles.sevaSection} ${reverse ? styles.reverse : ''}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
                    {quote && <blockquote className={styles.quote}>&quot;{quote}&quot;</blockquote>}

                    {description && (
                        <div className={styles.block}>
                            <h4 className={styles.heading}>Background</h4>
                            <p className={styles.text}>{description}</p>
                        </div>
                    )}

                    {activities && activities.length > 0 && (
                        <div className={styles.block}>
                            <h4 className={styles.heading}>Activities</h4>
                            <ul className={styles.list}>
                                {activities.map((activity, index) => (
                                    <ScrollReveal key={index} variant="slide-right" delay={`${index * 0.1}s`}>
                                        <li>{activity}</li>
                                    </ScrollReveal>
                                ))}
                            </ul>
                        </div>
                    )}

                    {impact && impact.length > 0 && (
                        <div className={styles.block}>
                            <h4 className={styles.heading}>Impact</h4>
                            <ul className={styles.list}>
                                {impact.map((item, index) => (
                                    <ScrollReveal key={index} variant="slide-left" delay={`${index * 0.1}s`}>
                                        <li>{item}</li>
                                    </ScrollReveal>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className={styles.imageWrapper}>
                    {/* Placeholder for image - using a gradient div for now */}
                    <div className={styles.imagePlaceholder}>
                        <span>{title} Image</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SevaCard;
