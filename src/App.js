import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
