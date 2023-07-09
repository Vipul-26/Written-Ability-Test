import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBarComponent from "../Navbar";
import Data from "../../asset/data";
import "./sets.css";

const Sets = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { selval, selbell, userName } = (location && location.state) || "";

  const handleClick = (value, words) => {
    navigate(`/set/${value}`, { state: { words, selval, selbell, userName } });
  };

  return (
    <div className="set">
      <NavBarComponent data={userName} />
      <h2 className="headingSet">
        Hey {userName.substr(0, userName.indexOf(" "))}
      </h2>
      <p className="paraSet">Please click on any set to attempt the test.</p>
      <p className="paraSet">
        Each set contains 60 words on which you need write 5-10 lines within a
        certain limit of time.
      </p>
      <h4 className="subHead">Important Tips</h4>
      <ul className="list">
        <li className="list-item one">Don’t use jargon.</li>
        <li className="list-item two">Read that word a lot.</li>
        <li className="list-item three">
          Concentrate on correct usage of grammar.
        </li>
        <li className="list-item four">Be Concise & Clear on your point.</li>
      </ul>
      <div className="practice">
        {Data.map((item, index) => (
          <button
            key={index}
            type="button"
            className="set-btn"
            onClick={() => handleClick(item.id, item.words)}
          >
            Practice Set {item.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sets;
