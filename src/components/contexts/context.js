import React, { createContext, useContext } from "react";
import { useValues } from "../hooks/hook";

export const ValuesContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const { values, setValues } = useValues();

  return (
    <ValuesContext.Provider value={{ values, setValues }}>
      {children}
    </ValuesContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ValuesContext);
