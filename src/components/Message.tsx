import React from "react";

interface MessageProps {
  description: string;
}

const Message: React.FC<MessageProps> = ({ description }) => {
  return (
    <div className="bg-black-500 text-black dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">{description}</p>
      </div>
    </div>
  );
};

export default Message;
