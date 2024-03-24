// single selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    let copyMultiple = [...multiple];

    const findIndexOfCurrentid = copyMultiple.indexOf(currentId);
    
    if (findIndexOfCurrentid === -1) {
        copyMultiple.push(currentId);
    } else {
        copyMultiple.splice(findIndexOfCurrentid, 1);
    }
    setMultiple(copyMultiple);
  };
  
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Enable multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="item">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="acc-content ">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="acc-content ">{item.answer}</div>
                  )}
              {/* {selected === item.id ||
              multiple.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
