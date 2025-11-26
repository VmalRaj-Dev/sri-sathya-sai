import React from 'react';
import styles from './Hero.module.css';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <ScrollReveal variant="fade-up" delay="0.1s">
                    <div className={styles.emblemContainer}>
                        <img
                            src="/Red and Yellow Modern Shocking Moments.png"
                            alt="Sri Sathya Sai Maruthi Seva Trust Emblem"
                            className={styles.emblem}
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="fade-up" delay="0.2s">
                    <div className={styles.badge}>
                        <span className={styles.badgeText}>100 Years of Love</span>
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
        </section>
    );
};

export default Hero;
