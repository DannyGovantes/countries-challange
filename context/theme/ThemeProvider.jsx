"use client";
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({ currentTheme: "dark" });
  const onHandleChamgeTheme = () => {
    if (theme.currentTheme === "dark") {
      setTheme({ currentTheme: "light" });
    } else {
      setTheme({ currentTheme: "dark" });
    }
  };

  const value = { onHandleChamgeTheme, theme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
