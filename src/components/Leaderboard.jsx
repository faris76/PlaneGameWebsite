import React from "react";
import GoldMedal from "../assets/gold-medal.png";
import SilverMedal from "../assets/silver-medal.png";
import BronzeMedal from "../assets/bronze-medal.png";
import LeaderboardTile from "./LeaderboardTile";
const Leaderboard = () => {
  return (
    <div className="bg-[#D9D9D9] curve-leaderboard" id="leaderboard">
      <div className="max-w-screen-2xl w-[80%] mx-auto h-[85vh] lg:h-[85vh] flex flex-col items-center">
        <div className="mt-16">
          <div className="mt-4 text-3xl font-medium uppercase">Leaderboard</div>
        </div>
        <dir className="items-center hidden gap-8 mt-12 md:flex">
          <div className="flex items-center w-40 h-10 gap-2 px-2 py-6 text-xl bg-white shadow-lg rounded-xl">
            <div>
              <img src={SilverMedal} width={28} />
            </div>
            <div>@Salman</div>
          </div>
          <div className="flex items-center h-10 gap-2 px-2 text-2xl bg-white shadow-lg w-52 py-9 rounded-xl">
            <div>
              <img src={GoldMedal} width={28} />
            </div>
            <div>@Faris_mufti</div>
          </div>
          <div className="flex items-center w-40 h-10 gap-2 px-2 py-6 text-xl bg-white shadow-lg rounded-xl">
            <div>
              <img src={BronzeMedal} width={28} />
            </div>
            <div>@Ameer</div>
          </div>
        </dir>
        <div className="flex justify-between w-full mt-16 text-xl font-medium md:mt-8">
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
