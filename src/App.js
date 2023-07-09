import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sets from "./components/Sets";
import PracticeSet from "./components/PracticeSet";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/sets" element={<Sets />} />
          <Route path="/set/:id" element={<PracticeSet />} />
        </Routes>
      </Router>
    </div>
  );
}
