import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBarComponent from "../Navbar";
import Timer from "../Timer/index";
import "./practiceSet.css";

const PracticeSet = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { words, selval, selbell, userName } =
    (location && location.state) || [];
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= words.length) {
      setCurrentIndex(0);
      window.alert("Thank you for taking this test");
      navigate(`/`);
    }
  }, [currentIndex]);

  return (
    <>
      <NavBarComponent data={userName} />
      <div className="setDiv">
        <img src="set.png" className="imgSet" alt="set" title="set" />
        <div className="contentSet">
          <img src="time.png" className="imgWid" alt="time" title="time" />
          <p className="paraP">Remaining Time:</p>
          <Timer
            timer={selval}
            bell={selbell}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <div className="word-container">
            <p>Below is the word:-</p>
            <h1 className="word">{words[currentIndex]}</h1>
          </div>
        </div>
      </div>
      <a href="/" className="anchor">
        Back To HomePage
      </a>
    </>
  );
};

export default PracticeSet;
