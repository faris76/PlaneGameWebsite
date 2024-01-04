import React from "react";

const DownlodeNow = () => {
  return (
    <div className="text-fontColor curve-both h-[70vh] flex flex-col gap-16 items-center px-8  mt-[-90px]">
      <div className="text-4xl uppercase mt-28">Available On</div>
      <div className="gap-20 md:flex">
        <img
          className="md:h-32"
          src="https://www.worldofairports.com/assets/page/images/app-store-badge.png"
          alt=""
        />
        <img
          className="md:h-32"
          src="https://www.worldofairports.com/assets/page/images/google-play-badge.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DownlodeNow;
