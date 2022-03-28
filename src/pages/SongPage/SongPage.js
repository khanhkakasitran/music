import React, { useEffect } from "react";
import { VscHeart } from "react-icons/vsc";
import "./SongPage.css";
import { useStore, actions } from "../../store";
function SongPage() {
  const [state, dispatch] = useStore();
  const Songs = state.Songs;
  const handleGetSong = (song) => {
    console.log(song);
  };

  //active songs
  useEffect(() => {
    const songs = document.querySelectorAll("tr");

    function handleMenuClick() {
      songs.forEach((tr) => tr.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((element) =>
      element.addEventListener("click", handleMenuClick)
    );
  }, []);

  return (
    <div className="songPage">
      <div className="songsHeader">
        <h3 className="songsHeaderTitle">Bài Hát</h3>
      </div>
      <div className="songsContainer">
        <table className="songsContainerList">
          <thead className="songsContainerHeader">
            <tr>
              <th colSpan="3">BÀI HÁT</th>
              <th>NGHỆ SĨ</th>
              <th>THỜI GIAN</th>
              <th>LIKE</th>
            </tr>
          </thead>
          <tbody className="songsContainerMain">
            {Songs &&
              Songs.map((song, index) => (
                <tr key={index} 
                  onClick={handleGetSong}
                >
                  <td>{`#${song.id}`}</td>
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
  );
}

export default SongPage;
