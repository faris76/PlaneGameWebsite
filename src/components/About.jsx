import React from "react";
import WatchTrailer from "../assets/WatchTrailer.jpg";
import Container from "./Container";
import YtButton from "../assets/ytPlay.png";
const About = () => {
  const mobileView = (
    <div className="bg-white rounded-md md:hidden">
      <div>
        <img src={WatchTrailer} className="p-4 mx-auto rounded-md" />
      </div>
      <div className="p-4">
        <p className="text-2xl font-semibold">A Plane Game</p>
        <p className="mt-2 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
          laboriosam quaerat obcaecati error corrupti
        </p>
        <div className="flex items-center gap-2 mt-3">
          <img src={YtButton} width={42} />
          <p>Watch Trailer</p>
        </div>
      </div>
    </div>
  );

  const pcView = (
    <div className="items-center hidden md:flex w-[100%]">
      <div className="w-[50%] h-44 bg-white z-10 translate-x-10 text-right">
        <div className="p-6">
          <p className="text-2xl font-semibold">A Plane Game</p>
          <p className="mt-2 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            laboriosam quaerat obcaecati error corrupti
          </p>
          <div className="flex items-center justify-end gap-2 mt-3">
            <img src={YtButton} width={42} />
            <p>Watch Trailer</p>
          </div>
        </div>
      </div>

      <div className="h-72 bg-center bg-no-repeat bg-cover bg-watchTrailer w-[50%]"></div>
    </div>
  );
  return (
    <div className="bg-[#D9D9D9] curve-both">
      <div className="max-w-screen-2xl mx-auto h-[85vh] md:h-[60vh] flex items-center justify-center mt-[-100px]">
        <div className="flex items-center justify-center w-[80%] h-[50%]">
          {mobileView}
          {pcView}
        </div>
      </div>
    </div>
  );
};

export default About;
