import { useState, useEffect } from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFillWidth(progress);
    }, 100);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="bar-container">
      <div
        className="bar-contents bar-contents-filled"
        style={{
          width: `${fillWidth}%`, // Use direct width control
          transition: "width 2s ease", // Add smooth transition for width change
        }}
      ></div>
      <span className="progress-label">{progress}%</span>
    </div>
  );
};

export default function App() {
  const [bars, setBars] = useState<number[]>([]);

  const handleClick = () => {
    const progress = Math.floor(Math.random() * 101);
    setBars((b) => [...b, progress]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      {bars.map((progress, index) => (
        <ProgressBar key={index} progress={progress} />
      ))}
    </div>
  );
}
