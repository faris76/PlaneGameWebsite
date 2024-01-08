import React from "react";
import WatchTrailer from "../assets/WatchTrailer.jpg";
const About = () => {
  return (
    <div className="curve-both bg-primary h-[60vh] mt-[-75px] flex">
      <div className="">
        <div className="w-1/2">
          <div>Watch Now</div>
          <div>
            <img src={WatchTrailer} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
