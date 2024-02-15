import { useState, useEffect } from "react";
import "./../animation.css";

const DynamicText = () => {
  const phrases = ["Welcome!", "Enjoy!", "All good?"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className="dynamic-text-container">
      <h3 className="animate-slide-in">{phrases[currentPhraseIndex]}</h3>
    </div>
  );
};

export default DynamicText;
