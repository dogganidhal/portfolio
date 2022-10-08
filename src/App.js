import React, { useContext } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { ThemeContext } from "./theme";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
