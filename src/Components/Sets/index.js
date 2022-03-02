import React from 'react';
import { useHistory } from "react-router-dom";
import NavBarComponent from '../Navbar/Navbar';
import Data from '../../asset/data';
import './sets.css';

const Sets = (props) => {

    const { selval, selbell, userName } = (props.location && props.location.state) || '';

    const history = useHistory();
    const handleClick = (value, words) => {
        history.push({
            pathname: `/set${value}`,
            state: { words, selval, selbell },
        });
    };

    return (
        <div className='set'>
            <NavBarComponent data={userName} />
            <h2 className='heading'>Hey {userName.substr(0, userName.indexOf(' '))}</h2>
            <p className='para'>
                Please click on any set to attempt the test.
            </p>
            <p className='para'>
                Each set contains 60 words on which you need write 5-10 lines within a certain limit of time.
            </p>
            <h4 className='subHead'>
                Important Tips
            </h4>
            <ul class="list">
                <li class="list-item one">Don’t use jargon.</li>
                <li class="list-item two">Read that word a lot.</li>
                <li class="list-item three">Concentrate on correct usage of grammar.</li>
                <li class="list-item four">Be Concise & Clear on your point.</li>
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
    )
};

export default Sets;