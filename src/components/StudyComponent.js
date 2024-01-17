import React, { useRef, useState, useEffect } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoChevronBackCircleSharp, IoChevronForwardCircle  } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";



const StudyComponent = () => {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = ["/assets/video1.mp4", "/assets/video2.mp4"];

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  useEffect(() => {
    const handleEnded = () => {
      handleNextVideo();
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleEnded);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentVideoIndex]);

  return (
    <div className="flex flex-col items-center">
      <div className=" w-full md:w-2/3 lg:w-1/2 mt-4">
        <div >
          <video
            className="rounded-lg"
            ref={videoRef}
            src={videos[currentVideoIndex]}
            type="video/mp4"
            controls
          />
        </div>
        <div className="flex justify-between w-full items-center ">
          <IoIosRefresh
            onClick={handleReplay}
            size={30}
            className="font-bold text-blue-800"
          />
          <IoChevronBackCircleSharp
            onClick={handlePrevVideo}
            size={50}
            className="text-blue-800"
          />
          <div className="text-2xl font-bold text-gray-700">
            {currentVideoIndex + 1} / {videos.length}
          </div>
          <IoChevronForwardCircle
            onClick={handleNextVideo}
            size={50}
            className="text-blue-800"
          />
          <MdFullscreen
            onClick={handleFullscreen}
            size={25}
            className="text-blue-800"
          />
        </div>
      </div>
    </div>
  );
};

export default StudyComponent;
