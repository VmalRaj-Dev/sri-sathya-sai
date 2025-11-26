"use client";

import React from 'react';
import styles from './MissionSection.module.css';
import MissionCard from './MissionCard';
import ScrollReveal from './ScrollReveal';

const MissionSection = () => {
    const missionData = [
        {
            icon: "/love_icon.png",
            title: "Divine Love",
            description: "Spreading unconditional love and compassion to all beings, recognizing the divine spark in every soul."
        },
        {
            icon: "/service_icon.png",
            title: "Selfless Service",
            description: "Serving humanity without expectation, transforming lives through acts of kindness and dedication."
        },
        {
            icon: "/compassion_icon.png",
            title: "Universal Unity",
            description: "Fostering harmony and oneness among all people, transcending boundaries of religion, caste, and creed."
        }
    ];

    return (
        <section className={styles.missionSection}>
            <div className={styles.backgroundPattern} />

            <div className="container">
                <ScrollReveal variant="fade-up">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <span className="text-gold-gradient">Our Mission & Vision</span>
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Guided by divine principles, we strive to create a world filled with love, peace, and service
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.cardsGrid}>
                    {missionData.map((item, index) => (
                        <ScrollReveal key={index} variant="scale-up" delay={`${0.2 + index * 0.1}s`}>
                            <MissionCard
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                delay={`${index * 0.1}s`}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal variant="fade-up" delay="0.6s">
                    <div className={styles.visionStatement}>
                        <div className={styles.visionContent}>
                            <div className={styles.omSymbol}>ॐ</div>
                            <h3 className={styles.visionTitle}>Our Vision</h3>
                            <p className={styles.visionText}>
                                To create a society where every individual experiences the joy of selfless service,
                                where love transcends all barriers, and where the divine light of compassion
                                illuminates every heart. Through our collective efforts, we aspire to manifest
                                heaven on earth, one act of kindness at a time.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default MissionSection;
