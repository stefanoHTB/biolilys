import { Link } from "react-router-dom";
import blogs from "../blogs.json"; // Import the fake data
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import ReactGA from "react-ga";

const BlogsListPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div>
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-2  xl:grid-cols-2 gap-4 pb-10 p-5 ">
        {blogs.map((blog, index) => (
          <Link key={index} to={`/blog/${index}`}>
            <PostCard
              key={index}
              title={blog.title}
              description={blog.description}
              imageSrc={blog.imageSrc}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsListPage;
