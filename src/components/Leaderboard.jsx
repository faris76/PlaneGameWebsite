import React from "react";
import GoldMedal from "../assets/gold-medal.png";
import SilverMedal from "../assets/silver-medal.png";
import BronzeMedal from "../assets/bronze-medal.png";
import LeaderboardTile from "./LeaderboardTile";
const Leaderboard = () => {
  return (
    <div className="bg-[#D9D9D9] curve-both" id="leaderboard">
      <div className="max-w-screen-2xl w-[80%] mx-auto h-[85vh] lg:h-[85vh] flex flex-col items-center">
        <div className="mt-16">
          <div className="text-3xl uppercase font-medium mt-4">Leaderboard</div>
        </div>
        <dir className=" gap-8 items-center mt-12 hidden md:flex">
          <div className="bg-white w-40 text-xl h-10 px-2 py-6  flex items-center gap-2  rounded-xl shadow-lg">
            <div>
              <img src={SilverMedal} width={28} />
            </div>
            <div>@Salman</div>
          </div>
          <div className="bg-white w-52 text-2xl py-9 h-10 px-2  flex items-center gap-2 rounded-xl shadow-lg">
            <div>
              <img src={GoldMedal} width={28} />
            </div>
            <div>@Faris_mufti</div>
          </div>
          <div className="bg-white w-40 text-xl h-10 px-2 py-6  flex items-center gap-2  rounded-xl shadow-lg">
            <div>
              <img src={BronzeMedal} width={28} />
            </div>
            <div>@Ameer</div>
          </div>
        </dir>
        <div className="mt-16 md:mt-8 flex justify-between w-full text-xl font-medium">
          <div className="w-full">Username</div>
          <div className="w-full text-center">Rank</div>
          <div className="w-full text-end">Score</div>
        </div>
        <div className="flex flex-col justify-between w-full text-xl font-medium md:hidden">
          <LeaderboardTile
            username={"@Faris_mufti"}
            rank={1}
            score={700}
            icon={GoldMedal}
          />
          <LeaderboardTile
            username={"@Salman"}
            rank={2}
            score={600}
            icon={SilverMedal}
          />
          <LeaderboardTile
            username={"@Ameer"}
            rank={3}
            score={500}
            icon={BronzeMedal}
          />
        </div>

        <LeaderboardTile username={"@Arsalan"} rank={4} score={400} />
        <LeaderboardTile username={"@Usman"} rank={5} score={300} />
        <LeaderboardTile username={"@Uzair"} rank={6} score={200} />
        <LeaderboardTile username={"@Ali"} rank={7} score={100} />
      </div>
    </div>
  );
};

export default Leaderboard;
