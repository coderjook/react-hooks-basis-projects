import { useEffect, useState } from "react";

// data ophalen en in result opslaan. de compenenten die deze functie gebruiken
//const { setup, punchline } = useFetch("https://official-joke-api.appspot.com/jokes/random",{});

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  // ophalen data
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setResult(json));
  }, []);

  return result;
};
