import { useState, useRef, useEffect } from "react";
import "./css/slider.css";
import right from "./assets/right.png";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [width, setWidth] = useState(window.innerWidth * 0.8);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth * 0.8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    "src/assets/5object.jpg",
    "src/assets/6object.jpg",
    "src/assets/11object.webp",
    "src/assets/12object.jpg",
    "src/assets/14object.jpg",
  ];
  const text = [
    "Baiterek",
    "Khan shatyr",
    "Expo-2017",
    "National Museum of the Republic of Kazakhstan",
    "Kazakhstan Opera and Ballet Theater",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <ul className="slider">
        <div className="relat">
          {images.map((images, index) => (
            <li key={index} style={{ width: "100%" }}>
              <img
                src={images}
                style={{
                  width: `${width}px`,
                  height: `${width * 0.5}px`,
                }}
                className={index === currentIndex ? "image active" : "image"}
              />
              <legend className={index == currentIndex ? "active" : "disable"}>
                <span style={{ fontSize: "22px" }}>
                  <strong>{text[index]}</strong>
                </span>
              </legend>
            </li>
          ))}
          <button
            onClick={prevSlide}
            className="upsetButton buttonToSlide"
            style={{ left: "0", top: `${width * 0.25}px` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              {" "}
              <circle cx="24" cy="24" r="24" fill="#00B2FF"></circle>{" "}
              <path
                d="M27.05 31.92L20.53 25.4C19.76 24.63 19.76 23.37 20.53 22.6L27.05 16.08"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="upsetButton buttonToSlide"
            style={{ right: "0", top: `${width * 0.25}px` }}
          >
            <img src={right} />
          </button>
        </div>
      </ul>
    </div>
  );
}
