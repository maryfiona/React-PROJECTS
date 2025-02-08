import { useState } from "react";
import "../css/Carousel.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const images = [img1, img2, img3];

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev-btn" onClick={prevSlide}>⬅</button>
      <img src={images[index]} alt="carousel" className="carousel-image" />
      <button className="carousel-btn next-btn" onClick={nextSlide}>➡</button>
    </div>
  );
}

export default Carousel;
