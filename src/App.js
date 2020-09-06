import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import PlaylistList from "./components/PlaylistList/PlaylistList";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import './App.css';
import { queryHelpers } from '@testing-library/react';

const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  };

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/signup", {
        email: state.email,
        password: state.password,
      });
      console.log(response);
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email: state.email,
        password: state.password,
      });
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
      <header className="App-header">
        <NavBar isLoggedIn={isLoggedIn} />
      </header>
        <div className="body">
          {/* <Switch>
            <Route
              path="/signup"
              render={(props) => {
                return (
                  <SignUpForm
                    isLoggedIn={isLoggedIn}
                    handleInput={handleInput}
                    handleSignUp={handleSignUp}
                  />
                );
              }}
            />
            <Route
              path="/logout"
              render={(props) => {
                return (
                  <LogOut isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
                );
              }}
            />
            <Route
              path="/login"
              render={(props) => {
                return (
                  <LogInForm
                    isLoggedIn={isLoggedIn}
                    handleInput={handleInput}
                    handleLogIn={handleLogIn}
                  />
                );
              }}
            />
            <Route
              path="/"
              render={() => {
                return <PlaylistList isLoggedIn={isLoggedIn} />;
              }}
            />
          </Switch> */}
          <h1>Hello World!</h1>
          <p>
            Welcome to our Project #3
          </p>
          <form action="/" method="POST">
            Name: <input type="text" name="name" />
            <input type="submit" name="" value="Create New Playlist"/>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
