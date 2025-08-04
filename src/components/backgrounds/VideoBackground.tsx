import React from 'react';

const VideoBackground = () => {
    return (
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/videoBg.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
    );
};

export default VideoBackground;