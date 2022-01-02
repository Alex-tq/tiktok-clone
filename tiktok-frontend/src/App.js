import { useState, useEffect } from "react";
import "./App.css";
import Videos from "./Videos";

function App() {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://tiktok-clone-backend2.herokuapp.com/v2/posts`
    );
    const data = await res.json();
    setVideos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const videoList = videos.map((video) => (
    <Videos
      key={video.channel}
      channel={video.channel}
      song={video.song}
      description={video.description}
      likes={video.likes}
      shares={video.shares}
      messages={video.messages}
      url={video.url}
    />
  ));

  return (
    <div className="app">
      <div className="app__videos">{videoList}</div>
    </div>
  );
}

export default App;
