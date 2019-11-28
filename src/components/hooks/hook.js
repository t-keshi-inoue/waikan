import { useState } from "react";

export const useValues = () => {
  const [values, setValues] = useState([]);
  return { values, setValues };
};
