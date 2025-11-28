  const items1 = [
    { img: "/l1.jpg", title: "Destination 01" },
    { img: "/l2.jpg", title: "Destination 02" },
    { img: "/l3.jpg", title: "Destination 03" },
  ];

  const items2 = [
    { img: "/l4.jpg", title: "Destination 04" },
    { img: "/l5.jpg", title: "Destination 05" },
    { img: "/l1.jpg", title: "Destination 01" },
  ];

const AvailableAcross = () => {
    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem 0'}}>
            <img style={{width : '90%' , maxWidth: '1400px', marginTop : "2rem" , marginBottom : "2rem"}} src="/across.png" alt="Available Across Canada" />
            <div className="gallery-grid">
      {items1.map((item, idx) => (
        <div key={idx} className="gallery-card">
          <img  src={item.img} alt={item.title} className="gallery-img" />

          {/* overlay */}
          <div className="gallery-overlay">
            <span className="gallery-tag">EXPLORE</span>
            <div className="gallery-text">
              <p className="subtext">TOP RATED RESTAURANT</p>
              <h3>{item.title}</h3>
            </div>
          </div>
        </div>
      ))}

    </div>

    <div className="gallery-grid"  style={{marginTop : '2rem' , marginBottom : '3rem'}}>
      {items2.map((item, idx) => (
        <div style={{width : '100%'}} key={idx} className="gallery-card">
          <img  src={item.img} alt={item.title} className="gallery-img" />
            {/* overlay */}
            <div className="gallery-overlay">
                <span className="gallery-tag">EXPLORE</span>
                <div className="gallery-text">
                    <p className="subtext">TOP RATED RESTAURANT</p>
                    <h3>{item.title}</h3>
                </div>
            </div>
        </div>
      ))}
    </div>

        </div>
    );
}
export default AvailableAcross;