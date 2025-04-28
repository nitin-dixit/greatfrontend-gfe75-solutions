import { useState, useEffect } from "react";
import { MIN_VALUE, INTERVAL_SPEED_IN_MS, MAX_VALUE } from "../constants";

interface ProgressProps {
  incrementValue: number;
}

export const ProgressBar = ({ incrementValue }: ProgressProps) => {
  const [bar, setBar] = useState(MIN_VALUE);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setBar((prevBar) => {
        if (prevBar >= MAX_VALUE) {
          clearInterval(intervalID);
        }
        return Math.min(prevBar + incrementValue, MAX_VALUE);
      });
    }, INTERVAL_SPEED_IN_MS);

    return () => clearInterval(intervalID);
  }, []);
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ transform: `translateX(${bar - MAX_VALUE}%)` }}
      ></div>
      <span
        className="progress-label"
        style={{ color: bar < 50 ? "black" : "white" }}
      >
        {bar}%
      </span>
    </div>
  );
};
