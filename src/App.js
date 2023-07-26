import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Routes from "routes/Routes";
import GusteLayout from "./layouts/GusteLayout";
function App() {
  return (
    <div className="App">
      <Router>
        <GusteLayout>
          <Routes />
        </GusteLayout>
      </Router>
    </div>
  );
}

export default App;
