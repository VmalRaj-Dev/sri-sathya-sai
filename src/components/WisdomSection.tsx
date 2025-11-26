"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './WisdomSection.module.css';
import WisdomCard from './WisdomCard';
import ScrollReveal from './ScrollReveal';

const WisdomSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const wisdomData = [
        {
            quote: "Love all, serve all. Help ever, hurt never.",
            category: "Love & Service"
        },
        {
            quote: "The end of wisdom is freedom. The end of culture is perfection. The end of knowledge is love.",
            category: "Wisdom"
        },
        {
            quote: "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is love - enjoy it.",
            category: "Life"
        },
        {
            quote: "Hands that help are holier than lips that pray.",
            category: "Service"
        },
        {
            quote: "You must be a lotus, unfolding its petals when the sun rises in the sky, unaffected by the slush where it is born or even the water which sustains it!",
            category: "Detachment"
        },
        {
            quote: "The main objective of education is to develop self-confidence, moral values, and broad vision among students.",
            category: "Education"
        },
        {
            quote: "Start the day with love, fill the day with love, end the day with love. This is the way to God.",
            category: "Love"
        }
    ];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || isPaused) return;

        let scrollAmount = 0;
        const scrollSpeed = 0.5;

        const autoScroll = () => {
            if (!isPaused && container) {
                scrollAmount += scrollSpeed;
                container.scrollLeft = scrollAmount;

                // Reset scroll when reaching the end
                if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        };

        const animationId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    return (
        <section className={styles.wisdomSection}>
            <div className="container">
                <ScrollReveal variant="fade-up">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <span className="text-gold-gradient">Divine Wisdom</span>
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Timeless teachings that illuminate the path to truth, love, and inner peace
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            <ScrollReveal variant="fade-up" delay="0.2s">
                <div
                    ref={scrollContainerRef}
                    className={styles.carouselContainer}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className={styles.carouselTrack}>
                        {wisdomData.map((item, index) => (
                            <WisdomCard
                                key={index}
                                quote={item.quote}
                                category={item.category}
                            />
                        ))}
                        {/* Duplicate cards for seamless loop */}
                        {wisdomData.map((item, index) => (
                            <WisdomCard
                                key={`duplicate-${index}`}
                                quote={item.quote}
                                category={item.category}
                            />
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            <div className="container">
                <ScrollReveal variant="fade-up" delay="0.4s">
                    <div className={styles.callToAction}>
                        <p className={styles.ctaText}>
                            Explore more teachings and discover the path to spiritual enlightenment
                        </p>
                        <button className={styles.ctaButton}>
                            View All Teachings
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default WisdomSection;
