import FadeCarousel from "./FadeCarousel";
const TopVenues = () => {
    return (
        
        <div style={{backgroundColor : 'black ' }} >

             <style>
        {`
          .tb-container {
          max-width: 50rem;
            color: white;
            position: absolute;
            left: 38%;
            top: 352%;
            text-align: left;

          }

          .tb-heading {
            font-size: 2.5rem;
            line-height: 1.3;
            font-weight: 400;
          }

          .tb-highlight {
          
            color: #AA8453;
            font-weight: 600;
          }

          .tb-sub {
            font-size: 1.5rem;
            margin-top: 6px;
            line-height: 1.3;
            opacity: 0.9;
          }

          .tb-para {
            margin-top: 16px;
            font-size: 12px;
            line-height: 1.55;
            opacity: 0.8;
          }

          .tb-small {
            margin-top: 12px;
            font-size: 18px;
            opacity: 0.8;
          }
        `}
      </style>

       <div  className="tb-container">
        <p className="tb-heading">
          Introducing <span className="tb-highlight">Top Restaurants</span>
        </p>

        <p style={{marginTop : "-1rem"}} className="tb-heading">
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
      </div>

             <img style={{width : '20%' , marginTop : "3rem" , position: "relative" , right : "30%"}} src="/top.png" alt="Available Across Canada" />
             <br />
             <img style={{width : '40%' , marginTop : "2rem" , marginBottom : "3rem", position: "relative" , right : "20%"}} src="/venues.png" alt="Available Across Canada" />
            <FadeCarousel />

        
        </div>
    );
}
export default TopVenues;