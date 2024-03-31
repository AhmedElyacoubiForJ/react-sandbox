import { useState } from "react";

import "./tabs.css";

export default function Tabs({ content, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnclick(currentTabIndex) {
    setCurrentTabIndex((c) => (c = currentTabIndex));
    onChange(currentTabIndex);
  }

  return (
    <>
      <div className="wrapper">
        <div className="heading">
          {content.map((item, index) => (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              }`}
              onClick={() => handleOnclick(index)}
              key={item.label}
            >
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="content" style={{ color: "red" }}>
          {content[currentTabIndex] && content[currentTabIndex].content}
        </div>
      </div>
    </>
  );
}
