import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css"; // Import the scale-out animation
import YouTube from "react-youtube";

const Level = () => {
  const videos = [
    "zeCEHkStkXo",
    "Nq1G0J1R2oQ",
    "4XHm7PCWtGo",
    "l7MpKgu8EEM",
    "CYUbbwLo2DA",
    "aThNgPDeLj8",
    // Add more video IDs as needed
  ];

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const sliderRef = useRef();

  const onSlideChange = (currentIndex) => {
    // Pause the previous video when a new slide is selected
    if (sliderRef.current) {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
      const prevVideo = sliderRef.current?.slider?.ref?.childNodes[prevIndex];
      const prevPlayer = prevVideo?.querySelector("iframe");

      // Check if the previous video exists and is a YouTube iframe
      if (
        prevPlayer &&
        prevPlayer.src &&
        prevPlayer.src.includes("youtube.com")
      ) {
        // Extract the video ID from the YouTube iframe URL
        const prevVideoId = prevPlayer.src.split("/").pop().split("?")[0];

        // Pause the previous YouTube video
        window.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
          `https://www.youtube.com/embed/${prevVideoId}`
        );
      }
    }
  };

  return (
    <div className="curve-leaderboard" id="level">
      <div className="max-w-screen-2xl w-[80%] mx-auto h-[50vh] lg:h-[90vh] flex flex-col items-center">
        <div className="text-3xl font-medium uppercase md:text-4xl mt-9">
          Levels
        </div>
        <div className="w-full md:[80%] h-full md:h-[80%] mt-8">
          <AwesomeSlider
            animation="scaleOutAnimation"
            onTransitionEnd={onSlideChange}
            ref={sliderRef}
          >
            {videos.map((videoId, index) => (
              <div key={index}>
                <YouTube videoId={videoId} opts={opts} className="w-[800px]" />
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default Level;
