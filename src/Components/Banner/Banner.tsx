import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../Images/Slide1.jpeg";
import slide2 from "../../Images/Slide2.jpeg";
import slide3 from "../../Images/Slide3.jpeg";
import slide4 from "../../Images/Slide4.jpeg";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function Banner() {
    
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    setInterval: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image priority className="w-full" src={slide1} alt="slide1" />
        </div>
        <div>
          <Image className="w-full " src={slide2} alt="slide2" />
        </div>
        <div>
          <Image className="w-full" src={slide3} alt="slide3" />
        </div>
        <div>
          <Image className="w-full" src={slide4} alt="slide4" />
        </div>
      </Slider>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
}

export default Banner;


 // <div className="relative">
    //   <Carousel
    //     autoPlay
    //     infiniteLoop
    //     showStatus={false}
    //     showIndicators={false}
    //     showThumbs={false}
    //     interval={3000}
    //   >
    //     <div>
    //       <Image src={slide1} alt="sliderImg" />
    //     </div>
    //     <div>
    //       <Image src={slide2} alt="sliderImg" />
    //     </div>
    //     <div>
    //       <Image src={slide3} alt="sliderImg" />
    //     </div>
    //   </Carousel>
    //   <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    // </div>
