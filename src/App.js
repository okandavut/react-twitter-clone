import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/home";

function App() {
  return (
    <div className="App">
       <Router>
      <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            {/* <Route path="/logout">
              <Logout />
            </Route> */}
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
