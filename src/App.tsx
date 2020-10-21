import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardItems from "./components/CardItems/CardItems";
import User from "./components/User/User";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h2>HOME PAGE</h2>
            <CardItems />
          </Route>
          <Route exact path="/users/:id">
            <h2>USER INFORMATION</h2>
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
