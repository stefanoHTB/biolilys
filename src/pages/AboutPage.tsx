import { useEffect } from "react";
import FeaturedPost from "../components/FeaturePost";
import ReactGA from "react-ga";

const AboutPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <FeaturedPost
        post={{
          title: "",
          description: "",
          imageSrc: "/videos/12.jpg",
        }}
      />
      <div className="container mx-auto p-8 bg-white dark:bg-stone-950 shadow-md ">
        <h3 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 text-black dark:text-white">
          Empowering Your Journey in Shopify App Development
        </h3>

        <p className="text-lg leading-relaxed text-black dark:text-white">
          Welcome to our immersive exploration into the world of Shopify app
          development, where innovation meets commerce. In this comprehensive
          guide, we unfold the layers of possibilities, equipping you with the
          knowledge and skills to thrive in the dynamic realm of e-commerce
          through Shopify apps.
        </p>
        <br />

        <h3 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 text-black dark:text-white">
          Learning Shopify App Development: A Transformative Journey
        </h3>

        <p className="text-lg leading-relaxed text-black dark:text-white">
          Embarking on the path of Shopify app development is an empowering
          journey that opens the doors to a vast ecosystem of possibilities.
          Whether you are a novice developer or a seasoned coder, our guide is
          designed to cater to all skill levels, providing a structured and
          enriching learning experience.
        </p>
        <br />

        <h3 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 text-black dark:text-white">
          Key Features and Tools: Navigating the Shopify Universe
        </h3>

        <p className="text-lg leading-relaxed text-black dark:text-white">
          Polaris Design System: At the heart of creating visually appealing and
          user-friendly Shopify apps lies the Polaris design system. Our guide
          delves into the intricacies of leveraging Polaris components, ensuring
          that your apps not only function seamlessly but also offer a
          delightful user experience.
        </p>

        <p className="text-lg leading-relaxed text-black dark:text-white">
          Shopify CLI (Command-Line Interface): Efficiency is key in the
          development process, and the Shopify CLI is your trusted companion.
          Learn how to harness its power to streamline your workflow, create new
          apps effortlessly, and stay in control of your development
          environment.
        </p>
        <p className="text-lg leading-relaxed text-black dark:text-white">
          Shopify APIs (Application Programming Interfaces): Uncover the
          potential of Shopify APIs as you explore how they facilitate seamless
          communication between your app and the Shopify platform. From handling
          storefront data to managing orders and customer information, our guide
          provides hands-on insights into incorporating APIs effectively into
          your app.
        </p>
        <p className="text-lg leading-relaxed text-black dark:text-white">
          Extensions Functions: Elevate your app's functionality with Shopify
          extensions. Discover how to integrate these functions to extend the
          capabilities of your app, offering users enhanced features and an
          enriched experience.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-950 mt-20">
        <h1 className="text-white dark:text-black">1</h1>
      </div>
    </>
  );
};

export default AboutPage;
