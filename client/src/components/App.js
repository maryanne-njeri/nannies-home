// import React from "react";
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
// import SignUp from './SignUp';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  
  return (
    <div className="">

      
      {/* if (user) {
        return <h2>Welcome, {user.username}!</h2>;
      } else {
        return <Login onLogin={setUser} />;
      } */}



      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/login">
          <Login setUser = {setUser} />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;