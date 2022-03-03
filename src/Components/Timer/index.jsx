import React, { useState, useEffect } from "react";
import bell_church from "../../asset/bell_church.mp3";
import bell_ring from "../../asset/bell_ring.mp3";
import bell_office from "../../asset/bell_office.mp3";
import bell_phone from "../../asset/bell_phone.mp3";
import './timer.css';

const Timer = ({ timer, bell, currentIndex, setCurrentIndex }) => {
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(timer);

  useEffect(() => {
    if (seconds <= time - 1) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      if (bell === "church") {
        let snd = new Audio(bell_church);
        snd.play();
      }
      else if (bell === "phone") {
        let snd = new Audio(bell_phone);
        snd.play();
      }
      else if (bell === "ring") {
        let snd = new Audio(bell_ring);
        snd.play();
      }
      else if (bell === "office") {
        let snd = new Audio(bell_office);
        snd.play();
      }
      setSeconds(0);
      setCurrentIndex(currentIndex + 1);
    }
  }, [seconds]);

  return (
    <h3 className="head">
      {seconds}<span class="tiny"> s</span>
    </h3>
  );
};

export default Timer;
