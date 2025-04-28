import { ProgressBar } from "./components/ProgressBar";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <button className="toggleButton" onClick={handleToggle}>
        Toggle
      </button>
      {visible && <ProgressBar incrementValue={1} />}
    </div>
  );
}
