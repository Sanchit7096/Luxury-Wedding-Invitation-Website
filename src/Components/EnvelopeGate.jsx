import React, { useRef } from 'react';
import { gsap } from 'gsap';
import EnvelopeFlapLeft from './EnvelopeFlapLeft';
import EnvelopeFlapRight from './EnvelopeFlapRight';
import WaxSeal from './WaxSeal';
import InvitationCard from './InvitationCard';
import Hero from './hero';

const EnvelopeGate = ({ onOpen }) => {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);

    const handleOpen = () => {
        if (timelineRef.current) return;
        
        timelineRef.current = gsap.timeline({
            onComplete: () => {
                onOpen();
            }
        });

        // Step 1: Seal slightly enlarges
        timelineRef.current.to('.wax-seal', {
            scale: 1.15,
            duration: 0.4,
            ease: 'power2.out'
        });

        // Step 2: Shine effect (scale down slightly)
        timelineRef.current.to('.wax-seal', {
            scale: 1.05,
            duration: 0.2,
            ease: 'power2.inOut'
        });

        // Step 3: Seal rotates slightly
        timelineRef.current.to('.wax-seal', {
            rotation: 8,
            duration: 0.3,
            ease: 'power2.inOut'
        });

        // Step 4: Seal fades away
        timelineRef.current.to('.wax-seal', {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: 'power2.in'
        });

        // Step 5: Pause 300ms
        timelineRef.current.to({}, {
            duration: 0.3
        });

        // Step 6: Envelope flaps slowly open (1.8-2.2 seconds)
        timelineRef.current.to('.envelope-flap-left', {
            rotateY: -130,
            duration: 2.0,
            ease: 'power3.inOut'
        });

        timelineRef.current.to('.envelope-flap-right', {
            rotateY: 130,
            duration: 2.0,
            ease: 'power3.inOut'
        }, '-=2.0');

        // Step 7: Invitation rises upward
        timelineRef.current.to('.invitation-card', {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=1.5');

        // Step 8: Hero section fades in and zooms slightly
        timelineRef.current.to('.hero-background', {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power2.out'
        }, '-=1.0');

        // Step 9: Envelope fades away
        timelineRef.current.to('.envelope-container', {
            opacity: 0,
            duration: 1.0,
            ease: 'power2.in'
        }, '-=0.8');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleOpen();
        }
    };

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={handleOpen}
            onKeyDown={handleKeyPress}
            tabIndex={0}
            role="button"
            aria-label="Open wedding invitation envelope"
        >
            {/* Hero Section Behind (Initially Hidden) */}
            <div 
                className="hero-background absolute inset-0 opacity-0 scale-[1.03]"
                style={{ transformOrigin: 'center center' }}
            >
                <Hero />
            </div>

            {/* Envelope Container */}
            <div className="envelope-container relative" style={{ 
                width: '75vw',
                maxWidth: '600px',
                height: '75vh',
                maxHeight: '800px',
                perspective: '2000px',
                transformStyle: 'preserve-3d'
            }}>
                {/* Background Paper with Embossed Texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFEF7] via-[#FFF8F0] to-[#F5EDE4] rounded-lg shadow-2xl overflow-hidden">
                    {/* Embossed Floral Texture */}
                    <div 
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 C25 5 20 5 15 10 C10 15 10 20 15 25 C20 30 25 30 30 35 C35 30 40 30 45 25 C50 20 50 15 45 10 C40 5 35 5 30 10 Z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`,
                            backgroundSize: '120px 120px'
                        }}
                    />
                    {/* Paper Texture Overlay */}
                    <div 
                        className="absolute inset-0 opacity-3"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
                        }}
                    />
                </div>

                {/* Invitation Card (Hidden Initially) */}
                <InvitationCard />

                {/* Left Envelope Flap */}
                <EnvelopeFlapLeft />

                {/* Right Envelope Flap */}
                <EnvelopeFlapRight />

                {/* Wax Seal */}
                <WaxSeal />
            </div>

            <style jsx="true">{`
                @media (max-width: 768px) {
                    .envelope-container {
                        width: 95vw !important;
                        height: 95vh !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default EnvelopeGate;
