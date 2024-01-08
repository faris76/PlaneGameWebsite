import React from "react";

const DownlodeNow = () => {
  return (
    <div className="text-black curve-both h-[70vh] md:h-[50vh] flex flex-col gap-16 items-center px-8  mt-[-90px]">
      <div className="text-4xl uppercase mt-28">Available On</div>
      <div className="gap-20 md:flex">
        <img
          className="md:h-24"
          src="https://www.worldofairports.com/assets/page/images/app-store-badge.png"
          alt=""
        />
        <img
          className="sm:h-24"
          src="https://www.worldofairports.com/assets/page/images/google-play-badge.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DownlodeNow;
