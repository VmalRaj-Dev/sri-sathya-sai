"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of navbar roughly
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={styles.logo}>
                    {/* Placeholder for logo if needed */}
                    <span>SSSM Trust</span>
                </a>

                <button
                    className={`${styles.mobileToggle} ${isMobileOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <ul className={`${styles.navLinks} ${isMobileOpen ? styles.open : ''}`}>
                    <li>
                        <a className={styles.link} onClick={() => scrollToSection('home')}>Home</a>
                    </li>
                    <li>
                        <a className={styles.link} onClick={() => scrollToSection('about')}>About</a>
                    </li>
                    <li>
                        <a className={styles.link} onClick={() => scrollToSection('magazine')}>Magazine</a>
                    </li>
                    <li>
                        <a className={styles.link} onClick={() => scrollToSection('contact')}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
