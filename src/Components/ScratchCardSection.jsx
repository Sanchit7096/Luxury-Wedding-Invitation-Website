import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import CustomScratchCard from './CustomScratchCard';

const ScratchCardSection = () => {
    const [isScratched, setIsScratched] = useState(false);

    const handleComplete = () => {
        setIsScratched(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#B71C1C', '#FFF8F0']
        });
    };

    // Realistic pink texture SVG
    const pinkTexture = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3ClinearGradient id='pink' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFB8D5;stop-opacity:1' /%3E%3Cstop offset='25%25' style='stop-color:%23FF7CB8;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23FF5AA7;stop-opacity:1' /%3E%3Cstop offset='75%25' style='stop-color:%23FF7CB8;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FFB8D5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23pink)' /%3E%3Crect width='400' height='200' fill='black' opacity='0.05' filter='url(%23noise)' /%3E%3C/svg%3E";

    const [dimensions, setDimensions] = useState({ width: 400, height: 200 });

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;
            let width;
            
            if (screenWidth >= 1024) {
                // Desktop: smaller size
                width = 400;
            } else if (screenWidth >= 768) {
                // Tablet: medium size
                width = 350;
            } else {
                // Mobile: fixed size for proper heart shape
                width = 300;
            }
            
            setDimensions({
                width: width,
                height: width * 1.2 // Taller for better heart shape
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const settings = {
        width: dimensions.width,
        height: dimensions.height,
        image: pinkTexture,
        finishPercent: 40,
        onComplete: handleComplete,
        brushSize: 30
    };

    return (
        <section className="py-12 md:py-24 bg-[#FFF8F0] relative overflow-hidden flex flex-col items-center px-4">
            {/* Wave Pattern Top */}
            <div className="absolute top-0 left-0 w-full h-12 bg-white flex items-center justify-center">
                <div className="w-full h-full opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%23B71C1C' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom'
                }}></div>
            </div>

            <div className="text-center mb-8 md:mb-12 px-4">
                <h2 className="text-base md:text-lg font-heading tracking-[0.4em] uppercase text-[#4E342E] mb-2">
                    Scratch to reveal the date
                </h2>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-crosshair group touch-none"
                style={{ width: dimensions.width, height: dimensions.height }}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
            >
                <svg
                    width={dimensions.width}
                    height={dimensions.height}
                    viewBox="0 0 256 256"
                    className="absolute inset-0"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        <clipPath id="heartClip">
                            <path d="M128 232 C60 180 0 120 0 60 C0 20 28 0 60 0 C95 0 118 20 128 42 C138 20 161 0 196 0 C228 0 256 20 256 60 C256 120 196 180 128 232 Z" />
                        </clipPath>
                    </defs>
                    
                    {/* Revealed Content */}
                    <foreignObject x="0" y="0" width="256" height="256" clipPath="url(#heartClip)">
                        <div xmlns="http://www.w3.org/1999/xhtml" 
                             style={{ 
                                 width: '100%', 
                                 height: '100%', 
                                 display: 'flex', 
                                 alignItems: 'center', 
                                 justifyContent: 'center',
                                 flexDirection: 'column',
                                 padding: '20px',
                                 textAlign: 'center'
                             }}>
                            <p style={{ 
                                color: '#4E342E', 
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: '10px',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                opacity: '0.7',
                                marginBottom: '5px'
                            }}>The Wedding Day</p>
                            <p style={{ 
                                color: '#B71C1C', 
                                fontFamily: 'Great Vibes, cursive',
                                fontSize: '28px',
                                fontWeight: 'bold',
                                marginBottom: '5px'
                            }}>August 16th, 2026</p>
                            <p style={{ 
                                color: '#4E342E', 
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: '10px',
                                fontStyle: 'italic',
                                letterSpacing: '0.1em'
                            }}>12:23 AM</p>
                        </div>
                    </foreignObject>

                    {/* Scratch Layer */}
                    {!isScratched && (
                        <foreignObject x="0" y="0" width="256" height="256" clipPath="url(#heartClip)">
                            <div xmlns="http://www.w3.org/1999/xhtml" 
                                 style={{ 
                                     width: '100%', 
                                     height: '100%',
                                     position: 'relative'
                                 }}>
                                <div style={{ 
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 10
                                }}>
                                    <CustomScratchCard {...settings} />
                                </div>
                            </div>
                        </foreignObject>
                    )}
                </svg>
            </motion.div>

            {/* Wave Pattern Bottom */}
            {/* <div className="absolute bottom-0 left-0 w-full h-12 bg-white flex items-center justify-center">
                <div className="w-full h-full opacity-10 rotate-180" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%233E2723' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x'
                }}></div>
            </div> */}
        </section>
    );
};

export default ScratchCardSection;
