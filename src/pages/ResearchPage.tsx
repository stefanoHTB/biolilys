import SplitSection from "../components/SplitSection";

const ResearchPage = () => {
  return (
    <>
      <SplitSection
        imageSrc={"/videos/12.jpg"}
        title={"You can use this SplitSection"}
        description={
          "You can use this SplitSection component in your React application and pass the required props to display the split section as desired, with the option to switch positions as needed. Adjust the Tailwind CSS classes and styles"
        }
        buttonText={"Quick Action"}
      />
    </>
  );
};

export default ResearchPage;
