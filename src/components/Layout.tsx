import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper bg-white dark:bg-stone-950 pt-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
