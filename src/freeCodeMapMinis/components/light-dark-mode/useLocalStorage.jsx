import { useState, useEffect } from "react";

// lightTheme, true or false
export default function UseLocalStorage(key, defaultValue) {
  // to manage local storage value
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // parse local storage value, if the value is null or undefined
      // then use the default value
      currentValue = JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  // to update local storage value whenever the state changes
  // the useEffect hook compares the current state with the previous state,
  // and only updates the local storage value if the current state is different
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  // retruns an array containing the current value
  //and a function to set the value
  return [value, setValue];
}
