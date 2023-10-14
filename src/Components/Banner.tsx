import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../Images/Slide1.jpeg";
import slide2 from "../Images/Slide2.jpeg";
import slide3 from "../Images/Slide3.jpeg";
import slide4 from "../Images/Slide4.jpeg";

function Banner() {
  return (
    <div>
      <Carousel
        className="relative"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={slide1} alt="slide 1" />
        </div>
        <div>
          <Image src={slide2} alt="slide 2" />
        </div>
        <div>
          <Image src={slide3} alt="slide 3" />
        </div>
        <div>
          <Image src={slide4} alt="slide 4" />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
}

export default Banner;
