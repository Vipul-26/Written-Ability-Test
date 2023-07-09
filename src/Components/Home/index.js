import React, { useState } from "react";
import NavBarComponent from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./home.css";
import Dropdown from "../Dropdown";

const Home = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const userName = (location && location.state.inpVal) || "";

  const [selval, setSelval] = useState("Choose No of Seconds");
  const [selbell, setBellval] = useState("Choose Alert Sound");

  const [selvalTitle, setSelvalTitle] = useState("");
  const [selbellTitle, setBellvalTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/sets`, { state: { selval, selbell, userName } });
  };

  const optionsTime = [
    {
      title: "15 Seconds",
      value: "15",
    },
    {
      title: "30 Seconds",
      value: "30",
    },
    {
      title: "45 Seconds",
      value: "45",
    },
    {
      title: "60 Seconds",
      value: "60",
    },
  ];

  const optionsRing = [
    {
      title: "Church Bell",
      value: "church",
    },
    {
      title: "Phone Bell",
      value: "phone",
    },
    {
      title: "Ring Bell",
      value: "ring",
    },
    {
      title: "Office Bell",
      value: "office",
    },
  ];

  return (
    <div id="home">
      <NavBarComponent data={userName} />
      <div className="mainDiv">
        <img
          src="welcome.png"
          className="imgDiv"
          alt="welcome"
          title="welcome"
        />
        <div className="contentDiv">
          <h2 className="heading">Welcome {userName}</h2>
          <img src="user.png" className="useImg" alt="user" title="user" />
          <p className="para">Please enter few more details to proceed.</p>
          <div className="selDiv">
            <Dropdown
              selected={selval}
              setSelected={setSelval}
              options={optionsTime}
              selectedTitle={selvalTitle}
              setSelectedTitle={setSelvalTitle}
            />
            <Dropdown
              selected={selbell}
              setSelected={setBellval}
              options={optionsRing}
              selectedTitle={selbellTitle}
              setSelectedTitle={setBellvalTitle}
            />
          </div>
          <button
            type="button"
            onClick={handleClick}
            className={
              selval !== "Choose No of Seconds" &&
              selbell !== "Choose Alert Sound"
                ? ""
                : "disabled"
            }
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
