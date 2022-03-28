import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './MainContainer.css'
import HomePage from '../../pages/HomePage/HomePage'
import SongPage from '../../pages/SongPage/SongPage'
import PlayListPage from'../../pages/PlayListPage/PlayListPage'
import ArtistPage from '../../pages/ArtistPage/ArtistPage'
import AlbumsPage from '../../pages/AlbumsPage/AlbumsPage'
import MVPage from '../../pages/MVPage/MVPage'
function MainContainer() {
  return (
    <div className="mainContainer">
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/bai-hat" element={<SongPage/>} />
            <Route path="/playlist-page" element={<PlayListPage/>} />
            <Route path="/nghe-si" element={<ArtistPage/>} />
            <Route path="/albums" element={<AlbumsPage/>} />
            <Route path="/mv" element={<MVPage/>} />
        </Routes>
    </div>
  )
}

export default MainContainer