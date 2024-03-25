import { useEffect } from "react";
import Message from "../components/Message";
import ProfileCard from "../components/Profile";
import ReactGA from "react-ga";
//updated

const LinksPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="container mx-auto p-8 bg-white dark:bg-stone-950 shadow-md mt-10">
      <ProfileCard imageSrc={"/videos/me.png"} title={"@stephanodev"} />

      <div className="flex flex-col space-y-4">
        {/* YouTube Link */}
        <a
          href="http://www.youtube.com/@stephanodev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-blue-500 dark:text-white font-bold p-5 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          YouTube
        </a>

        {/* Twitter Link */}
        <a
          href="https://twitter.com/stefm1000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-blue-500 dark:text-white font-bold p-5 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          Twitter
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/stefanoHTB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-blue-500 dark:text-white font-bold p-5 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          GitHub
        </a>

        {/* Discord Link */}
        <a
          href="https://discord.gg/kBTSWHde"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-blue-500 dark:text-white font-bold p-5 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          Discord
        </a>

        {/* BuymeCoffee Link */}
        <a
          href="https://www.buymeacoffee.com/codingwithstef"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-blue-500 dark:text-white font-bold p-5 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          BuymeCoffee
        </a>
      </div>
      <Message
        description={
          "Immerse yourself in the vibrant Shopify app development community. Connect with like-minded developers, share insights, seek advice, and stay updated on the latest trends and updates in the Shopify ecosystem."
        }
      />
    </div>
  );
};

export default LinksPage;
