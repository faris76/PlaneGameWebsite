import React from "react";
import ContainerWhite from "./ContainerWhite";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Image3 from "../assets/gallery3.jpg";
import aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  aos.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <div className="bg-white curve-gallery">
      <div className="max-w-screen-2xl mx-auto h-[135vh] md:h-[160vh] flex flex-col gap-16 md:gap-32 items-center justify-center mt-[-100px]">
        <div
          className="relative w-[80%] h-72 bg-gallery1 bg-center bg-cover bg-no-repeat border-2 border-black shadow-lg mt-16"
          data-aos="flip-left"
        >
          <img
            src={Icon1}
            w-full
            className="absolute  w-[100px] md:w-[150px] -right-10 -top-10 md:-right-16 md:-top-16"
          />
        </div>
        <div
          className="relative w-[80%] h-72 bg-gallery2 bg-center bg-cover bg-no-repeat border-2 border-black shadow-lg "
          data-aos="flip-left"
        >
          <img
            src={Icon3}
            w-full
            className="absolute  w-[100px] md:w-[150px] -left-10 -top-10 md:-left-16 md:-top-16"
          />
        </div>
        <div
          className="relative w-[80%] h-72 bg-gallery3 bg-cover bg-no-repeat border-2 border-black shadow-lg bg-center"
          data-aos="flip-left"
        >
          <img src={Icon2} w-full className="absolute -right-10 -top-10" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
