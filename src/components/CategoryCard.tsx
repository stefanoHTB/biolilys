import React from "react";

type CardProps = {
  smallTopic: string;
  imageSrc: string;
  category: string;
  readTime: string;
};

const CategoryCard: React.FC<CardProps> = (props) => {
  const { smallTopic, imageSrc, category, readTime } = props;

  return (
    <div className="max-w-md mx-2 bg-white dark:bg-gradient-to-t from-gray-800 via-gray-900 to-black shadow-md overflow-hidden rounded-md transition-transform duration-300 transform hover:scale-105">
      {/* Display the image */}
      <img
        src={imageSrc}
        alt={smallTopic}
        className="w-full h-48 object-cover object-center"
      />

      <div className="p-4 h-28">
        {/* Display the title */}
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {smallTopic}
        </h2>
        <div className="flex justify-between mt-2">
          <div>
            <h3 className="text-sm text-black dark:text-gray-500">Category</h3>
            <p className="text-md text-black dark:text-white">{category}</p>
          </div>
          <div>
            <h3 className="text-sm text-black dark:text-gray-500">Read Time</h3>
            <p className="text-md text-black dark:text-white">{readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
