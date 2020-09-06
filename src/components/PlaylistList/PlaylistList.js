import React, { useState, useEffect } from "react";
import axios from "axios";

import PlaylistShow from "../PlaylistShow/PlaylistShow";

const PlaylistList = (props) => {
    const [playlists, setPlaylists] = useState([]);

    const [newPlaylist, updateNewPlaylist] = useState({
        artist: '',
        album: '',
        song: ''
    });

    const [allPlaylists, updateAllPlaylists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:3001/api/playlists");
            setPlaylists(response.data);
        }
        fetchData();
    }, [playlists]);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const submission = { ...newPlaylist };
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submission)
            });
            const data = await response.json();
            await updateAllPlaylists([...allPlaylists, data]);
            await updateNewPlaylist({
                artist: '',
                album: '',
                song: ''
            });
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        updateNewPlaylist({ ...newPlaylist, [event.target.id]: event.target.value });
    }

    const showPlaylists = playlists.map((playlist, i) => {
        return (
            <div key={i}>
                <form onSubmit={handleSubmit} className="task-form">
                    <h1>New Playlist Form</h1>
                    Artist: {' '}
                    <input
                        type="text"
                        name="name"
                        value={newPlaylist.artist}
                        onChange={handleChange}
                    />
                    <br />
                    Album: {' '}
                    <input
                        type="text"
                        name="album"
                        value={newPlaylist.album}
                        onChange={handleChange} 
                    />
                    <br />
                    Song: {' '}
                    <input
                        type="text"
                        name="song"
                        value={newPlaylist.song}
                        onChange={handleChange} 
                    />
                    <br />
                    <button type="submit">Add To Playlist</button>
                </form>
                <PlaylistShow playlist={playlist} isLoggedIn={props.isLoggedIn} />
            </div>
        );
    });

    return <div>{showPlaylists}</div>;
};

export default PlaylistList;