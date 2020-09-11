// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

function Home(props) {
  const [selectedPlaylist, updateSelectedPlaylist] = useState({});
  const grabPlaylist = (specific) => {
    try {
      updateSelectedPlaylist({ ...selectedPlaylist, specific });
    } catch (err) {
      console.log(err);
    }
  };

  // const [currentPlaylist, updateCurrentPlaylist] = useState({});

  const handleDelete = async event => {
		event.preventDefault();
		try {
			const response = await fetch(`https://backendspotify.herokuapp.com//home/${selectedPlaylist.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			await updateSelectedPlaylist({});
		} catch (e) {
			console.error(e);
		}
	};

  return (
    <div className={"mainPage"}>
      <p>Welcome to our Project #3</p>
      <br />
      {localStorage.getItem("loggedIn") && (
        <form>
          Name: <input className="name" type="text" name="name" onChange={props.handleInput} />
          <input
            className="submit"
            type="submit"
            name="submit"
            value="Create New Playlist"
            onClick={props.newPlaylistSubmit}
          />
        </form>
      )}
            {localStorage.getItem("loggedIn") && (
        <form>
          Edit: <input className="edit" type="text" name="name" onChange={props.handleInput} />
          <input
            className="edit-btn"
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
              <button onClick={handleDelete}>Delete Playlist</button>
            </p>
          );
        })}
    </div>
  );
}

export default Home;
