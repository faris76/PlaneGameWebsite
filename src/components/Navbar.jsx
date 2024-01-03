import React from "react";

const Navbar = () => {
  const content = (
    <>
      <div>
        <ul>
          <li>
            <a href="#leaderboard">Leaderboard</a>
          </li>
          <li>
            <a href="#level">Levels</a>
          </li>
          <li>
            <a href="#enviroment">Enviroments</a>
          </li>
          <li>
            {" "}
            <a href="#assets">Assets</a>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="bg-primary ">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg-flex md:flex lg: flex-1 items-center justify-end font-normal ">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li>
                <a href="#leaderboard">Leaderboard</a>
              </li>
              <li>
                <a href="#level">Levels</a>
              </li>
              <li>
                <a href="#enviroment">Enviroments</a>
              </li>
              <li>
                {" "}
                <a href="#assets">Assets</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
