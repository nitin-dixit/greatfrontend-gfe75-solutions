import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

type Bar = { id: string; progress: number; animating: boolean };

export default function App() {
  const [bars, setBars] = useState<Bar[]>([]);

  const handleClick = () => {
    const progress = 100;
    setBars((b) => [
      ...b,
      { id: crypto.randomUUID(), progress, animating: true },
    ]);
  };

  //handler to mark a bar as done animating
  const handleBarComplete = (id: string) => {
    setBars((bars) =>
      bars.map((bar) => (bar.id === id ? { ...bar, animating: false } : bar))
    );
  };

  //disable button if any bar is animating
  const isAnyAnimating = bars.some((bar) => bar.animating);

  return (
    <div>
      <button onClick={handleClick} disabled={isAnyAnimating}>
        Add
      </button>
      {bars.map((bar) => (
        <ProgressBar
          key={bar.id}
          progress={bar.progress}
          onComplete={() => handleBarComplete(bar.id)}
        />
      ))}
    </div>
  );
}
