type FeaturedPostProps = {
  post: {
    title: string;
    description: string;
    imageSrc: string;
  };
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="mt-10">
      {/* Display the image */}
      <img
        src={post.imageSrc}
        alt={post.title}
        className="w-full h-96 object-cover object-center"
      />
    </div>
  );
};

export default FeaturedPost;
