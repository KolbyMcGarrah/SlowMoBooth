import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./scss/slomo.css";

import AdminMain from "./components/Admin/AdminMain"
import WelcomeScreen from './components/Displays/WelcomeScreen';

function App() {

  return (
    <Router>
      <div>
        <div className="container">
          <Route path="/" exact component={WelcomeScreen} />
          <Route path="/admin" exact component={AdminMain} />
        </div>
      </div>
    </Router>
  );
}

export default App;
