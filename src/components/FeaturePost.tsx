type FeaturedPostProps = {
  post: {
    title: string;
    description: string;
    imageSrc: string;
  };
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="col-span-2 md:col-span-1 max-w-4xl mx-auto bg-white shadow-md overflow-hidden rounded-md mb-8">
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
