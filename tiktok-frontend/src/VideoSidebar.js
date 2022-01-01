import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prev) => {
      return isLiked ? prev - 1 : prev + 1;
    });
  };
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button" onClick={handleClick}>
        {isLiked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{likeCount}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>250</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>123</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
