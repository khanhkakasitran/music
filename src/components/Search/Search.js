import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './Search.css'
function Search() {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
        className="searchInput"
      />
      <div className="searchIcon">
        <i>
          <BsSearch/>
        </i>
      </div>
      <div className="searchHistory">
        <ul className="searchList">
          <li className="searchItem">
            <i>
              <BsSearch/>
            </i>
              <a href="#" className="searchItemLink"> Castle </a>
          </li>
          <li className="searchItem">
            <i>
              <BsSearch/>
            </i>
              <a href="#" className="searchItemLink"> Island </a>
          </li>
          <li className="searchItem">
            <i>
              <BsSearch/>
            </i>
              <a href="#" className="searchItemLink"> About you </a>
          </li>
          <li className="searchItem">
            <i>
              <BsSearch/>
            </i>
              <a href="#" className="searchItemLink"> With you </a>
          </li>
          <li className="searchItem">
            <i>
              <BsSearch/>
            </i>
              <a href="#" className="searchItemLink"> Sound of my dream </a>
          </li>
          <li className="searchItem">
            <i>
              <BsSearch/>
            </i>
              <a href="#" className="searchItemLink"> The night </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Search