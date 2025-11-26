"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

type AnimationVariant = 'fade-up' | 'fade-in' | 'scale-up' | 'slide-right' | 'slide-left';

interface ScrollRevealProps {
    children: React.ReactNode;
    threshold?: number;
    delay?: string; // e.g., "0.2s"
    variant?: AnimationVariant;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    threshold = 0.1,
    delay = "0s",
    variant = 'fade-up',
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const getVariantClass = () => {
        switch (variant) {
            case 'fade-in': return styles.fadeIn;
            case 'scale-up': return styles.scaleUp;
            case 'slide-right': return styles.slideRight;
            case 'slide-left': return styles.slideLeft;
            case 'fade-up':
            default: return styles.fadeUp;
        }
    };

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${getVariantClass()} ${isVisible ? styles.visible : ''} ${className}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
