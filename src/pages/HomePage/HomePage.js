import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { AiOutlinePlus, AiFillStar, AiOutlineCheck } from "react-icons/ai";
import "./HomePage.css";
import { useStore, actions } from "../../store";
import slideBr from "../../assets/images/banner.jpg";
import slideBa from "../../assets/images/backgroud.png";
import img from "../../assets/images/track.png";
function HomePage() {
  const [state, dispatch] = useStore();
  const Songs = state.Songs;
  return (
    <div className="homePage">
      {/* ==================TAB SONG & SLIDER============= */}
      <div className="row containerControl">
        <div className="containerHeader">
          <Link to="/bai-hat" className="containerHeaderTitle">
            <h3>
              Bài Hát
              <i>
                <BsChevronRight />
              </i>
            </h3>
          </Link>
          <div className="containerHeaderActions">
            <div className="containerMoveBtn">
              <i className="disabled">
                <BsChevronLeft />
              </i>
            </div>
            <div className="containerMoveBtn">
              <i>
                <BsChevronRight />
              </i>
            </div>
          </div>
        </div>

        <div className="containerPlaymusic">
          <div className="containerSlide">
            <div className="containerSlideShow">
              <div className="containerSlideItem">
                <img className="containerSlideImg" src={slideBr} />
              </div>
              <div className="containerSlideItem">
                <img className="containerSlideImg" src={slideBa} />
              </div>
              <div className="containerSlideItem">
                <img className="containerSlideImg" src={slideBr} />
              </div>
              <div className="containerSlideItem">
                <img className="containerSlideImg" src={slideBr} />
              </div>
            </div>
          </div>

          <div className="containerPlaylist">
            <div className="playlistList">
              <table className="songsContainerList">
                <tbody className="songsContainerMain">
                  {Songs &&
                    Songs.map((song, index) => (
                      <tr key={index}>
                        <td>
                          <img alt="img" src={song.images} />
                        </td>
                        <td>{song.name}</td>
                        <td>{song.author}</td>
                        <td>00:00</td>
                        <td>
                          <i>
                            <VscHeart />
                          </i>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ===================TAB PLAYLIST============ */}
      <div className="row">
        <div className="containerHeader">
          <Link to="/playlist-page" className="containerHeaderTitle">
            <h3>
              Playlist
              <i>
                <BsChevronRight />
              </i>
            </h3>
          </Link>
          <div className="containerHeaderActions">
            <div className="containerMoveBtn">
              <i className="disabled">
                <BsChevronLeft />
              </i>
            </div>
            <div className="containerMoveBtn">
              <i>
                <BsChevronRight />
              </i>
            </div>
          </div>
        </div>

        <div className="row noWrap playlistContainer">
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
        </div>
      </div>

      {/* =====================TAB ALBUMS============= */}
      <div className="row">
        <div className="containerHeader">
          <Link to="/albums" className="containerHeaderTitle">
            <h3>
              Albums
              <i>
                <BsChevronRight />
              </i>
            </h3>
          </Link>
          <div className="containerHeaderActions">
            <div className="containerMoveBtn">
              <i className="disabled">
                <BsChevronLeft />
              </i>
            </div>
            <div className="containerMoveBtn">
              <i>
                <BsChevronRight />
              </i>
            </div>
          </div>
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
        </div>
      </div>

      {/* =====================TAB MV============== */}
      <div className="row">
        <div className="containerHeader">
          <Link to="/mv" className="containerHeaderTitle">
            <h3>
              MV
              <i>
                <BsChevronRight />
              </i>
            </h3>
          </Link>
          <div className="containerHeaderActions">
            <div className="containerMoveBtn">
              <i className="disabled">
                <BsChevronLeft />
              </i>
            </div>
            <div className="containerMoveBtn">
              <i>
                <BsChevronRight />
              </i>
            </div>
          </div>
        </div>

        <div className="row noWrap mvContainer">
          <div className="rowItem itemMV ">
            <div className="rowItemContainer flexTopLeft">
              <div className="rowItemDisplay br5">
                <img className="rowItemImg imgMV" src={slideBa} />
              </div>

              <div className="rowItemInfo">
                <div className="mediaMV">
                  <div className="mediaThumb">
                    <img className="mediaThumbImg" src={img} alt="" />
                  </div>
                  <div className="mediaMVInfo">
                    <h3 className="infoTitle">Spectre</h3>
                    <p className="infoAuthor">Alan Walker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowItem itemMV ">
            <div className="rowItemContainer flexTopLeft">
              <div className="rowItemDisplay br5">
                <img className="rowItemImg imgMV" src={slideBa} />
              </div>

              <div className="rowItemInfo">
                <div className="mediaMV">
                  <div className="mediaThumb">
                    <img className="mediaThumbImg" src={img} alt="" />
                  </div>
                  <div className="mediaMVInfo">
                    <h3 className="infoTitle">Spectre</h3>
                    <p className="infoAuthor">Alan Walker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowItem itemMV ">
            <div className="rowItemContainer flexTopLeft">
              <div className="rowItemDisplay br5">
                <img className="rowItemImg imgMV" src={slideBa} />
              </div>

              <div className="rowItemInfo">
                <div className="mediaMV">
                  <div className="mediaThumb">
                    <img className="mediaThumbImg" src={img} alt="" />
                  </div>
                  <div className="mediaMVInfo">
                    <h3 className="infoTitle">Spectre</h3>
                    <p className="infoAuthor">Alan Walker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowItem itemMV ">
            <div className="rowItemContainer flexTopLeft">
              <div className="rowItemDisplay br5">
                <img className="rowItemImg imgMV" src={slideBa} />
              </div>

              <div className="rowItemInfo">
                <div className="mediaMV">
                  <div className="mediaThumb">
                    <img className="mediaThumbImg" src={img} alt="" />
                  </div>
                  <div className="mediaMVInfo">
                    <h3 className="infoTitle">Spectre</h3>
                    <p className="infoAuthor">Alan Walker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================TAB ARTIST=========== */}
      <div className="row">
        <div className="containerHeader">
          <Link to="/mv" className="containerHeaderTitle">
            <h3>
              Nghệ sĩ
              <i>
                <BsChevronRight />
              </i>
            </h3>
          </Link>
          <div className="containerHeaderActions">
            <div className="containerMoveBtn">
              <i className="disabled">
                <BsChevronLeft />
              </i>
            </div>
            <div className="containerMoveBtn">
              <i>
                <BsChevronRight />
              </i>
            </div>
          </div>
        </div>

        <div className="row wrap artistContainer">
          <div className="rowItem itemArtist ">
            <div className="rowItemContainer flexTopLeft">
              <div className="rowItemDisplay">
                <img className="rowItemImg" src={img} />
                <div className="overlay"></div>
              </div>

              <div className="rowItemInfo artistInfo">
                <div className="mediaMV">
                  <div className="mediaMVInfo textCenter">
                    <h3 className="infoTitle">
                      Spectre
                      <i className="rowInfoIcon"><AiFillStar/></i>
                    </h3>
                    <p className="infoAuthor">263k quan tâm</p>
                  </div>
                </div>
              </div>

              <div className="rowItemBtn">
                <button className="button isSmall buttonPrimary">
                  <i><AiOutlineCheck/></i>
                  <span>&nbsp;Đã quan tâm</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
