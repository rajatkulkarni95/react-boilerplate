import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { themes } from "./theme";
import { Header } from "./components/Header";
import { useLocalStorage } from "./hooks";

const App = () => {
  const [storedTheme, setStoredTheme] = useLocalStorage();

  const themeToggler = () => {
    storedTheme === "light" ? setStoredTheme("dark") : setStoredTheme("light");
  };

  return (
    <ThemeProvider theme={storedTheme === "light" ? themes.light : themes.dark}>
      <GlobalStyle />
      <Header handleClick={themeToggler} currentTheme={storedTheme} />
    </ThemeProvider>
  );
};

export default App;
