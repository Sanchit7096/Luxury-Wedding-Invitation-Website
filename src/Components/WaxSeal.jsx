import React, { useState } from 'react';

const WaxSeal = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="wax-seal absolute z-30 flex items-center justify-center cursor-pointer transition-transform duration-300"
            style={{
                width: '140px',
                height: '140px',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Outer Glow */}
            <div 
                className="absolute inset-0 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)',
                    filter: 'blur(15px)',
                    opacity: isHovered ? 0.8 : 0.5
                }}
            />
            
            {/* Main Seal with Organic Irregular Edge */}
            <div 
                className="relative w-full h-full"
                style={{
                    background: 'radial-gradient(circle at 35% 35%, #F9F295 0%, #D4AF37 30%, #AA771C 70%, #8B6914 100%)',
                    borderRadius: '50%',
                    boxShadow: `
                        0 0 0 3px rgba(212,175,55,0.4),
                        0 0 0 6px rgba(212,175,55,0.2),
                        0 15px 40px rgba(0,0,0,0.5),
                        inset 0 4px 15px rgba(255,255,255,0.4),
                        inset 0 -4px 15px rgba(0,0,0,0.4)
                    `,
                    clipPath: 'polygon(50% 0%, 61% 2%, 71% 6%, 80% 12%, 87% 20%, 92% 29%, 95% 39%, 97% 50%, 95% 61%, 92% 71%, 87% 80%, 80% 88%, 71% 94%, 61% 98%, 50% 100%, 39% 98%, 29% 94%, 20% 88%, 13% 80%, 8% 71%, 5% 61%, 3% 50%, 5% 39%, 8% 29%, 13% 20%, 20% 12%, 29% 6%, 39% 2%)'
                }}
            >
                {/* Metallic Highlights */}
                <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
                        opacity: 0.7
                    }}
                />
                
                {/* Inner Shadow/Bevel */}
                <div 
                    className="absolute inset-3 rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)',
                        boxShadow: 'inset 0 0 25px rgba(0,0,0,0.3)'
                    }}
                />
                
                {/* Subtle Reflection */}
                <div 
                    className="absolute top-4 left-4 w-8 h-8 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
                        filter: 'blur(2px)'
                    }}
                />
                
                {/* Logo/Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                        className="text-center"
                        style={{
                            fontFamily: 'Great Vibes, cursive',
                            fontSize: '36px',
                            color: '#5C4033',
                            textShadow: '0 2px 4px rgba(255,255,255,0.6), 0 -1px 2px rgba(0,0,0,0.3)',
                            fontWeight: 'bold',
                            letterSpacing: '2px'
                        }}
                    >
                        G&M
                    </div>
                </div>

                {/* Wax Texture */}
                <div 
                    className="absolute inset-0 rounded-full opacity-25"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>
        </div>
    );
};

export default WaxSeal;
