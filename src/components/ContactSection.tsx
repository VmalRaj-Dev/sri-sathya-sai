"use client";

import React from 'react';
import styles from './ContactSection.module.css';
import ScrollReveal from './ScrollReveal';

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <section className={`section-padding ${styles.contactSection}`} id="contact">
            <div className="container">
                <div className={styles.wrapper}>
                    <ScrollReveal variant="slide-right">
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                <span className="text-gold-gradient">Get in Touch</span>
                            </h2>
                            <p className={styles.subtitle}>
                                We are here to answer your questions and welcome you to join our journey of service.
                            </p>

                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <div className={styles.icon}>📍</div>
                                    <div className={styles.detailText}>
                                        <h4>Visit Us</h4>
                                        <p>123 Sai Niwas, Ooty Main Road,<br />The Nilgiris, Tamil Nadu, India</p>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.icon}>📞</div>
                                    <div className={styles.detailText}>
                                        <h4>Call Us</h4>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.icon}>✉️</div>
                                    <div className={styles.detailText}>
                                        <h4>Email Us</h4>
                                        <p>contact@sssmtrust.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slide-left">
                        <div className={`${styles.formContainer} glass-premium`}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label} htmlFor="name">Your Name</label>
                                    <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label} htmlFor="email">Email Address</label>
                                    <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label} htmlFor="message">Message</label>
                                    <textarea id="message" className={styles.textarea} placeholder="How can we help you?" required></textarea>
                                </div>
                                <button type="submit" className={styles.submitButton}>Send Message</button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
