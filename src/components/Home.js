import React from "react";
import axios from "axios";
import "./Home.css";

function Home(props) {
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
            {localStorage.getItem("loggedIn") && (
        <form>
          Edit: <input type="text" name="name" onChange={props.handleInput} />
          <input
            type="submit"
            name="submit"
            value="Edit Playlist"
            onClick={props.updatedPlaylist}
          />
        </form>
      )}
      <p> You have {`${props.playlist.length}`} playlist(s)</p>
      {localStorage.getItem("loggedIn") &&
        props.playlist.length > 0 &&
        props.playlist.map((individual) => {
          return (
            <p>
              <a href={`/${individual._id}`}>{individual.name}</a>
            </p>
          );
        })}
    </div>
  );
}

export default Home;
