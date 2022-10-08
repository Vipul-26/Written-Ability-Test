import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './Components/Form/index';
import Home from "./Components/Home/index";
import Sets from "./Components/Sets/index";
import PracticeSet from './Components/PracticeSet/index';

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
