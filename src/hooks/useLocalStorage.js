import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  //? localStorage is a browser API. It is available on the Browser
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
