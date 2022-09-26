import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBarComponent from '../Navbar/Navbar';
import Timer from "../Timer/index";
import './practiceSet.css';

const PracticeSet = (props) => {
  const history = useHistory();
  const { words, selval, selbell, userName } = (props.location && props.location.state) || [];
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= words.length) {
      setCurrentIndex(0);
      window.alert("Thank you for taking this test");
      history.push({
        pathname: `/`
      });
    }
  }, [currentIndex]);

  return (
    <>
      <NavBarComponent data={userName} />
      <div className="setDiv">
        <img src='./Set.png' className="imgSet" />
        <div className="contentSet">
          <img src="./Time.png" className="imgWid" />
          <p className="paraP">
            Remaining Time:
          </p>
          <Timer timer={selval} bell={selbell} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
          <div className="word-container">
            <p>
              Below is the word:-
            </p>
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
