import React, { useRef, useState } from 'react';
import introVideo from '../assets/video/watermark-removed-VID-20260801-WA0038.mp4';

const VideoIntro = ({ onVideoEnd, isClosing }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoEnd = () => {
        onVideoEnd();
    };

    return (
        <div
            className={`fixed inset-0 z-[100] bg-black flex items-center justify-center cursor-pointer transition-opacity duration-1000 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={!isPlaying ? handleClick : undefined}
            style={{ width: '100vw', height: '100vh' }}
        >
            <video
                ref={videoRef}
                src={introVideo}
                className="object-cover md:object-contain"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000'
                }}
                onEnded={handleVideoEnd}
                playsInline
                muted
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 text-center text-white/70 text-[10px] tracking-[0.6em] uppercase opacity-60">
                Wedding Invitation
            </div>

            {!isPlaying && (
                <div className="relative z-30 text-white text-center px-4">
                    <p className="text-xl md:text-2xl lg:text-3xl tracking-widest font-heading">Click here to enter</p>
                </div>
            )}
        </div>
    );
};

export default VideoIntro;
