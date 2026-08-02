import React, { useRef, useEffect, useState } from 'react';

const CustomScratchCard = ({ width, height, image, finishPercent, onComplete, brushSize = 30 }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        // Load and draw the scratch layer image
        const img = new Image();
        img.src = image;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, width, height);
            ctx.globalCompositeOperation = 'destination-out';
        };
    }, [width, height, image]);

    const getMousePos = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const scratch = (x, y) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, brushSize, 0, Math.PI * 2);
        ctx.fill();
        checkScratchPercentage();
    };

    const checkScratchPercentage = () => {
        if (completed) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, width, height);
        const pixels = imageData.data;
        let totalTransparent = 0;

        for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) totalTransparent++;
        }

        const percentage = (totalTransparent / (width * height)) * 100;
        if (percentage >= finishPercent) {
            setCompleted(true);
            onComplete();
        }
    };

    const handleStart = (e) => {
        setIsDrawing(true);
        const { x, y } = getMousePos(e);
        scratch(x, y);
    };

    const handleMove = (e) => {
        if (!isDrawing || completed) return;
        e.preventDefault();
        const { x, y } = getMousePos(e);
        scratch(x, y);
    };

    const handleEnd = () => {
        setIsDrawing(false);
    };

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            className="block touch-none cursor-crosshair"
        />
    );
};

export default CustomScratchCard;
