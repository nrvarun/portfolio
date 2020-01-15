import React from "react";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
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
