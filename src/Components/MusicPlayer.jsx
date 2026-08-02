import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';
import weddingMusic from '../assets/music/WhatsApp Audio 2026-08-01 at 3.54.34 PM.mpeg';

const MusicPlayer = ({ isOpened, showIcon }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const audioUrl = weddingMusic;

    useEffect(() => {
        if (isOpened && !isPlaying && audioUrl) {
            // Browsers allow autoplay if there's a user interaction (like clicking the video)
            const playAudio = async () => {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (err) {
                    console.log("Autoplay blocked or audio error:", err);
                }
            };
            playAudio();
        }
    }, [isOpened, audioUrl]);

    const togglePlay = () => {
        if (!audioUrl) return; // No audio file available
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100]">
            <audio ref={audioRef} loop>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <AnimatePresence>
                {showIcon && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePlay}
                        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors border-2 ${
                            isPlaying 
                            ? 'bg-[#B71C1C] text-[#D4AF37] border-[#D4AF37] shadow-[0_0_20px_#B71C1C]' 
                            : 'bg-[#FFF8F0] text-[#B71C1C] border-[#B71C1C]'
                        }`}
                    >
                        {/* Spinning ring animation when playing */}
                        {isPlaying && (
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37] opacity-40"
                            />
                        )}
                        
                        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
                        
                        {/* Floating Note Animations */}
                        {isPlaying && (
                            <motion.div
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: -40, opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-4 text-[#D4AF37]"
                            >
                                <Music size={14} />
                            </motion.div>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MusicPlayer;
