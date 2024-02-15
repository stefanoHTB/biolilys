import React from "react";

interface BannerProps {
  title: string;
  description: string;
}

const ServicesBanner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="bg-black-500 text-black dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">{description}</p>
      </div>
    </div>
  );
};

export default ServicesBanner;
