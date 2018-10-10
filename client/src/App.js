import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footprints from './pages/Footprints/Footprints';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <textarea></textarea>
//       </div>
//     );
//   }
// }

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Footprints} />
      </Switch>
    </div>
  </Router>
)

export default App;
