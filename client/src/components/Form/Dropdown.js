import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

export const Dropdown = () => (
    <div className="dropdown">
        <button className="dropbtn">Impact Model</button>
        <div className="dropdown-content">
        {/* instead of anchor tags to react Link and import React, { Link } from "react"*/}
            {/* <a href="/roadtrip">Road Trip</a>
            <a href="/flight">Flight</a>
            <a href="/pet">Pet</a> */}
            <Link to="/roadtrip">Road Trip</Link>
            <Link to="/flight">Flight</Link>
            <Link to="/pet">Pet</Link>
        </div>
    </div>
);

// export const Dropdown = props => (
//     <div className="dropdown">
//         <button className="dropbtn">{props.dropbtn}</button>
//         <div className="dropdown-content">
//             <Link to={props.link}>{props.children}</Link>
//         </div>
//     </div>
// );
