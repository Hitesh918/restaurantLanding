import { useEffect, useState } from "react";
import FadeCarousel from "./FadeCarousel";

const TopVenues = () => {
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

    const [activeIndex, setActiveIndex] = useState(0);

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div style={{ backgroundColor: 'black', padding: '6rem 4rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <style>
                {`
          .top-venues-flex {
            display: flex;
            align-items: flex-start;
            gap: 5rem;
            max-width: 1400px;
            margin: auto;
            width: 100%;
          }
          @media (max-width: 992px) {
            .top-venues-flex {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 3rem;
            }
          }
          .top-venues-left {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          @media (max-width: 992px) {
            .top-venues-left {
              align-items: center;
            }
          }
          .top-venues-title h1 {
            font-size: 8rem;
            font-weight: 800;
            color: #AA8453;
            line-height: 0.8;
            margin: 0;
            text-align: left;
          }
          @media (max-width: 1200px) {
            .top-venues-title h1 {
              font-size: 6rem;
            }
          }
          @media (max-width: 480px) {
            .top-venues-title h1 {
              font-size: 4rem;
            }
          }
          .top-venues-right {
            flex: 2;
            color: white;
            padding-top: 1rem;
          }
          @media (max-width: 992px) {
            .top-venues-right {
              padding-top: 0;
            }
          }
          .tb-heading {
            font-size: 2.2rem;
            line-height: 1.3;
            font-weight: 400;
            margin: 0 0 1rem 0;
          }
          @media (max-width: 480px) {
            .tb-heading {
              font-size: 1.8rem;
            }
          }
          .tb-highlight {
            color: #AA8453;
            font-weight: 600;
          }
          .tb-para {
            margin-top: 1rem;
            font-size: 0.9rem;
            line-height: 1.55;
            opacity: 0.8;
            max-width: 500px;
          }
          .tb-small {
            margin-top: 1rem;
            font-size: 1rem;
            opacity: 0.9;
          }
          .carousel-controls {
            display: flex;
            gap: 10px;
            margin-top: 2rem;
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
            background: #c6a16a;
          }
        `}
            </style>
            <div className="top-venues-flex">
                <div className="top-venues-left">
                    <div className="top-venues-title">
                        <h1>TOP <br /> VENUES</h1>
                    </div>
                    <div className="carousel-controls">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`control-dot ${i === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(i)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="top-venues-right">
                    <p className="tb-heading">
                        Introducing <span className="tb-highlight">Top Restaurants</span>,
                        your guide to discovering the finest venue.
                    </p>
                    <p className="tb-para">
                        By exploring each venue through the lens of a professional event
                        organizer, we deliver in-depth insights and critical details,
                        helping you make well-informed decisions for your upcoming events.
                    </p>
                    <p className="tb-small">
                        Check out our latest feature on SO/ Uptown below and get inspired!
                    </p>
                    <FadeCarousel slides={slides} activeIndex={activeIndex} />
                </div>
            </div>
        </div>
    );
};
export default TopVenues;
