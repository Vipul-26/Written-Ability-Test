import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './form.css';

const Form = () => {

    const validInput = /^[a-zA-Z? ]+$/;
    const [inpVal, setInpVal] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inpVal) {
            if (inpVal.match(validInput)) {
                setError(false);
                history.push({
                    pathname: `/home`,
                    state: inpVal,
                });
            }
            else {
                setError(true);
            }
        }
    };

    return (
        <div id="loginform">
            <h2 id="headerTitle">
                Written Ability Test
            </h2>
            <img src='logo.png' alt='logo' className='img' />
            <p className="mt-2">
                Let's start with your name
            </p>
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <label>
                        Username
                    </label>
                    <input type="text" placeholder="Enter your username" maxlength="20" onChange={(e) => setInpVal(e.target.value)} className={`${error ? 'errorInput' : ''}`} />
                    {error && (<span className="errorMsg">Please enter valid username.</span>)}
                </div>
                <div id="button" class="row">
                    <button type="submit" className={`${!inpVal ? 'disabled' : ''}`}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Form;