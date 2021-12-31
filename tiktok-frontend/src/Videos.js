import React, { useRef, useState } from "react";
import "./Video.css";

function Videos() {
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
        src="https://player.vimeo.com/external/463929634.sd.mp4?s=af141dfab13d19b090243b6eb2553c257cd43d75&profile_id=165&oauth2_token_id=57447761"
      ></video>
    </div>
  );
}

export default Videos;
