import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import PlaylistShow from "./PlaylistShow/PlaylistShow";

function Home(props) {
  const [selectedPlaylist, updateSelectedPlaylist] = useState({});
  const grabPlaylist = (specific) => {
    try {
      updateSelectedPlaylist({ ...selectedPlaylist, specific });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={"mainPage"}>
      <p>Welcome to our Project #3</p>
      <br />
      {localStorage.getItem("loggedIn") && (
        <form>
          Name: <input type="text" name="name" onChange={props.handleInput} />
          <input
            type="submit"
            name="submit"
            value="Create New Playlist"
            onClick={props.newPlaylistSubmit}
          />
        </form>
      )}
      <p> You have {`${props.playlist.length}`} playlist(s)</p>
      {localStorage.getItem("loggedIn") &&
        props.playlist.length > 0 &&
        props.playlist.map((individual) => {
          grabPlaylist(individual);
          return (
            <p>
              <a href={`/${individual._id}`}>{individual.name}</a>
            </p>
          );
        })}
      <Switch>
        <Route
          path={"/:id"}
          render={(props) => {
            console.log(props);
            return <PlaylistShow selectedPlaylist={selectedPlaylist} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default Home;
