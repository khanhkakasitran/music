import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsFillHouseFill,
  BsCameraVideo,
  BsMusicNoteBeamed,
  BsJournalAlbum,
  BsMusicNoteList,
} from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiHeadphones } from "react-icons/gi";

import "./NavBar.css";
function NavBar() {
  useEffect(() => {
    const liElements = document.querySelectorAll(".MenuContainerItem");
    function handleMenuClick() {
      liElements.forEach((li) => li.classList.remove("active"));
      this.classList.add("active");
    }

    liElements.forEach((element) =>
      element.addEventListener("click", handleMenuClick)
    );
  }, []);
  return (
    <div className="navBar">
      <div className="logoContainer">
        <h2>
          M
          <div className="logoContainerIcon">
            <i>
              <GiHeadphones />
            </i>
          </div>
          sic
        </h2>
      </div>

      <div className="MenuContainer">
        <ul className="MenuContainerList">
          <li className="MenuContainerItem active">
            <Link to="/">
              <i>
                <BsFillHouseFill />
              </i>
              <span>TRANG CHỦ</span>
            </Link>
          </li>
          <li className="MenuContainerItem">
            <Link to="/bai-hat">
              <i>
                <BsMusicNoteBeamed />
              </i>
              <span>BÀI HÁT</span>
            </Link>
          </li>
          <li className="MenuContainerItem">
            <Link to="/playlist-page">
              <i>
                <BsMusicNoteList />
              </i>
              <span>PLAYLIST</span>
            </Link>
          </li>
          <li className="MenuContainerItem">
            <Link to="/nghe-si">
              <i>
                <FaMicrophoneAlt />
              </i>
              <span>NGHỆ SĨ</span>
            </Link>
          </li>
          <li className="MenuContainerItem">
            <Link to="/albums">
              <i>
                <BsJournalAlbum />
              </i>
              <span>Albums</span>
            </Link>
          </li>
          <li className="MenuContainerItem">
            <Link to="/mv">
              <i>
                <BsCameraVideo />
              </i>
              <span>MV</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
