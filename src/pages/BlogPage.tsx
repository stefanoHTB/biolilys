import { useParams } from "react-router-dom";
import blogs from "../blogs.json";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

type Paragraph = {
  content: string;
  image?: string;
};

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const index = parseInt(id!, 10);
  const blog = blogs[index];

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Add a check to see if 'blog' is defined before rendering
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8 text-black dark:text-white p-5">
      {/* ---------------------- METADATA ---------------------- */}
      {/* ------------------------------------------------------ */}
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        {/* Add more meta tags as needed */}
      </Helmet>
      {/* ---------------------- END METADATA ---------------------- */}
      {/* -----------------------------------------------------------*/}

      <h1 className="text-4xl font-semibold mb-4">{blog.title}</h1>
      <img src={blog.imageSrc} className="mb-4" />
      {/* Loop through paragraphs */}
      {blog.paragraphs ? (
        blog.paragraphs.map((paragraph: Paragraph, index) => (
          <div key={index} className="mb-4">
            <p>{paragraph.content}</p>
            <br />
            {paragraph.image && (
              <img
                src={paragraph.image}
                alt={`Paragraph Image ${index + 1}`}
                className="mb-2"
              />
            )}
          </div>
        ))
      ) : (
        <p>No paragraphs available for this blog.</p>
      )}
      {/* Styled Date Div */}
      <div className="mt-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-600 dark:text-gray-400">Date: {blog.date}</p>
      </div>
    </div>
  );
};

export default BlogPage;
