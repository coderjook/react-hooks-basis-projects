import React, { useState, useEffect } from "react";
import PICTURES from "./data/pictures";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + 1) % PICTURES.length;
      });
    }, 3000);

    //kill de interval als component wordt verborgen
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt={PICTURES[index].image} />
    </div>
  );
};

export default Gallery;
