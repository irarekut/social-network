import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
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
