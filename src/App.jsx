import React from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header"; // ✅ import Header once

function App() {
  return (
    <Router>
      
      <AppRouter />
    </Router>
  );
}

export default App;
