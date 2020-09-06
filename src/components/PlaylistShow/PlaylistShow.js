import React from "react";
import "./PlaylistShow.css";

function PlaylistShow(props) {
    const { artist, album, title } = props.playlist;
    return (
        <div className="playlist-preview">
            {props.isLoggedIn ? <h3>Artist: {artist}</h3> : ""}
            {props.isLoggedIn ? <h3>Album: {album}</h3> : ""}
            {props.isLoggedIn ? <h3>Song: {title}</h3> : ""}
        </div>
    );
}

export default PlaylistShow;