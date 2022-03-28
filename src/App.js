import React from 'react'
import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import MusicControls from "./components/MusicControls/MusicControls"
function App() {
  return (
    <div className="app">
        <div className="container">
          <NavBar />
          <Header />
          <MainContainer />
        </div>
        <MusicControls />
    </div>
  );
}

export default App;
