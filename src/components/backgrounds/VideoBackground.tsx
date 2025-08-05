'use client';
import React, {useState} from 'react';

const VideoBackground = () => {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            {hasError ? (
                <img
                    src="/home-banner-bg.png"
                    alt="Video fallback"
                    className="w-full h-full object-cover"
                />
            ) : (
                <video
                    className="w-full h-full object-cover"
                    src="https://ltc97ny8hknut0of.public.blob.vercel-storage.com/videoBg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={() => setHasError(true)}
                >
                </video>
            )}
        </div>
    );
};

export default VideoBackground;
