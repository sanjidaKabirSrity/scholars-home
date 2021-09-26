import React from 'react';
import Logo from "../../images/logo.png"
import './Heading.css';

const Heading = () => {
    return (
        <div className="head">
            <div className="nav-bar">
                <div>
                    <img src={Logo} alt="" className="logo" />
                </div>
                <div className='nav-item'>
                    <a href="/tutorial">Tutorial</a>
                    <a href="/courses">Courses</a>
                    <a href="/topic">Topic</a>
                </div>
                <div>
                    <input className="search-input" type="text" placeholder="Search Teacher"/>
                </div>
            </div>
            <div className="headtText-container">
                <h1 className="headtText-h1">Connected With</h1>
                <p className="headtText-P">Thousands of top teachers and experts from all over the world at any time</p>
                <h3 className="headtText-h3">Teachers Salary Budget 10 Million</h3>
            </div>
        </div>
    );
};

export default Heading;