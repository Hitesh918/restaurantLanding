import SearchIcon from '@mui/icons-material/Search';


const BreadCrumbs = () => {

    return (
        <div className="bread-crumbs-container">
  <style>
        {`
          .search-bar {
            width: 100%;
            height: 11rem;
            background: white;
            padding: 30px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
          }

          @media (max-width: 768px) {
            .search-bar {
              flex-direction: column;
              height: auto;
              padding: 20px;
            }
          }

          .search-section {
            display: flex;
            gap: 40px;
            align-items: center;
          }

          @media (max-width: 768px) {
            .search-section {
              flex-direction: column;
              gap: 20px;
              margin-bottom: 20px;
              width: 100%;
            }
          }

          .search-block {
            display: flex;
            flex-direction: column;
            text-align: left;
          }

          .search-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 5px;
          }

          .search-sub {
            font-size: 13px;
            opacity: 0.6;
            max-width: 180px;
            line-height: 1.3;
          }

          /* SLANTED DIVIDER */
          .divider {
            width: 1.5px;
            height: 50px;
            background: rgba(0,0,0,0.2);
            transform: skewX(-18deg);
          }

          .explore-btn {
            background: #AA8453;
            color: black;
            padding: 14px 26px;
            border-radius: 4px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            border: none;
            font-size: 15px;
          }

          .search-icon {
            font-size: 16px;
          }
        `}
      </style>

      <div className="search-bar">

        <div className="search-section">

          {/* Block 1 */}
          <div className="search-block">
            <span className="search-title">Where's your party?</span>
            <span className="search-sub">Search by country, city, property name</span>
          </div>

          <div className="divider"></div>

          {/* Block 2 */}
          <div className="search-block">
            <span className="search-title">What's your event?</span>
            <span className="search-sub">Enter the preferred event type</span>
          </div>

          <div className="divider"></div>

          {/* Block 3 */}
          <div className="search-block">
            <span className="search-title">How many guests?</span>
            <span className="search-sub">Approx. number of attendees &nbsp; </span>
          </div>

        </div>

        <button className="explore-btn">
        <SearchIcon />
                Explore 12415 restaurants
        </button>

      </div>
        </div>
    );
}
export default BreadCrumbs;