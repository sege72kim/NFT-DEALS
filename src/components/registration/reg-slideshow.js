import React, { useState, useEffect } from "react";
import "./style.css";
const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTransitioning(false);
      }, 300); // Wait for the transition to complete before changing image
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img
        className={`slider-image ${transitioning ? "transitioning" : ""}`}
        src={images[currentIndex]}
        alt="Slider"
      />
    </div>
  );
};

export default Slideshow;
