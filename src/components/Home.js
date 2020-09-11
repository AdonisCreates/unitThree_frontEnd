// import React from "react";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import PlaylistShow from "./PlaylistShow/PlaylistShow";

function Home(props) {
  const handleDelete = async (event) => {
    event.preventDefault();
    const sel = event.target.id;
    try {
      await axios
        .delete(`https://backendspotify.herokuapp.com/playlist/${sel}`, {})
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={"mainPage"}>
      <p>Enjoy your experience</p>
      <br />
      {localStorage.getItem("loggedIn") && (
        <form>
          Name:{" "}
          <input
            className="name"
            type="text"
            name="name"
            onChange={props.handleInput}
          />
          <input
            className="submit"
            type="submit"
            name="submit"
            value="Create New Playlist"
            onClick={props.newPlaylistSubmit}
          />
        </form>
      )}
      {/*{localStorage.getItem("loggedIn") && (*/}
      {/*  <form>*/}
      {/*    Edit:{" "}*/}
      {/*    <input*/}
      {/*      className="edit"*/}
      {/*      type="text"*/}
      {/*      name="name"*/}
      {/*      onChange={props.handleInput}*/}
      {/*    />*/}
      {/*    <input*/}
      {/*      className="edit-btn"*/}
      {/*      type="submit"*/}
      {/*      name="submit"*/}
      {/*      value="Edit Playlist"*/}
      {/*      onClick={props.updatedPlaylist}*/}
      {/*    />*/}
      {/*  </form>*/}
      {/*)}*/}
      <p> You have {`${props.playlist.length}`} playlist(s)</p>
      {localStorage.getItem("loggedIn") &&
        props.playlist.length > 0 &&
        props.playlist.map((individual) => {
          return (
            <p>
              <a href={`/${individual._id}`}>{individual.name}</a>
              <button id={`${individual._id}`} onClick={handleDelete}>
                Delete Playlist
              </button>
            </p>
          );
        })}
    </div>
  );
}

export default Home;
