import React from "react";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route
          path="/"
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route
          path="*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
