import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (darkMode) {
      return document.querySelector("body").classList.toggle("dark-mode");
    }
    return document.querySelector("body").classList.toggle("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode, storedValue, setValue];
};
