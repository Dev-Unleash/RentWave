import React, { useState, useEffect } from 'react';
import './Hero.css';
import Property1 from '../../assets/Property1.png';
import Property2 from '../../assets/Property2.png';
import Property3 from '../../assets/Property3.png';
import Property4 from '../../assets/Property4.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Property1, Property2, Property3, Property4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Hero;
