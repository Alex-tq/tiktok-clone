import "./App.css";
import Videos from "./Videos";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Videos
          channel={"someUser"}
          song={"That song"}
          description={"This is a description"}
          likes={100}
          shares={10}
          messages={77}
          url="https://player.vimeo.com/external/463929634.sd.mp4?s=af141dfab13d19b090243b6eb2553c257cd43d75&profile_id=165&oauth2_token_id=57447761"
        />
        <Videos
          channel={"someUser"}
          song={"That song"}
          description={"This is a description"}
          likes={100}
          shares={10}
          messages={77}
          url="https://player.vimeo.com/external/463929634.sd.mp4?s=af141dfab13d19b090243b6eb2553c257cd43d75&profile_id=165&oauth2_token_id=57447761"
        />
      </div>
    </div>
  );
}

export default App;
