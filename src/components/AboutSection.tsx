"use client";

import React from 'react';
import styles from './AboutSection.module.css';
import TimelineItem from './TimelineItem';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
    const timelineData = [
        {
            year: "1926",
            title: "Divine Birth",
            description: "Sri Sathya Sai Baba was born in Puttaparthi, a small village in Andhra Pradesh, India."
        },
        {
            year: "1940",
            title: "Divine Declaration",
            description: "At the age of 14, He declared His divine mission to spread love, peace, and service to humanity."
        },
        {
            year: "1950s",
            title: "Global Movement",
            description: "The message of universal love and selfless service began spreading across the world."
        },
        {
            year: "2011",
            title: "Eternal Legacy",
            description: "Though He left His physical form, His teachings and mission continue to inspire millions worldwide."
        },
        {
            year: "Present",
            title: "Our Mission",
            description: "Sri Sathya Sai Maruthi Seva Charitable Trust carries forward His divine mission through selfless service."
        }
    ];

    return (
        <section className={styles.aboutSection}>
            <div className={styles.floatingLotus1} />
            <div className={styles.floatingLotus2} />
            <div className={styles.floatingLotus3} />

            <div className="container">
                <ScrollReveal variant="fade-up">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <span className="text-gold-gradient">The Divine Journey</span>
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            A legacy of love, compassion, and selfless service to humanity
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.contentGrid}>
                    <ScrollReveal variant="slide-right" delay="0.2s">
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/sai_baba_portrait.png"
                                    alt="Sri Sathya Sai Baba"
                                    className={styles.portraitImage}
                                />
                                <div className={styles.imageGlow} />
                            </div>
                            <div className={styles.quoteCard}>
                                <div className={styles.quoteSymbol}>&quot;</div>
                                <p className={styles.quoteText}>
                                    Love all, Serve all. Help ever, Hurt never.
                                </p>
                                <p className={styles.quoteAuthor}>- Sri Sathya Sai Baba</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slide-left" delay="0.3s">
                        <div className={styles.timelineContainer}>
                            {timelineData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    year={item.year}
                                    title={item.title}
                                    description={item.description}
                                    isLast={index === timelineData.length - 1}
                                />
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Our Journey Section */}
                <ScrollReveal variant="fade-up" delay="0.4s">
                    <div className={styles.journeySection}>
                        <h3 className={styles.journeyTitle}>
                            <span className="text-gold-gradient">Guided by Love & Service</span>
                        </h3>
                        <p className={styles.journeySubtitle}>
                            A family united in divine mission
                        </p>

                        {/* Symbol/Emblem - Center */}
                        <div className={styles.symbolContainer}>
                            <img
                                src="/WhatsApp Image 2025-11-25 at 13.11.42_c50f6af5.jpg"
                                alt="Trust Symbol"
                                className={styles.symbolImage}
                            />
                        </div>

                        {/* Mother's Photo - Top Center with Special Emphasis */}
                        <ScrollReveal variant="scale-up" delay="0.5s">
                            <div className={styles.motherContainer}>
                                <div className={styles.motherImageWrapper}>
                                    <img
                                        src="/WhatsApp Image 2025-11-25 at 13.11.46_85ef570c.jpg"
                                        alt="Beloved Mother"
                                        className={styles.motherImage}
                                    />
                                    <div className={styles.motherGlow} />
                                </div>
                                <p className={styles.motherCaption}>Divine Mother&apos;s Blessings</p>
                            </div>
                        </ScrollReveal>

                        {/* Brothers - Side by Side */}
                        <div className={styles.brothersGrid}>
                            <ScrollReveal variant="slide-right" delay="0.6s">
                                <div className={styles.personCard}>
                                    <div className={styles.personImageWrapper}>
                                        <img
                                            src="/IMG_3990.JPG"
                                            alt="Brother"
                                            className={styles.personImage}
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="slide-left" delay="0.7s">
                                <div className={styles.personCard}>
                                    <div className={styles.personImageWrapper}>
                                        <img
                                            src="/17.jpg"
                                            alt="Brother"
                                            className={styles.personImage}
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AboutSection;
