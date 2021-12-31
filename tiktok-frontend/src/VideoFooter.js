import React from "react";
import MusicNote from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@somuser</h3>
        <p>This is a description</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>This is a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="Spinning Record"
        className="videoFooter__record"
      />
    </div>
  );
}

export default VideoFooter;
