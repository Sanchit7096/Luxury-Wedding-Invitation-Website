import React from 'react';

const InvitationCard = () => {
    return (
        <div 
            className="invitation-card absolute z-10 flex items-center justify-center"
            style={{
                width: '80%',
                height: '70%',
                left: '10%',
                top: '15%',
                transform: 'translateY(250px)',
                opacity: 0
            }}
        >
            {/* Card */}
            <div 
                className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden"
                style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 0 100px rgba(212,175,55,0.1)'
                }}
            >
                {/* Gold Border */}
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        border: '4px solid #D4AF37',
                        borderRadius: '8px',
                        boxShadow: 'inset 0 0 20px rgba(212,175,55,0.2)'
                    }}
                />
                
                {/* Inner Border */}
                <div 
                    className="absolute inset-2 pointer-events-none"
                    style={{
                        border: '2px solid #D4AF37',
                        borderRadius: '6px',
                        opacity: 0.5
                    }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    {/* Top Decoration */}
                    <div className="mb-4">
                        <div 
                            className="w-16 h-1 mx-auto mb-2"
                            style={{
                                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
                            }}
                        />
                        <p 
                            className="text-sm tracking-[0.4em] uppercase"
                            style={{
                                fontFamily: 'Cinzel, serif',
                                color: '#D4AF37'
                            }}
                        >
                            Wedding Invitation
                        </p>
                    </div>

                    {/* Names */}
                    <div className="mb-6">
                        <h2 
                            className="text-4xl md:text-5xl mb-2"
                            style={{
                                fontFamily: 'Great Vibes, cursive',
                                color: '#B71C1C',
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            Dr. Gnaneshwari
                        </h2>
                        <div className="text-2xl text-[#D4AF37] my-2">♡</div>
                        <h2 
                            className="text-4xl md:text-5xl mt-2"
                            style={{
                                fontFamily: 'Great Vibes, cursive',
                                color: '#B71C1C',
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            Madhu
                        </h2>
                    </div>

                    {/* Date */}
                    <div className="mb-4">
                        <p 
                            className="text-lg tracking-wider"
                            style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                color: '#4E342E'
                            }}
                        >
                            August 16th, 2026
                        </p>
                        <p 
                            className="text-sm italic mt-1"
                            style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                color: '#4E342E',
                                opacity: 0.8
                            }}
                        >
                            12:23 AM
                        </p>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="mt-4">
                        <div 
                            className="w-16 h-1 mx-auto mt-2"
                            style={{
                                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
                            }}
                        />
                    </div>
                </div>

                {/* Paper Texture Overlay */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>
        </div>
    );
};

export default InvitationCard;
