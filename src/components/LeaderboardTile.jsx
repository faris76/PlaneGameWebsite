import React from "react";

const LeaderboardTile = ({ username, rank, score, icon }) => {
  return (
    <div className="w-full h-8 py-6 bg-white rounded-full mt-4 flex justify-between items-center px-4 text-lg shadow-lg">
      <div className="w-full">
        <div className="flex items-center">
          {icon ? <img src={icon} width={24} /> : null}
          <div className="text-sm">{username}</div>
        </div>
      </div>
      <div className="w-full text-center">{rank}</div>
      <div className="w-full text-end">{score}</div>
    </div>
  );
};

export default LeaderboardTile;
