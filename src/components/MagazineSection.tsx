"use client";

import React from 'react';
import styles from './MagazineSection.module.css';
import ScrollReveal from './ScrollReveal';

const MagazineSection = () => {
    const articles = [
        {
            id: 1,
            category: "Spiritual",
            title: " The Power of Namasmarana",
            excerpt: "Discover how chanting the divine name can transform your daily life and bring inner peace.",
            icon: "🕉️"
        },
        {
            id: 2,
            category: "Seva",
            title: "Joy of Giving: Village Service",
            excerpt: "A heartwarming account of our recent medical camp in the Nilgiris and the smiles required.",
            icon: "🤝"
        },
        {
            id: 3,
            category: "Youth",
            title: "Role of Youth in Nation Building",
            excerpt: "Swami's message to the youth about character, leadership, and selfless service.",
            icon: "🌟"
        }
    ];

    return (
        <section className={`section-padding ${styles.magazineSection}`} id="magazine">
            <div className="container">
                <ScrollReveal variant="fade-up">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <span className="text-gold-gradient">Sanathana Sarathi</span>
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Chronicles of Love, Service, and Spiritual Transformation
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {articles.map((article, index) => (
                        <ScrollReveal key={article.id} variant="fade-up" delay={`${index * 0.1}s`}>
                            <div className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.imagePlaceholder}>
                                        {article.icon}
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{article.category}</span>
                                    <h3 className={styles.cardTitle}>{article.title}</h3>
                                    <p className={styles.cardExcerpt}>{article.excerpt}</p>
                                    <a href="#" className={styles.readMore}>
                                        Read Article <span className={styles.arrow}>→</span>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MagazineSection;
