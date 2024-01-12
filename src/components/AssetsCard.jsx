import React from "react";

const AssetsCard = ({ imageUrl, title, author }) => {
  return (
    <div className="w-72 h-72 bg-[#D9D9D9] rounded-lg shadow-lg p-3 mx-auto">
      <img src={imageUrl} className="rounded-lg" alt={title} />
      <div className="my-2 text-xl font-medium capitalize">{title}</div>
      <div className="text-sm">by</div>
      <div className="text-sm">{author}</div>
    </div>
  );
};

export default AssetsCard;
