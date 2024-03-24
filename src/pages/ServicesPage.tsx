import { useEffect } from "react";
import ServicesGrid from "../components/ServicesGrid";
import ReactGA from "react-ga";
import Banner from "../components/Banner";
import ServicesBanner from "../components/ServicesBanner";
import ContactForm from "../components/ContactForm";

const ServicesPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const services = [
    {
      imageSrc: "/img/services/webdev.jpeg",
      title: "Web Development Services",
      description: "Description of Service 1",
    },
    {
      imageSrc: "/img/services/mobiledev.png",
      title: "Mobile Development Services",
      description: "Description of Service 2",
    },
    {
      imageSrc: "/img/services/api.jpeg",
      title: "Api Development and Integration",
      description: "Description of Service 3",
    },
    {
      imageSrc: "/img/services/shots.jpeg",
      title: "Shopify Web Development",
      description: "Description of Service 1",
    },
    {
      imageSrc: "/img/services/shopify.jpeg",
      title: "Hire a Shopify Consultant",
      description: "Hire a Shopify Consultant",
    },
    {
      imageSrc: "/img/services/appshopify.jpeg",
      title: "Deploy your own Custom Shopify Application",
      description: "Description of Service 3",
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <ServicesBanner
        title={"Crafting Excellence: Your Gateway to Shopify App Mastery"}
        description={
          "Embark on a journey of Shopify app development mastery. Our concise and practical guides to empowers you to create robust and scalable apps tailored to your business needs. "
        }
      />
      <ServicesGrid services={services} />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
