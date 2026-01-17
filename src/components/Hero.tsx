"use client";

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/images/hero/baba_1.png",
        "/images/hero/baba_2.png",
        "/images/hero/baba_3.png",
        "/images/hero/baba_4.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={styles.hero}>
            {/* Background Carousel */}
            <div className={styles.carouselContainer}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`${styles.carouselImage} ${index === currentImageIndex ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <div className={styles.contentInner}>
                    <ScrollReveal variant="fade-up" delay="0.1s">
                        <div className={styles.emblemContainer}>
                            <Image
                                src="/logo.png"
                                alt="Sri Sathya Sai Maruthi Seva Trust Emblem"
                                className={styles.emblem}
                                width={120}
                                height={120}
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay="0.2s">
                        {/* Replaced Text Badge with Centenary Image */}
                        <div className="flex justify-center mb-8">
                            <Image
                                src="/100years.png"
                                alt="100 Years of Love"
                                className={styles.centenaryLogo}
                                width={400}
                                height={200}
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay="0.4s">
                        <h1 className={styles.title}>
                            <span className="text-gold-gradient">Sathya Yuga</span>
                            <br />
                            <span className={styles.subtitle}>The Divine Beginning</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay="0.6s">
                        <p className={styles.description}>
                            Sri Sathya Sai Maruthi Seva Charitable Trust welcomes you to a celebration of
                            universal love and selfless service.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="scale-up" delay="0.8s">
                        <div className={styles.actions}>
                            <button className={`${styles.primaryButton} shadow-soft-glow`}>
                                Join the Celebration
                            </button>
                            <button className={styles.secondaryButton}>
                                Watch Video
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
