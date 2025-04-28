import { useState, useEffect } from "react";

interface ProgressBarProps {
  progress: number;
  onComplete: () => void;
}

export const ProgressBar = ({ progress, onComplete }: ProgressBarProps) => {
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFillWidth(progress);
    }, 100);
    return () => clearTimeout(timeout);
  }, [progress]);

  // Notify parent when animation completes
  useEffect(() => {
    if (fillWidth >= 100) {
      onComplete();
    }
  }, [fillWidth, onComplete]);

  const isComplete = fillWidth >= 100;

  return (
    <div className="bar-container">
      <div
        className="bar-contents bar-contents-filled"
        style={{
          transform: `scaleX(${fillWidth / 100})`,
        }}
        role="progressbar"
        aria-valuenow={fillWidth}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
      <span className="progress-label">
        {progress}%
        {isComplete && (
          <span
            className="progress-check"
            aria-label="Complete"
            style={{ marginLeft: 8, color: "green" }}
          >
            ✔️
          </span>
        )}
      </span>
    </div>
  );
};

