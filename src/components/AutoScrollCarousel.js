
export default function AutoScrollCarousel({
  slides = [],
  direction = "left",      // "left" or "right"
  width = 300,             // width of each card
  height = 180             // height of each card
}) {

  // duplicate slides for infinite scrolling
  const loopSlides = [...slides, ...slides];

  // direction logic
  const animationDirection =
    direction === "right" ? "scroll-right" : "scroll-left";

  return (
    <>
      <style>
        {`
          .carousel-wrapper {
            width: 100%;
            overflow: hidden;
            background: black;
            padding: 20px 0;
          }

          .carousel-track {
            display: inline-flex;
            white-space: nowrap;
            animation: ${animationDirection} 20s linear infinite;
          }

          /* Scroll Left */
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Scroll Right */
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .carousel-item {
            position: relative;
            margin-right: 30px;
            display: inline-block;
            border-radius: 12px;
            overflow: hidden;
          }

          .carousel-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .carousel-label {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: none;
            color: white;
            font-size: 2rem;
            font-weight: 700;
            line-height: 1.25;
            white-space: normal;
            
          }

        `}
      </style>

      <div className="carousel-wrapper">
        <div style={{ animation: `${animationDirection} 20s linear infinite` }} className="carousel-track">
          {loopSlides.map((item, i) => (
            <div style={{width: `${width}rem`, height: `${height}rem`}} className="carousel-item" key={i}>
              <img src={item.src} className="carousel-img" />
              {item.label && (
                <div className="carousel-label">{item.label}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
