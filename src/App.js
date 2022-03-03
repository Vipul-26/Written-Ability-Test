import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/Form/index';
import Home from "./components/Home";
import Sets from "./components/Sets";
import PracticeSet from './components/PracticeSet';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/sets" component={Sets} />
          <Route exact path="/set:id" component={PracticeSet} />
        </Switch>
      </Router>
    </div>
  );
}
