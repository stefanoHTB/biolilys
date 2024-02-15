import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const PostCard: React.FC<CardProps> = (props) => {
  const { title, description, imageSrc } = props;

  return (
    <div className="max-w-md mx-2 bg-white dark:bg-gradient-to-t from-gray-800 via-gray-900 to-black shadow-md overflow-hidden rounded-md transition-transform duration-300 transform hover:scale-105">
      {/* Display the image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />

      <div className="p-4 h-34">
        {/* Display the title */}
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h2>

        {/* Display the description */}
        <p className="mt-2 text-black dark:text-white">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
        <h5 className="mt-2 text-black dark:text-white">May 5, 2024</h5>
      </div>
    </div>
  );
};

export default PostCard;
