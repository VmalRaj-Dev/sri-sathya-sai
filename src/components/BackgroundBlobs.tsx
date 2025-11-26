import React from 'react';
import styles from './BackgroundBlobs.module.css';

const BackgroundBlobs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.godRays}></div>
            <div className={styles.heartbeat}></div>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <div className={`${styles.blob} ${styles.blob3}`}></div>
            <div className={`${styles.blob} ${styles.blob4}`}></div>
        </div>
    );
};

export default BackgroundBlobs;
