import React from "react";
import { useFetch } from "../Hooks";

const News = () => {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    {}
  );

  return (
    <div className="Stories">
      <h3>Joke </h3>
      <p>{setup}</p>
      <em>{punchline}</em>
    </div>
  );
};

export default News;
