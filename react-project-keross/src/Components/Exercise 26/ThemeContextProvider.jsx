// Todo: Create & manage context in this file
import React from "react";

export const ThemeContext = React.createContext({
  themes: "",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, toggleTheme] = React.useState("light");

  function handleToggleTheme() {
    toggleTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const themeCtx = {
    theme: theme,
    toggleTheme: handleToggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>
  );

  // Todo: Add the component code (incl. dynamic context value)
}
