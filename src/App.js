import React, { useState } from "react";
import Stories from "./components/Stories";
import News from "./components/News";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [userQuery, setUserQuery] = useState("");

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
      <Stories />
    </div>
  );
}

export default App;
