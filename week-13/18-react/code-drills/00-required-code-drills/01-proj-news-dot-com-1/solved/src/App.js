import React, { Component } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/Home"
 

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        </Switch>
    </Router>
    );
  }
}

export default App;
