import { Link } from "react-router-dom";
import UISwitch from "./UISwitch";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [isDivClicked, setDivClicked] = useState(false);

  const handleDivClick = () => {
    setDivClicked(!isDivClicked);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white dark:bg-stone-950 p-3 fixed w-full top-0 shadow-md border-b dark:border-stone-900 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center w-full justify-center md:w-auto">
          <img
            src="/img/website/r8gg-plan.png"
            alt="Logo"
            className="h-14 w-13 mr-2"
          />
          <Link to={"/"} onClick={closeMobileMenu}>
            <div className="text-black dark:text-white text-2xl font-mono font-bold">
              {/* <DynamicText /> */}
              BioLilys
            </div>
          </Link>
        </div>

        <div className="hidden md:flex space-x-4 ">
          <Link to={"/"}>
            <h5 className="text-black dark:text-white font-bold hover:text-blue-300 dark:hover:text-blue-300">
              Home
            </h5>
          </Link>
          <Link to={"/about"}>
            <h5 className="ext-black dark:text-white font-bold hover:text-blue-300 dark:hover:text-blue-300">
              About
            </h5>{" "}
          </Link>
          <Link to={"/services"}>
            <h5 className="ext-black dark:text-white font-bold hover:text-blue-300 dark:hover:text-blue-300">
              Services
            </h5>{" "}
          </Link>
          <Link to={"/blog"}>
            <h5 className="ext-black dark:text-white font-bold hover:text-blue-300 dark:hover:text-blue-300">
              Blog
            </h5>{" "}
          </Link>
          <Link to={"/research"}>
            <h5 className="ext-black dark:text-white font-bold hover:text-blue-300 dark:hover:text-blue-300">
              Research
            </h5>{" "}
          </Link>
        </div>
        <div className="hidden md:flex  items-center">
          {/* GitHub button with a div inside */}
          <UISwitch />
          <div
            className="p-2 cursor-pointer border border-blue-500 bg-gray-100 dark:bg-black rounded-2xl	 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={handleDivClick}
          >
            <a href="https://github.com/stefanoHTB/shopify-community-projects">
              <GitHubIcon style={{ fontSize: 25 }} color="info" />
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-black dark:text-white dark:hover:text-blue-300 hover:text-blue-300"
            onClick={toggleMobileMenu}
          >
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 dark:hover:text-blue-300 "
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="fixed top-16 left-0 bottom-0 right-0 bg-white dark:bg-stone-950 border-t border-gray-300 dark:border-gray-700 flex flex-col "
            >
              <Link
                to={"/"}
                onClick={closeMobileMenu}
                className="py-2 px-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-stone-900 border-b border-gray-300 dark:border-gray-700"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                onClick={closeMobileMenu}
                className="py-2 px-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-stone-900 border-b border-gray-300 dark:border-gray-700"
              >
                About
              </Link>
              <Link
                to={"/services"}
                onClick={closeMobileMenu}
                className="py-2 px-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-stone-900  border-b border-gray-300 dark:border-gray-700 "
              >
                Services
              </Link>
              <Link
                to={"/blog"}
                onClick={closeMobileMenu}
                className="py-2 px-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-stone-900  border-b border-gray-300 dark:border-gray-700 "
              >
                Blog
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
