import React from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(props) {
    let navBarItems = [
        <li key={1}>
            <a href="/">All Playlists</a>
        </li>,
    ];
    if (props.isLoggedIn) {
        navBarItems.push(
            <li key={2}>
                <a href="/logout">Log Out</a>
            </li>
        );
    } else {
        navBarItems.push(
            <li key={3}>
                <a href="/signup">Sign Up</a>
            </li>
        );
        navBarItems.push(
            <li key={4}>
                <a href="http://localhost:8888/login" handleLogIn={props.handleLogIn}>Log In</a>
            </li>
        );
    }

    return (
        <>
            <nav>
                <h1>Spotify</h1>
                <a href="#">
                    <i className="lni-home"></i> Home
                </a>
                <a href="#">
                    <i className="lni-search"></i> Search
                </a>
                <ul>{navBarItems}</ul>
            </nav>
        </>
    );
}

export default NavBar;