import React, { useState } from 'react';
import NavBarComponent from '../Navbar/Navbar';
import { useHistory } from "react-router-dom";
import './home.css';

const Home = (props) => {

    const userName = (props.location && props.location.state) || '';
    const history = useHistory();

    const [selval, setSelval] = useState("");
    const [selbell, setBellval] = useState("");

    const handleSelectFirst = (e) => {
        setSelval(e.target.value);
    }

    const handleSelectSecond = (e) => {
        setBellval(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        history.push({
            pathname: `/sets`,
            state: { selval, selbell, userName },
        });
    }

    return (
        <div id="home">
            <NavBarComponent data={userName} />
            <div className='mainDiv'>
                <img src='./Welcome.png' className='imgDiv' />
                <div className='contentDiv'>
                    <h2 className='heading'>Welcome {userName}</h2>
                    <img src='./User.png' className='useImg' />
                    <p className='para'>
                        Please enter few more details to proceed.
                    </p>
                    <div className='selDiv'>
                        <select id="select" value={selval} onChange={handleSelectFirst} className="mb-4 mt-2">
                            <option value="" disabled>Choose No of Seconds</option>
                            <option value="15" >15 Seconds</option>
                            <option value="30">30 Seconds</option>
                            <option value="45">45 Seconds</option>
                            <option value="60">60 Seconds</option>
                        </select>
                        <select id="select" value={selbell} onChange={handleSelectSecond}>
                            <option value="" disabled>Choose Alert Sound</option>
                            <option value="church" >Church Bell</option>
                            <option value="phone">Phone Bell</option>
                            <option value="ring">Ring Bell</option>
                            <option value="office">Office Bell</option>
                        </select>
                    </div>
                    <button type="button" onClick={handleClick} className={selval && selbell ? '' : 'disabled'}>
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Home;