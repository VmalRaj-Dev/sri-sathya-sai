import React, { useState, useRef, useEffect } from 'react';
import styles from './DivineAudio.module.css';

const DivineAudio: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio('/audio/divine-chant.mp3'); // Placeholder path
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            className={`${styles.audioButton} ${isPlaying ? styles.playing : ''}`}
            onClick={togglePlay}
            title={isPlaying ? "Pause Divine Sound" : "Play Divine Sound"}
        >
            {isPlaying ? "🔊" : "🔇"}
        </button>
    );
};

export default DivineAudio;
