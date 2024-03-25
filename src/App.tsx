import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import LinksPage from "./pages/LinksPage";
import AboutPage from "./pages/AboutPage";

import ReactGA from "react-ga";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogsListPage from "./pages/BlogsListPage";
import TermsOfService from "./pages/TermsofService";
import ServicesPage from "./pages/ServicesPage";
import ResearchPage from "./pages/ResearchPage";

const TRACKING_ID = "G-RERJSP9M7P";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="links" element={<LinksPage />} />
        <Route path="blog" element={<BlogsListPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="redux" element={<LoginPage />} />
        <Route path="blog/:id" element={<BlogPage />} />
        <Route path="research" element={<ResearchPage />} />

        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
