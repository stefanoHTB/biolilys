import React from "react";

type Service = {
  imageSrc: string;
  title: string;
  description: string;
};

const ServicesGrid: React.FC<{ services: Service[] }> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-40 object-cover object-center"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
