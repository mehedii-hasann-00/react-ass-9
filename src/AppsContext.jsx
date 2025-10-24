// src/context/AppsContext.jsx
import { createContext, useState, useEffect } from "react";
import plantsData from "./data.json";

export const AppsContext = createContext();

export function AppsProvider({ children }) {
  const [plants, setPlantsData] = useState([]);

  useEffect(() => {
    setPlantsData(plantsData);
  }, []);

  return (
    <AppsContext.Provider value={{ plants }}>
      {children}
    </AppsContext.Provider>
  );
}
