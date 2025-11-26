export default function LogoStrips() {
  // put all your logo filenames here
  const logos = [
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
    "/logos/7.png",
    "/logos/8.png",
    "/logos/9.png",
    "/logos/10.png",
    "/logos/11.png",
    "/logos/12.png",
    "/logos/13.png",
    "/logos/14.png",
    "/logos/15.png",
    "/logos/16.png",
    "/logos/17.png",
    "/logos/18.png",
    "/logos/19.png",
    "/logos/20.png",
    "/logos/21.png",
    "/logos/22.png",
    "/logos/23.png",
    "/logos/24.png",
    "/logos/25.png",
    "/logos/26.png",
    "/logos/27.png",
    "/logos/28.png",
    "/logos/29.png",
    "/logos/30.png",
    "/logos/31.png",
    "/logos/32.png",
    "/logos/33.png",
    "/logos/34.png",
    "/logos/35.png",
    "/logos/36.png",
  ];

  // Split logos into 3 equal strips
  const strip1 = logos.slice(0, 12);
  const strip2 = logos.slice(12, 24);
  const strip3 = logos.slice(24, 36);

  return (
    <>
      <style>
        {`
          .strip-container {
            background: black;
            padding: 40px 0;
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            width: 100%;
            margin-bottom: 2rem;
          }

          .logo-strip-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;
            flex-wrap: nowrap;
            width: 100%;
          }

          .logo-item {
            height: 30px;
            opacity: 0.9;
            filter: grayscale(100%);
            transition: opacity 0.2s ease;
          }

          .logo-item:hover {
            opacity: 1;
            filter: grayscale(0%);
          }
        `}
      </style>
      <div className="strip-container">
        <div className="logo-strip-row">
          {strip1.map((src, i) => (
            <img key={i} src={src} alt={`logo-${i}`} loading="lazy" className="logo-item" />
          ))}
        </div>

        <div className="logo-strip-row">
          {strip2.map((src, i) => (
            <img key={i} src={src} className="logo-item" />
          ))}
        </div>

        <div className="logo-strip-row">
          {strip3.map((src, i) => (
            <img key={i} src={src} className="logo-item" />
          ))}
        </div>
      </div>
    </>
  );
}
