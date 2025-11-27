export default function AutoScrollCarousel() {
  const slides = [
    { src: "/slider/1.png", label: "Label 1" },
    { src: "/slider/2.png", label: "Label 2" },
    { src: "/slider/3.png", label: "Label 3" },
    { src: "/slider/4.png", label: "Label 4" },
    { src: "/slider/5.png", label: "Label 5" },
    { src: "/slider/6.png", label: "Label 6" }
  ];

  const loopSlides = [...slides, ...slides];

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
            display: inline-flex;     /* IMPORTANT: prevents flex shrinking/collapse */
            white-space: nowrap;      /* Keeps items in one line */
            animation: scroll 20s linear infinite;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .carousel-item {
            position: relative;
            width: 300px;
            height: 180px;
            margin-right: 30px;
            display: inline-block;   /* Prevents shrinking */
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
            bottom: 10px;
            left: 12px;
            padding: 6px 12px;
            background: rgba(0,0,0,0.6);
            color: white;
            border-radius: 6px;
            font-size: 14px;
          }
        `}
      </style>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {loopSlides.map((item, i) => (
            <div className="carousel-item" key={i}>
              <img src={item.src} className="carousel-img" />
              <div className="carousel-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
