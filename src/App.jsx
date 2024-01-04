import React from "react";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";
import Level from "./components/Level";
import Enviroment from "./components/Enviroment";
import Assets from "./components/Assets";
import HeroImage from "./assets/HeroImage.jpeg";
import DownlodeNow from "./components/DownlodeNow";
import About from "./components/About";
const App = () => {
  return (
    <div className="bg-base">
      <Navbar />
      <div>
        <img
          src={HeroImage}
          alt=""
          className="w-[100vw] object-cover bg-no-repeat bg-center h-[90vh] md:h-[95vh] curve z-0"
        />
      </div>
      <DownlodeNow />
      <About />
    </div>
  );
};

export default App;
