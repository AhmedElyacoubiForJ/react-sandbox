import "./styles.css";
import { useState } from "react";
import Text from "./Text";

export default function ComponetLifecycleExample() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="AppL">
      <h1>Component Lifecycle Example</h1>
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </div>
  );
}
// mounting, updating and unmounting
