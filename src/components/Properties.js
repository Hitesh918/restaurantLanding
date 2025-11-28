
import LogoStrips from "./LogoStrips";
import AutoScrollCarousel from "./AutoScrollCarousel";
const Properties = () => {

  const slidesData = [
  { src: "/PropertiesSlider/1.png", label: "Yachts" },
  { src: "/PropertiesSlider/2.png", label: "Hotels" },
  { src: "/PropertiesSlider/3.png", label: "Restaurants" },
  { src: "/PropertiesSlider/4.png", label: "Bars/Clubs" },
  { src: "/PropertiesSlider/5.png", label: "Resorts" },
  { src: "/PropertiesSlider/6.png", label: "Conference Centers" }
];

    return (
        
        <div style={{backgroundColor : 'black '}} >

                  <style>
        {`
          .para-container {
            text-align: center;
            color: white;
            margin-bottom: 2rem;
          }

          .para-line {
            margin: 4px 0;
            font-size: 28px;
            font-weight: 400;
          }

          .highlight-text {
            font-weight: 600;
            color: #AA8453;
          }
        `}
      </style>

           <img style={{width : '90%' , marginTop : "3rem" , marginBottom : "3rem"}} src="/properties.jpg" alt="Available Across Canada" />

           <div className="para-container">
      <p className="para-line">
        Join a growing network{" "}
        <span className="highlight-text">listed and Verified Restaurants</span>
      </p>

      <p className="para-line">
        Get noticed, Get Verified, and stand out to attract more
      </p>

      <p className="para-line">business today.</p>
    </div>

            <button style={{margin: '0 auto 2rem'}} className="explore-btn">
              Get your Restaurant Listed
            </button>
            
              <LogoStrips />
              
                <AutoScrollCarousel 
                slides={slidesData}
                direction="left"
                width={18}
                height={11}
                />
            
        </div>
    );
}
export default Properties;