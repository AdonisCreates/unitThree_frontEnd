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
    name: "",
  });

  const [selectedPlaylist, updateSelectedPlaylist] = useState({});

  const [playlist, updatePlaylist] = useState([
    {
      name: "",
      _id: "",
      tracks: [],
      createdAt: "",
      updatedAt: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        await axios
          .get("https://backendspotify.herokuapp.com/playlist", {})
          .then(function (response) {
            const returnedData = response.data;
            updatePlaylist([...returnedData]);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [playlist]);

  const grabPlaylist = (specific) => {
    try {
      updateSelectedPlaylist({ ...selectedPlaylist, specific });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (event) => {
    setState({
      ...state,
      ...{
        [event.target.name]: event.target.value,
      },
    });
    console.log(state);
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
      try {
        await axios
          .post("https://backendspotify.herokuapp.com/playlist", {
            name: state.name,
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
            path={"/playist/:id"}
            render={(props) => {
              return (
                <PlaylistShow
                  selectedPlaylist={selectedPlaylist}
                  isLoggedIn={isLoggedIn}
                />
              );
            }}
          />
          <Route
            path={"/"}
            render={(props) => {
              return (
                <Home
                  grabPlaylist={grabPlaylist}
                  isLoggedIn={isLoggedIn}
                  newPlaylistSubmit={newPlaylistSubmit}
                  handleInput={handleInput}
                  playlist={playlist}
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
