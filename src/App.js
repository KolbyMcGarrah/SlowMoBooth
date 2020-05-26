import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./scss/slomo.css";

import MainDisplay from "./components/Displays/MainDisplay"
import Header from "./components/Layout/Header"
import AdminMain from "./components/Admin/AdminMain"

function App() {

  return (
    <Router>
      <div>
        <div className="container">
          <Header />
          <Route path="/" exact component={MainDisplay} />
          <Route path="/admin" exact component={AdminMain} />
        </div>
      </div>
    </Router>
  );
}

export default App;
