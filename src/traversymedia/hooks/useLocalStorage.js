import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    getLocaStorageValue(key, initialValue);
  });

  const setValue = (value) => {
    // check if value is a function
    const valueToStore = value instanceof Function ? value(localStorageValue) : value;
    
    // Set to state
    setLocalStorageValue(value);
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocaStorageValue(key, initialValue) {
  const itemFormStorage = localStorage.getItem(key);
  return itemFormStorage ? JSON.parse(itemFormStorage) : initialValue;
}

export default useLocalStorage;
