import React from "react";
import "./AlbumsPage.css";
import slideBa from "../../assets/images/backgroud.png";
function AlbumsPage() {
  return (
    <div className="albumsPage">
      <div className="albumsHeader">
        <h3 className="albumsHeaderTitle">Albums</h3>
      </div>

      <div className="row wrap albumsContainer">
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
        <div className="rowItem itemAlbums ">
          <div className="rowItemContainer flexTopLeft">
            <div className="rowItemDisplay br5">
              <img className="rowItemImg" src={slideBa} />
            </div>

            <div className="rowItemInfo">
              <h3 className="albumsInfoName">Simple Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumsPage;
