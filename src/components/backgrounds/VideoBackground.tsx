import React from 'react';

const VideoBackground = () => {

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <video
                className="w-full h-full object-cover"
                src="https://ltc97ny8hknut0of.public.blob.vercel-storage.com/videoBg.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <img
                    src="/home-banner-bg.png"
                    alt="Video fallback"
                    className="w-full h-full object-cover"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
