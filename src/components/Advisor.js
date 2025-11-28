const Advisor = () => {
  const backgroundStyle = {
    width: "100%",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    minHeight: '100vh',
  };

  const imageStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "130%",
    backgroundImage: "url(/advisor.jpg)",
    backgroundSize: "cover",

  };

 
  return (
    <div style={backgroundStyle}>
      <div style={imageStyle}></div>
         
      
    </div>
  );
};

export default Advisor;
