import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [playlist, updatePlaylist] = useState({
    name: "",
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://backendspotify.herokuapp.com/playlist"
        );
        const data = await response.json();
        updatePlaylist({ ...playlist, ...data });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [playlist]);

  const handleInput = (event) => {
    updatePlaylist({
      ...playlist,
      ...{
        [event.target.name]: event.target.value,
      },
    });
  };

  const newPlaylistSubmit = (event) => {
    event.preventDefault();
    (async () => {
      try {
        await axios.post("https://backendspotify.herokuapp.com/playlist");
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className={"mainPage"}>
      <p>Welcome to our Project #3</p>
      {localStorage.getItem("loggedIn") && (
        <form onSubmit={newPlaylistSubmit}>
          Name: <input type="text" name="name" />
          <input
            type="submit"
            name="submit"
            value="Create New Playlist"
            onChange={handleInput}
          />
        </form>
      )}
      {localStorage.getItem("loggedIn") &&
        playlist.length > 0 &&
        playlist.map((individual) => {
          return <h2>{individual.name}</h2>;
        })}
    </div>
  );
}

export default Home;
