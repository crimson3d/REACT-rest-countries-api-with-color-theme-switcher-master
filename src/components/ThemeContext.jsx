import React, { createContext, useState, useEffect } from "react";

const applyTheme = (isDark) => {
  const root = document.documentElement;
  if (isDark) {
    root.style.setProperty("--primary-color", "var(--primary-color-dark)");
    root.style.setProperty("--secondary-color", "var(--secondary-color-dark)");
    root.style.setProperty("--text-color", "var(--text-color-dark)");
    root.style.setProperty(
      "--input-background",
      "var(--input-background-dark)"
    );
  } else {
    root.style.setProperty("--primary-color", "var(--primary-color-light)");
    root.style.setProperty("--secondary-color", "var(--secondary-color-light)");
    root.style.setProperty("--text-color", "var(--text-color-light)");
    root.style.setProperty(
      "--input-background",
      "var(--input-background-light)"
    );
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    return savedDarkMode !== null ? savedDarkMode : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext();
