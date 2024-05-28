import { createContext, useState } from "react";

export const TextContext = createContext(null);

export const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  return (
    <TextContext.Provider value={{ texts, setTexts }}>
      {children}
    </TextContext.Provider>
  );
};
