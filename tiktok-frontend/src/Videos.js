import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Video.css";
import VideoSidebar from "./VideoSidebar.js";

function Videos({ url, channel, description, song, likes, shares, messages }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState();

  const handleClick = (e) => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleClick}
        loop
        src={url}
      ></video>
      <VideoFooter channel={channel} song={song} description={description} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Videos;
