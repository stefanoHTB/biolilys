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
      imageSrc: "/img/devops.jpeg",
      title: "Service 1",
      description: "Description of Service 1",
    },
    {
      imageSrc: "/img/devops.jpeg",
      title: "Service 2",
      description: "Description of Service 2",
    },
    {
      imageSrc: "/img/devops.jpeg",
      title: "Service 3",
      description: "Description of Service 3",
    },
    {
      imageSrc: "/img/devops.jpeg",
      title: "Service 1",
      description: "Description of Service 1",
    },
    {
      imageSrc: "/img/devops.jpeg",
      title: "Service 2",
      description: "Description of Service 2",
    },
    {
      imageSrc: "/img/devops.jpeg",
      title: "Service 3",
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
