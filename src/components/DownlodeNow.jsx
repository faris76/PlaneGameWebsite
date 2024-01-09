import React from "react";
import ContainerWhite from "./ContainerWhite";

const DownlodeNow = () => {
  return (
    <ContainerWhite>
      <div className="max-w-screen-2xl mx-auto h-[65vh] lg:h-[50vh] flex items-center justify-center mt-[-100px]">
        <div className="flex items-center justify-center w-[80%] h-[60%] flex-col gap-12">
          <div className="text-4xl uppercase">Available On</div>
          <div className="flex flex-col gap-4 md:gap-32 md:flex-row">
            <img
              className="md:h-24"
              src="https://www.worldofairports.com/assets/page/images/app-store-badge.png"
              alt=""
            />
            <img
              className="md:h-24"
              src="https://www.worldofairports.com/assets/page/images/google-play-badge.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </ContainerWhite>
  );
};

export default DownlodeNow;
