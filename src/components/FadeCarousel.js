export default function FadeCarousel({ slides = [], activeIndex = 0 }) {
  return (
    <>
      <style>{`
        .fade-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          margin-top: 1rem;
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
      `}</style>
      <div className="fade-wrapper">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`fade-slide ${i === activeIndex ? "active" : ""}`}
          >
            <img src={slide.src} className="fade-img" alt={slide.label} />
            <div className="fade-label">{slide.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
