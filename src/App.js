import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import PlaylistShow from "./components/PlaylistShow/PlaylistShow";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { queryHelpers } from '@testing-library/react';

const App = () => {
  const [state, setState] = useState({

  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogOut = () => {
      try {
          setIsLoggedIn(false);
          localStorage.removeItem('loggedIn')
      } catch (error) {
          console.log(error);
      }
  };

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("https://www.spotify.com/signup/")
      console.log(response);
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = () => {
    try {
        localStorage.setItem('loggedIn', 'true')
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        <NavBar handleLogIn={handleLogIn} isLoggedIn={isLoggedIn} handleLogOut={handleLogOut}/>
        <header>
            <h1>Hello World!</h1>
        </header>
        <div className="body">
          <p>
            Welcome to our Project #3
          </p>
          {localStorage.getItem('loggedIn') && <form action="/" method="POST">
            Name: <input type="text" name="name" />
            <input type="submit" name="" value="Create New Playlist"/>
          </form>}
          <Switch>
            <Route
              path="/playist"
              render={() => {
                return <PlaylistShow isLoggedIn={isLoggedIn} />;
              }}
            />
          </Switch>
        </div>
        <footer>
          <p>This is the footer</p>
        </footer>
      </div>
  );
}

export default App;
