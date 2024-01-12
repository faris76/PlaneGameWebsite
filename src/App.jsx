import React from "react";
import Navbar from "./components/Navbar";
import HeroImage from "./assets/HeroImage.jpeg";
import DownlodeNow from "./components/DownlodeNow";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Leaderboard from "./components/Leaderboard";
import Level from "./components/Level";
import Enviroment from "./components/Enviroment";
import Assets from "./components/Assets";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <div>
        <img
          id="Home"
          src={HeroImage}
          alt=""
          className="w-[100vw] object-cover bg-no-repeat bg-center md:h-[90vh] h-[80vh] curve z-0"
        />
      </div>
      <DownlodeNow />
      <About />
      <Gallery />
      <Leaderboard />
      <Level />
      <Enviroment />
      <Assets />
      <Footer />
    </div>
  );
};

export default App;
