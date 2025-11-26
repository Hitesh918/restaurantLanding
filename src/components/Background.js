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

  const mainHeadingStyle = {
    position: "absolute",
    top: "30%",
    left: "42%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "4.5rem",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <div style={imageStyle}></div>
      <AppBar />
      <div>
        <h1 style={mainHeadingStyle}>Book private dining venue</h1>
        <p style={{
            position:"absolute",
            fontSize : "2rem",
            color: "white",
            left: "14%",
            top: "40%"
        }}>12,415 Restaurants</p>
      </div>
      <div>
        <BreadCrumbs />
      </div>      
      
    </div>
  );
};

export default Background;
