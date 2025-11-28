import AppBar from "./AppBar";
import BreadCrumbs from "./BreadCrumbs";

const Background = () => {
  const backgroundStyle = {
    width: "100%",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(/bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(50%)",
    zIndex: -1,
  };

  return (
    <div style={backgroundStyle}>
      <div style={imageStyle}></div>
      <AppBar />
      <div>
        <h1 className="main-heading">Book private dining venue</h1>
        <p className="sub-heading">12,415 Restaurants</p>
      </div>
      <div>
        <BreadCrumbs />
      </div>      
      
    </div>
  );
};

export default Background;
