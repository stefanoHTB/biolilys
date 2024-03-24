// src/VideoBanner.tsx
import React from "react";

const VideoBanner: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/brain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Centered text */}
      <div className="absolute bottom-10 left-0 w-full text-white p-5">
        <h1 className="text-5xl">
          Introducing Isabel: Creating video from text
        </h1>
      </div>
    </div>
  );
};

export default VideoBanner;
