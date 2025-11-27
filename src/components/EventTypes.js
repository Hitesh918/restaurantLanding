import AutoScrollCarousel from "./AutoScrollCarousel";

const EventTypes = () => {

    const slides1 = [
    { src: "/eventSlider/1.png", label: "Slide 1" },
    { src: "/eventSlider/2.png", label: "Slide 2" },
    { src: "/eventSlider/3.png", label: "Slide 3" },
    { src: "/eventSlider/4.png", label: "Slide 4" },
    { src: "/eventSlider/5.png", label: "Slide 5" },
  ];

  const slides2 = [
    { src: "/eventSlider/6.png", label: "Slide 6" },
    { src: "/eventSlider/7.png", label: "Slide 7" },
    { src: "/eventSlider/8.png", label: "Slide 8" },
    { src: "/eventSlider/9.png", label: "Slide 9" },
    { src: "/eventSlider/10.png", label: "Slide 10" },
  ];

    return (
        <div>
            <img style={{width : '72%' , marginTop : "2rem" , marginBottom : "2rem"}} src="/across.png" alt="Available Across Canada" />
            <AutoScrollCarousel 
                slides={slides1}
                direction="right"
                width={24}
                height={14}
            />
            
            <AutoScrollCarousel 
                slides={slides2}
                direction="left"
                width={24}
                height={14}
            />
        </div>
    );
}   

export default EventTypes;