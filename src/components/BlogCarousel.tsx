import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Blog } from "../types/types";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

interface Props {
  blogs: Blog[];
  category: string;
}

const BlogCarousel: React.FC<Props> = ({ blogs, category }) => {
  const filteredBlogs = blogs.filter((blog) => blog.category === category);
  console.log(filteredBlogs, "filter"); // Add this line to log the filtered blogs

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto p-5 ">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
        {category}
      </h2>
      <Slider {...settings}>
        {filteredBlogs.map((blog: Blog) => (
          <div key={blog.id}>
            <Link to={`blog/${blog.id}`}>
              <CategoryCard
                smallTopic={blog.smallTopic}
                imageSrc={blog.imageSrc}
                category={blog.category}
                readTime={blog.readTime}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
