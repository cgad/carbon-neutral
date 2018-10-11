import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footprints from "./pages/Footprints/Footprints";
import Roadtrip from "./pages/Roadtrip/Roadtrip";
import Flight from "./pages/Flight/Flight";
import Pet from "./pages/Pet/Pet";
import NoMatch from "./pages/NoMatch/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Footprints} />
        {/* other routes before NoMatch so that's a catch-all */}
        <Route exact path="/roadtrip" component={Roadtrip} />
        <Route exact path="/flight" component={Flight} />
        <Route exact path="/pet" component={Pet} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App;
