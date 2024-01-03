import React from "react";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";
import Level from "./components/Level";
import Enviroment from "./components/Enviroment";
import Assets from "./components/Assets";

const App = () => {
  return (
    <div className="bg-base h-[100vh]">
      <Navbar />
      <Leaderboard />
      <Level />
      <Enviroment />
      <Assets />
    </div>
  );
};

export default App;
