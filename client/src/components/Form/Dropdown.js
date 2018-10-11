import React from "react";
import "./Form.css";

export const Dropdown = () => (
    <div className="dropdown">
        <button className="dropbtn">Impact Model</button>
        <div className="dropdown-content">
        {/* instead of anchor tags to react Link and import React, { Link } from "react"*/}
            <a href="/roadtrip">Road Trip</a>
            <a href="/flight">Flight</a>
            <a href="/pet">Pet</a>
        </div>
    </div>
);
