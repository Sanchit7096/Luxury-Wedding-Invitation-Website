import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import floralRight from '../assets/Images/floral-top-right-CS2uPFt2.png';
import floralBottom from '../assets/Images/floral-bottom-left-_kTL5SSX.png';

const WarmRegardsSection = () => {
    const [imageSize, setImageSize] = useState(200);

    useEffect(() => {
        const updateImageSize = () => {
            const screenWidth = window.innerWidth;
            
            if (screenWidth >= 1024) {
                // Desktop: larger size
                setImageSize(200);
            } else if (screenWidth >= 768) {
                // Tablet: medium size
                setImageSize(160);
            } else {
                // Mobile: smaller size
                setImageSize(100);
            }
        };

        updateImageSize();
        window.addEventListener('resize', updateImageSize);
        return () => window.removeEventListener('resize', updateImageSize);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-[#FFF8F0] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
                {/* Right Side Top Floral Image */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute right-0 top-0"
                >
                    <img
                        src={floralRight}
                        alt="Floral decoration top right"
                        className="max-w-full h-auto"
                        style={{ maxWidth: `${imageSize}px` }}
                    />
                </motion.div>

                {/* Left Side Bottom Floral Image */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-0 bottom-0"
                >
                    <img
                        src={floralBottom}
                        alt="Floral decoration bottom left"
                        className="max-w-full h-auto"
                        style={{ maxWidth: `${imageSize}px` }}
                    />
                </motion.div>

                {/* Content - Centered */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center space-y-4 md:space-y-8 py-8 md:py-12"
                >
                    <p className="text-[#4E342E] font-body text-sm md:text-xl leading-relaxed tracking-wide">
                        We would be delighted to share this beautiful beginning with you
                    </p>

                    <p className="text-[#B71C1C] font-body text-base md:text-2xl leading-relaxed tracking-wide italic">
                        With love in our hearts, we await your gracious presence
                    </p>

                    <div className="pt-4 md:pt-8">
                        <p className="text-[#4E342E] font-heading text-xs md:text-base tracking-[0.2em] uppercase opacity-70 mb-2">
                            Invited by Us
                        </p>
                       
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WarmRegardsSection;
