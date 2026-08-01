import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const FallingFlowers = () => {
    useEffect(() => {
        const colors = ['#D4AF37', '#B71C1C', '#FF69B4', '#FFB6C1', '#FF1493', '#FF6347', '#FFA07A'];

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const createFallingElement = () => {
            const x = randomInRange(0.1, 0.9);
            const particleCount = 1;
            
            confetti({
                particleCount,
                origin: { x: x, y: 0 },
                colors: [colors[Math.floor(Math.random() * colors.length)]],
                shapes: ['circle'],
                scalar: randomInRange(0.5, 1),
                drift: randomInRange(-1, 1),
                gravity: 2,
                startVelocity: randomInRange(10, 30),
                spread: 0,
                ticks: 200,
                zIndex: 1000,
            });
        };

        // Create initial burst
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createFallingElement(), i * 100);
        }

        // Continue creating falling elements continuously
        let interval = setInterval(() => {
            createFallingElement();
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return null;
};

export default FallingFlowers;
