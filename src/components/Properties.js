
import LogoStrips from "./LogoStrips";
import AutoScrollCarousel from "./AutoScrollCarousel";
const Properties = () => {
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

           <img style={{width : '84%' , marginTop : "3rem" , marginBottom : "3rem"}} src="/properties.jpg" alt="Available Across Canada" />

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
            
              <LogoStrips />
              
                <AutoScrollCarousel />
            
        </div>
    );
}
export default Properties;