// src/components/ProfileCard.tsx

import React from "react";

interface ProfileCardProps {
  imageSrc: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imageSrc}
        alt="Profile"
        className="rounded-full w-60 h-60 mb-4"
      />
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
        {title}
      </h2>
    </div>
  );
};

export default ProfileCard;
