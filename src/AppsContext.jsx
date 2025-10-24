// src/context/AppsContext.jsx
import { createContext, useState, useEffect } from "react";
import appsData from "./data.json";

export const AppsContext = createContext();

export function AppsProvider({ children }) {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(appsData);
  }, []);

  return (
    <AppsContext.Provider value={{ apps }}>
      {children}
    </AppsContext.Provider>
  );
}
