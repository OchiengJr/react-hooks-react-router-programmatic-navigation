import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
