import React from 'react';

const EnvelopeFlapLeft = () => {
    return (
        <div 
            className="envelope-flap-left absolute inset-0 z-20"
            style={{
                width: '50%',
                height: '100%',
                transformOrigin: 'right center',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
            }}
        >
            {/* Flap Face */}
            <div 
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to right, #F5EDE4 0%, #FFFEF7 50%, #FFF8F0 100%)',
                    borderRight: '2px solid rgba(212,175,55,0.4)',
                    boxShadow: 'inset -8px 0 20px rgba(0,0,0,0.08), 8px 0 25px rgba(0,0,0,0.12)'
                }}
            >
                {/* Paper Texture */}
                <div 
                    className="absolute inset-0 opacity-4"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
                    }}
                />
                {/* Embossed Floral Pattern */}
                <div 
                    className="absolute inset-0 opacity-6"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 C35 5 30 5 25 10 C20 15 20 20 25 25 C30 30 35 30 40 35 C45 30 50 30 55 25 C60 20 60 15 55 10 C50 5 45 5 40 10 Z' fill='none' stroke='%23D4AF37' stroke-width='0.8'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '160px 160px'
                    }}
                />
                {/* Thin Gold Edge */}
                <div 
                    className="absolute right-0 top-0 bottom-0 w-[2px]"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.6), transparent)'
                    }}
                />
            </div>
        </div>
    );
};

export default EnvelopeFlapLeft;
