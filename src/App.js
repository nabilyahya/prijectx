import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Routes from "routes/Routes";
import GusteLayout from "./layouts/GusteLayout";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <div className="App">
        <Router>
          {window.location.pathname === "/admin" ? (
            <Routes />
          ) : (
            <GusteLayout>
              <Routes />
            </GusteLayout>
          )}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
