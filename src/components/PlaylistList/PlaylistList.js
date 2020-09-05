import React, { useState, useEffect } from "react";
import axios from "axios";

import PlaylistShow from "../PlaylistShow/PlaylistShow";

const PlaylistList = (props) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:3001/api/playlists");
            setPlaylists(response.data);
        }
        fetchData();
    }, [playlists]);

    const showPlaylists = playlists.map((playlist, i) => {
        return (
            <div key={i}>
                <PlaylistShow playlist={playlist} isLoggedIn={props.isLoggedIn} />
            </div>
        );
    });

    return <div>{showPlaylists}</div>;
};

export default PlaylistList;