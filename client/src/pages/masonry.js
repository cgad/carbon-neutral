import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

class Masonry extends Component {
  state = {
    searched: [],
    model: ""
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="masonry sibling-fade">
          <div className="masonry-brick">
            blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
          </div>
          <div className="masonry-brick container">
            {/* change this to opposite- show text, then show image on hover */}
            <img src="images/runway.jpg" className="runway" alt="eye" />
            <div className="overlay">
              <div className="text">
                blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
              </div>
            </div>
          </div>
          <div className="masonry-brick about">
            <Link to="/">About</Link>
          </div>
          <div className="masonry-brick">
            <Link to="/flight">Flight</Link>
          </div>
          <div className="masonry-brick">
            <Link to="/roadtrip">Road Trip</Link>
          </div>
          <div className="masonry-brick">
            <Link to="/pet">Pet</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Masonry;
