import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  const validInput = /^[a-zA-Z? ]+$/;
  const [inpVal, setInpVal] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpVal) {
      if (inpVal.match(validInput)) {
        setError(false);
        navigate("/home", { state: { inpVal: inpVal } });
      } else {
        setError(true);
      }
    }
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Written Ability Test</h2>
      <img
        src="logo.png"
        alt="logo"
        className="img"
        title="logo"
        width={287}
        height={272}
      />
      <p className="mt-2">Let's start with your name</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            placeholder="Enter your username"
            maxLength={20}
            onChange={(e) => setInpVal(e.target.value)}
            className={`${error ? "errorInput" : ""}`}
          />
          {error && (
            <span className="errorMsg">Please enter valid username.</span>
          )}
        </div>
        <div id="button" className="row">
          <button type="submit" className={`${!inpVal ? "disabled" : ""}`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
