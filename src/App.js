import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import PlaylistShow from "./components/PlaylistShow/PlaylistShow";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [state, setState] = useState({
    playlistName: "",
  });

  const handleInput = (event) => {
    setState({
      ...state,
      ...{
        [event.target.name]: event.target.value,
      },
    });
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogOut = () => {
    try {
      setIsLoggedIn(false);
      localStorage.removeItem("loggedIn");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = () => {
    try {
      localStorage.setItem("loggedIn", "true");
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const newPlaylistSubmit = (event) => {
    event.preventDefault();
    (async () => {
      console.log(state.playlistName);
      try {
        await axios
          .post("https://backendspotify.herokuapp.com/playlist", {
            name: state.playlistName,
          })
          .then(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <NavBar
        handleLogIn={handleLogIn}
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
      />
      <header>
        <h1>Hello World!</h1>
      </header>
      <div className="body">
        <Switch>
          <Route
            path={"/playist"}
            render={(props) => {
              return <PlaylistShow isLoggedIn={isLoggedIn} />;
            }}
          />
          <Route
            path={"/"}
            render={(props) => {
              return (
                <Home
                  isLoggedIn={isLoggedIn}
                  newPlaylistSubmit={newPlaylistSubmit}
                  handleInput={handleInput}
                />
              );
            }}
          />
        </Switch>
      </div>
      <footer>
        <p>This is the footer</p>
      </footer>
    </div>
  );
};

export default App;
