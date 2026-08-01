import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import welcomeFlowers from '../assets/Images/welcome-flowers-Dy0evJgO.png';
import welcomeFlowersBottom from '../assets/Images/welcome-flowers-bottom-CYQVvwo4.png';

const WelcomeGate = ({ onOpen }) => {
    const [isOpening, setIsOpening] = useState(false);

    const handleOpen = () => {
        setIsOpening(true);
        setTimeout(() => {
            onOpen();
        }, 1500); 
    };

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden bg-[#FFF8F0] flex items-center justify-center">
            {/* Left Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isOpening ? '-100%' : 0 }}
                transition={{ duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] }}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#8B0000] border-r-[6px] border-[#D4AF37] shadow-[20px_0_50px_rgba(0,0,0,0.5)] z-20 flex items-center justify-end overflow-hidden paper-texture"
            >
                {/* Traditional Mandala Decoration */}
                <div className="absolute right-[-100px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-[10px] md:border-[20px] border-[#D4AF37]/10 opacity-20 pointer-events-none" />
                <div className="absolute right-[-50px] w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full border-[5px] md:border-[10px] border-[#D4AF37]/20 opacity-30 pointer-events-none" />
                
                {/* Ornate Handle */}
                <div className="mr-[-25px] md:mr-[-40px] w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F9F295] to-[#AA771C] border-2 border-[#8B0000] flex items-center justify-center z-30 shadow-[0_0_20px_rgba(0,0,0,0.3)] animate-float">
                    <Heart fill="#8B0000" stroke="none" className="w-6 h-6 md:w-10 md:h-10" />
                </div>
            </motion.div>

            {/* Right Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isOpening ? '100%' : 0 }}
                transition={{ duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] }}
                className="absolute inset-y-0 right-0 w-1/2 bg-[#8B0000] border-l-[6px] border-[#D4AF37] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-20 flex items-center justify-start overflow-hidden paper-texture"
            >
                {/* Traditional Mandala Decoration */}
                <div className="absolute left-[-100px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-[10px] md:border-[20px] border-[#D4AF37]/10 opacity-20 pointer-events-none" />
                <div className="absolute left-[-50px] w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full border-[5px] md:border-[10px] border-[#D4AF37]/20 opacity-30 pointer-events-none" />

                <div className="ml-[-25px] md:ml-[-40px] w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F9F295] to-[#AA771C] border-2 border-[#8B0000] flex items-center justify-center z-30 shadow-[0_0_20px_rgba(0,0,0,0.3)] animate-float" style={{ animationDelay: '1s' }}>
                    <Heart fill="#8B0000" stroke="none" className="w-6 h-6 md:w-10 md:h-10" />
                </div>
            </motion.div>

            {/* Center Content */}
            <AnimatePresence>
                {!isOpening && (
                    <motion.div
                        exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        className="relative z-40 flex flex-col items-center px-6"
                    >

                        <div className="text-center mt-12 mb-10">
                            <h3 className="text-[#D4AF37] font-heading text-sm md:text-xl tracking-[0.5em] mb-4 drop-shadow-sm">NAMASTE</h3>
                            <h2 className="text-white font-script text-5xl md:text-7xl mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                                Dr. Gnaneshwari & Madhu
                            </h2>
                            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full shadow-[0_0_10px_#D4AF37]" />
                            <p className="text-[#F9F295] font-body italic text-sm md:text-lg opacity-90 max-w-xs md:max-w-md mx-auto">
                                "The sacred doors to our new beginning are about to open. We await your presence."
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px #D4AF37' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleOpen}
                            className="group relative px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F9F295] to-[#AA771C] text-[#8B0000] font-bold rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all uppercase tracking-[0.2em] text-xs md:text-sm overflow-hidden"
                        >
                            <span className="relative z-10">Enter Wedding</span>
                            <div className="absolute inset-0 shimmer opacity-30" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Welcome Flowers Top */}
            <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
                <img src={welcomeFlowers} className="w-full h-auto" alt="" />
            </div>

            {/* Welcome Flowers Bottom */}
            <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
                <img src={welcomeFlowersBottom} className="w-full h-auto" alt="" />
            </div>

            <style jsx="true">{`
                .shimmer {
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite;
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default WelcomeGate;
