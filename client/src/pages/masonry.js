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
        <Nav></Nav>
        <div class="masonry">
          {/* <div class="item">
            blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
          </div> */}
          <div class="masonry-brick">
            <Link to="/">About</Link>
          </div>
          <div class="masonry-brick">
            <Link to="/flight">Flight</Link>
          </div>
          <div class="masonry-brick">
            <Link to="/roadtrip">Road Trip</Link>
          </div>
          <div class="masonry-brick">
            <Link to="/pet">Pet</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Masonry;
