import React, { useEffect, useState } from "react";
import "./PlaylistShow.css";

function PlaylistShow(props) {
  const [allTracks, updateAllTracks] = useState({
    artists: [""],
    album: { albumName: "", albumImg: "" },
    trackName: "",
  });

  const [searchTrack, updateSearchTrack] = useState({
    search: "",
  });

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
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            name="search"
            value={searchTrack.search}
            placeholder="Search"
            onChange={handleChange}
          ></input>
          <input value="Search" type="submit" />
        </form>
      </div>
      <ul>
        {allTracks.map((track) => {
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
      </div>
    </>
  );
}

export default PlaylistShow;
