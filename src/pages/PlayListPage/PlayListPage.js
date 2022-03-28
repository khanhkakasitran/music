import React from "react";
import "./PlayListPage.css";
import { AiOutlinePlus } from "react-icons/ai";
import slideBa from "../../assets/images/backgroud.png";

function PlayListPage() {
  return (
    <div className="playListPage">
      <div className="playlistHeader">
        <h3 className="playlistHeaderTitle">Playlist</h3>
      </div>

      <div className="row wrap playlistContainer">
        <div className="rowItem itemPlaylist playlistCreate ">
          <div className="rowItemContainer flexCenter itemCreateProperties">
            <i className="albumsCreateIcon">
              <AiOutlinePlus />
            </i>
            <span className="textCenter albumsCreateAnnotate">
              Tạo playlist mới
            </span>
          </div>
        </div>

        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
        <div className="rowItem itemPlaylist ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="rowInfoName">Simple Name</h3>
              <span className="rowInfoCreator">NCS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayListPage;
