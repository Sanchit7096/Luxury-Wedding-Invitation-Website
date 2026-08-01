import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import welcomeFlowersTop from '../assets/Images/welcome-flowers-Dy0evJgO.png';
import welcomeFlowersBottom from '../assets/Images/welcome-flowers-bottom-CYQVvwo4.png';

const WeddingInvitationSection = () => {
    const [imageSize, setImageSize] = useState(800);

    useEffect(() => {
        const updateImageSize = () => {
            const screenWidth = window.innerWidth;
            
            if (screenWidth >= 1024) {
                // Desktop: larger size
                setImageSize(800);
            } else if (screenWidth >= 768) {
                // Tablet: medium size
                setImageSize(600);
            } else {
                // Mobile: smaller size
                setImageSize(350);
            }
        };

        updateImageSize();
        window.addEventListener('resize', updateImageSize);
        return () => window.removeEventListener('resize', updateImageSize);
    }, []);

    return (
        <section className="py-8 md:py-16 bg-[#FFF8F0] relative overflow-hidden">
            {/* Top Floral Design */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mb-4 md:mb-8 px-4"
            >
                <img
                    src={welcomeFlowersTop}
                    alt="Top Floral Design"
                    className="max-w-full h-auto"
                    style={{ maxWidth: `${imageSize}px` }}
                />
            </motion.div>

            {/* Invitation Content */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-center px-4 md:px-8 max-w-4xl mx-auto"
            >
                <p className="text-[#B71C1C] font-heading text-lg md:text-xl mb-4 tracking-wider">
                    ॥ श्री गणेशाय नमः ॥
                </p>
                
                <p className="text-[#4E342E] font-body text-sm md:text-base mb-2 tracking-[0.2em] uppercase opacity-80">
                    Request the pleasure of your company
                </p>

                {/* Bride Details */}
                <div className="mb-6">
                    <p className="text-[#B71C1C] font-script text-2xl md:text-4xl font-bold mb-2 tracking-wide">
                        Dr. Gnaneshwari
                    </p>
                    <p className="text-[#4E342E] font-body text-sm md:text-base mb-1 opacity-80">
                        Daughter of
                    </p>
                    <p className="text-[#4E342E] font-body text-base md:text-lg">
                        Gorsa Srinivas (Late) & G. Venkata Parvati
                    </p>
                </div>

                <div className="text-[#D4AF37] text-3xl md:text-5xl my-4">
                    ♡
                </div>

                {/* Groom Details */}
                <div className="mb-6">
                    <p className="text-[#B71C1C] font-script text-2xl md:text-4xl font-bold mb-2 tracking-wide">
                        Madhu
                    </p>
                    <p className="text-[#4E342E] font-body text-sm md:text-base mb-1 opacity-80">
                        Son of
                    </p>
                    <p className="text-[#4E342E] font-body text-base md:text-lg">
                        Gunupuru Jagannadha Swamy & G. Vijaya
                    </p>
                </div>

                {/* Wedding Date and Time */}
                <div className="border-t border-b border-[#D4AF37] py-4 my-6">
                    <p className="text-[#B71C1C] font-heading text-xl md:text-3xl font-bold tracking-wider mb-2">
                        August 16th, Sunday 2026
                    </p>
                    <p className="text-[#4E342E] font-body text-base md:text-lg tracking-wide">
                        Muhurtam: 12:23 AM (Early hours of Monday)
                    </p>
                </div>

                {/* Venue */}
                <div className="mb-6">
                    <p className="text-[#4E342E] font-heading text-sm md:text-base mb-1 tracking-wider opacity-70">
                        VENUE
                    </p>
                    <p className="text-[#B71C1C] font-heading text-xl md:text-2xl font-bold tracking-wide mb-2">
                        RVR CONVENTIONS
                    </p>
                    <p className="text-[#4E342E] font-body text-sm md:text-base leading-relaxed">
                        Beside TDP Office, Nowroji Road,<br />
                        Daspalla Hills, Ram Nagar<br />
                        Visakhapatnam
                    </p>
                </div>

                <p className="text-[#D4AF37] font-body text-sm md:text-base tracking-[0.2em] uppercase italic">
                    Invited By Us
                </p>
            </motion.div>

            {/* Bottom Floral Design */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mt-4 md:mt-8 px-4"
            >
                <img
                    src={welcomeFlowersBottom}
                    alt="Bottom Floral Design"
                    className="max-w-full h-auto"
                    style={{ maxWidth: `${imageSize}px` }}
                />
            </motion.div>
        </section>
    );
};

export default WeddingInvitationSection;
