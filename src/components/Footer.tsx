import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h3 className={styles.title}>Sri Sathya Sai Maruthi Seva Charitable Trust</h3>
                    <p className={styles.motto}>Love God in All, Serve God in All</p>

                    <div className={styles.socials}>
                        <h4 className={styles.socialTitle}>Connect with us</h4>
                        <div className={styles.links}>
                            <a href="#" className={styles.link}>YouTube: Sai Devamrutham- Sai Nivas</a>
                            <a href="#" className={styles.link}>Instagram: sainivas_saidevamrutham</a>
                            <a href="#" className={styles.link}>Facebook: Sai Devamrutham- Sai Nivas</a>
                        </div>
                    </div>

                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Sri Sathya Sai Maruthi Seva Charitable Trust. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
