
import { useEffect, useState } from "react";

export default function FadeCarouselWithControls() {
  const slides = [
    { src: "/caro/1.jpg", label: "Discover Venue 1" },
    { src: "/caro/2.png", label: "Discover Venue 2" },
    { src: "/caro/3.png", label: "Discover Venue 3" },
    { src: "/caro/4.png", label: "Discover Venue 4" },
    { src: "/caro/5.png", label: "Discover Venue 5" },
    { src: "/caro/6.png", label: "Discover Venue 6" },
    { src: "/caro/7.png", label: "Discover Venue 7" },
    { src: "/caro/8.png", label: "Discover Venue 8" },
    { src: "/caro/9.png", label: "Discover Venue 9" },
    { src: "/caro/10.png", label: "Discover Venue 10" }
  ];

  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .fade-wrapper {
          position: relative;
          width: 34rem;
          height: 18rem;
          border-radius: 16px;
          overflow: hidden;
          margin-top: -14rem;
          left: 60%;
          
        }

        .fade-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
        }

        .fade-slide.active {
          opacity: 1;
        }

        .fade-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fade-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          padding: 10px 18px;
          background: rgba(0,0,0,0.55);
          color: white;
          font-size: 20px;
          border-radius: 8px;
        }

        /* control bar styling */
        .control-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
          position: relative;
          right: 25%;
          bottom: 3rem;
        }

        .control-dot {
          width: 40px;
          height: 4px;
          border-radius: 4px;
          background: rgba(255,255,255,0.25);
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .control-dot.active {
          background: #c6a16a; /* gold color like your UI */
        }
      `}</style>

      <div>
        <div className="fade-wrapper">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`fade-slide ${i === index ? "active" : ""}`}
            >
              <img src={slide.src} className="fade-img" />
              <div className="fade-label">{slide.label}</div>
            </div>
          ))}
        </div>

        {/* control bar */}
        <div className="control-bar">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`control-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
