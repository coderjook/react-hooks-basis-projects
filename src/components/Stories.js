import React from "react";
import { useFetch } from "../Hooks";

const Stories = () => {
  const stories = useFetch(
    "https://news-proxy-server.appspot.com/topstories",
    []
  );

  return (
    <div className="Stories">
      <h3>Nieuw headline stories </h3>
      {/* stories elementen uitlezen en voor elk element een paar variabelen laten zien */}
      {/* {stories.map((story) => {
        const { id, by, time, title, url } = story;

        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Stories;
