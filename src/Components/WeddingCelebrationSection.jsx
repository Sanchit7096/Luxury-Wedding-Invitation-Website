import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import weddingImageMobile from '../assets/Images/ChatGPT Image Aug 1, 2026, 01_18_57 PM.png';
import weddingImageDesktop from '../assets/Images/ChatGPT Image Aug 1, 2026, 01_18_43 PM.png';

const WeddingCelebrationSection = () => {
    const [imageSize, setImageSize] = useState(500);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1024) {
                // Desktop: slightly larger size
                setImageSize(760);
                setIsDesktop(true);
            } else if (screenWidth >= 768) {
                // Tablet: slightly larger size
                setImageSize(440);
                setIsDesktop(false);
            } else {
                // Mobile: slightly larger size
                setImageSize(320);
                setIsDesktop(false);
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <section className="py-8 md:py-16 bg-[#FFF8F0] relative overflow-hidden">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-4 md:px-8"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <img
                        src={isDesktop ? weddingImageDesktop : weddingImageMobile}
                        alt="Wedding Celebration"
                        className="max-w-full h-auto rounded-2xl shadow-2xl"
                        style={{ maxWidth: `${imageSize}px` }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WeddingCelebrationSection;
