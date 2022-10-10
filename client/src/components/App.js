import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Blog from "./Blog";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;