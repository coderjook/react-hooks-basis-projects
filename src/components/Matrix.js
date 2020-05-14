import React, { useState, useEffect } from "react";
import MATRIX_FRAMES from "../data/matrix";

const Matrix = () => {
  const [index, setIndex] = useState(0);
  // const [delay, setDelay] = useState(500);
  // const [increment, setIncrement] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + 1) % MATRIX_FRAMES.length;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={MATRIX_FRAMES[index]} alt={MATRIX_FRAMES[index]} />
    </div>
  );
};

export default Matrix;
