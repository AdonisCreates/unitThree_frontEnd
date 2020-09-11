import React, { useEffect, useState } from "react";
import "./PlaylistShow.css";
import axios from "axios";

const PlaylistShow = (props) => {
  const [allTracks, updateAllTracks] = useState({
    artists: [""],
    album: { albumName: "", albumImg: "" },
    trackName: "",
  });

  const [currentPlaylist, updateCurrentPlaylist] = useState({});

  const [searchTrack, updateSearchTrack] = useState({
    search: "",
  });

  useEffect(() => {
    console.log(props.selectedPlaylist);
    (async () => {
      try {
        await axios
          .get(
            `https://backendspotify.herokuapp.com/playlist/${props.selectedPlaylist}`,
            {}
          )
          .then(function (response) {
            const returnedData = response.data;
            updateCurrentPlaylist(returnedData);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [currentPlaylist]);

  const handleChange = (event) => {
    updateSearchTrack({
      ...searchTrack,
      ...{ [event.target.id]: event.target.value },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const submission = { ...searchTrack };
      const response = await fetch(
        `https://backendspotify.herokuapp.com/home/${submission}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),
        }
      );
      const data = await response.json();
      await updateAllTracks(
        {
          artists: data.artists,
          album: { ...data.album },
          trackName: data.trackName,
        },
        ...allTracks
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className={"selectedPlaylist"}>
        <h4>{props.selectedPlaylist}</h4>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          Song Search:
          <input
            className="search"
            type="text"
            id="search"
            name="search"
            value={searchTrack.search}
            placeholder="Search"
            onChange={handleChange}
          ></input>
          <input className="search-btn" value="Search" type="submit" />
        </form>
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
      </div>
      <ul>
        {searchTrack.search !== "" &&
          allTracks.map((track) => {
            return (
              <li>
                {track.trackName}
                {track.artists.map((artist) => {
                  return artist;
                })}
                {track.album.albumName}
                {track.album.albumImg[0]}
              </li>
            );
          })}
      </ul>
      {/*<div className="playlist-preview">*/}
      {/*  {props.isLoggedIn ? <h3>Artist: {artist}</h3> : ""}*/}
      {/*  {props.isLoggedIn ? <h3>Album: {album}</h3> : ""}*/}
      {/*  {props.isLoggedIn ? <h3>Song: {title}</h3> : ""}*/}
    </>
  );
};

export default PlaylistShow;
