import React from "react";
import Navbar from "./components/Navbar";
import HeroImage from "./assets/HeroImage.jpeg";
import DownlodeNow from "./components/DownlodeNow";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Leaderboard from "./components/Leaderboard";
const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <div>
        <img
          src={HeroImage}
          alt=""
          className="w-[100vw] object-cover bg-no-repeat bg-center h-[90vh] curve z-0"
        />
      </div>
      <DownlodeNow />
      <About />
      <Gallery />
      <Leaderboard />
    </div>
  );
};

export default App;
