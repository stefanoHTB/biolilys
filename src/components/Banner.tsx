import React from "react";
import { Link } from "react-router-dom";

interface BannerProps {
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  button1Text,
  button2Text,
}) => {
  return (
    <div className="bg-black-500 text-black dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300">
            <Link to="/about">{button1Text}</Link>
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300">
            <Link to="/services">{button2Text}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
