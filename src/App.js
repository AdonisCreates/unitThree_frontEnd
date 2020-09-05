import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import PlaylistList from "./components/PlaylistList/PlaylistList";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <p>
          Welcome to our Project #3
        </p>
      </header>
    </div>
  );
}

export default App;
