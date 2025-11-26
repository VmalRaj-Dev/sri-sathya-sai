import React, { useRef, useState } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    perspective?: number;
    scale?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className = '',
    perspective = 1000,
    scale = 1.05
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('');
    const [transition, setTransition] = useState('');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const tiltX = (0.5 - y) * 20; // Max tilt angle
        const tiltY = (x - 0.5) * 20;

        setTransform(`perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`);
        setTransition('transform 0.1s ease-out');
    };

    const handleMouseLeave = () => {
        setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`);
        setTransition('transform 0.5s ease-out');
    };

    return (
        <div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
                transition,
                transformStyle: 'preserve-3d',
                willChange: 'transform'
            }}
        >
            {children}
        </div>
    );
};

export default TiltCard;
