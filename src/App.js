import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ReactNotification from "react-notifications-component";
import Home from "./Pages/Home/Main";
import "react-notifications-component/dist/theme.css";



class App extends Component {
  render() {
    return (
      <Router>
        <ReactNotification />
        <Switch>
          <Route path="/" >
            <Home />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
