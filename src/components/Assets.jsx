import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AssetsCard from "./AssetsCard"; // Import your AssetsCard component

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-prev"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      left: 10,
      zIndex: 1,
      background: "black",
      width: 40,
      height: 40,
      borderRadius: "50%",
    }}
    onClick={onClick}
  >
    Previous
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-next"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      right: 10,
      zIndex: 1,
      background: "black",
      width: 42,
      height: 42,
      borderRadius: "50%",
    }}
    onClick={onClick}
  >
    Next
  </div>
);

const AssetsSection = () => {
  const assetsData = [
    {
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/529c7156-3e6c-4713-8190-1a4caced9b6b.webp",
      title: "Rusty plane",
      author: "Unity",
    },
    {
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/c3047242-05de-4410-8e1e-b72071472d37.webp",
      title: "Radar System Lite",
      author: "Ilumisoft",
    },
    {
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/b07d610f-8512-4ed2-8d1f-3b9e7219afcf.webp",
      title: "Tween Animations ",
      author: "GOGO GAGA",
    },
    {
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/2da92f9f-42bb-4fae-8685-8d2d2ec22123.webp",
      title: "Heavy Fighter Aircrafts",
      author: "Beavy Store",
    },
    {
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/ea23793e-88af-4b2c-9469-243a3a928169.webp",
      title: "Fuel Tank 10L",
      author: "AK STUDIO ART",
    },
    {
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/dbf32f61-b7ee-4142-ace9-f7c6f92924dc.webp",
      title: "Gems Ultimate Animated",
      author: "AurynSky",
    },
    // Add more asset data as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="" id="assets">
      <div className="max-w-screen-2xl w-[80%] mx-auto h-[50vh] lg:h-[50vh] flex flex-col items-center">
        <div className="text-3xl font-medium uppercase md:text-4xl mt-9">
          Assets
        </div>
        <div className="w-full h-full mt-8">
          <Slider {...sliderSettings}>
            {assetsData.map((asset, index) => (
              <AssetsCard key={index} {...asset} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AssetsSection;
