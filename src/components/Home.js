import React, { useEffect, useState } from "react";
import axios from "axios";

function Home(props) {
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

  return (
    <div className={"mainPage"}>
      <p>Welcome to our Project #3</p>
      {localStorage.getItem("loggedIn") && (
        <form>
          Name:{" "}
          <input type="text" name="playlistName" onChange={props.handleInput} />
          <input
            type="submit"
            name="submit"
            value="Create New Playlist"
            onClick={props.newPlaylistSubmit}
          />
        </form>
      )}
      {localStorage.getItem("loggedIn") &&
        playlist.length > 0 &&
        playlist.map((individual) => {
          return (
            <>
              <p> You have {`${playlist.length}`} playlist(s)</p>
              <p>{individual.name}</p>
            </>
          );
        })}
    </div>
  );
}

export default Home;
