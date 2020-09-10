import React from "react";
import axios from "axios";

function Home(props) {
  return (
    <div className={"mainPage"}>
      <p>Welcome to our Project #3</p>
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
          props.grabPlaylist(individual);
          return (
            <p>
              <a
                href={`https://backendspotify.herokuapp.com/playlist/${individual._id}`}
              >
                {individual.name}
              </a>
            </p>
          );
        })}
    </div>
  );
}

export default Home;
