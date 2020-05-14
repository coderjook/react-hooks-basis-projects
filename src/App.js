import React, { useState } from "react";
import Stories from "./components/Stories";
import News from "./components/News";
import Tasks from "./components/Tasks";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  const [userQuery, setUserQuery] = useState("");
  const [showGallery, setShowGallery] = useState(true);

  // input value -update
  const updateUserQuery = (event) => {
    setUserQuery(event.target.value);
  };

  // input searchQuery bij enter toets
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  // input value naar google in a new tab
  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  // helpermethod om de gallery te verbergen en te laten verschijnen
  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="App">
      <h1>Hallo Jook</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Google Search</button>
      </div>
      <hr />
      <Tasks />
      <hr />
      <News />
      <hr />
      <div>
        {showGallery ? <Gallery /> : null}
        <button onClick={toggleShowGallery}>
          {showGallery ? "Hide" : "Show"}
        </button>
      </div>

      <hr />
      <Stories />
    </div>
  );
}

export default App;
