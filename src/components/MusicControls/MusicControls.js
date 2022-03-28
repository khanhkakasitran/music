import React from "react";
import { useStore } from "../../store";
import { BsArrowRepeat, BsPlay } from "react-icons/bs";
import {
  AiFillStepBackward,
  AiOutlinePause,
  AiFillStepForward,
} from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import "./MusicControls.css";

function MusicControls() {
  const [state, dispatch] = useStore();
  const Songs = state.Songs;
  // console.log(Songs[0].song);
  return (
    <div className="musicControls">
      <div className="playerSong">
        <div className="mediaLeft">
          <img src="" alt="" />
        </div>
        <div className="mediaContent">
          <div className="mediaTitle">
            <span>Name song</span>
          </div>
          <div className="mediaAuthor">
            <span>Name artist</span>
          </div>
        </div>
        <div className="mediaRight"></div>
      </div>

      <div className="playerControls">
        <div className="control">
          <div className="btn btn-repeat">
            <i>
              <BsArrowRepeat />
            </i>
          </div>
          <div className="btn btn-prev">
            <i>
              <AiFillStepBackward />
            </i>
          </div>
          <div className="btn btn-toggle-play">
            <i className="icon-pause">
              <AiOutlinePause />
            </i>
            <i className="icon-play">
              <BsPlay />
            </i>
          </div>
          <div className="btn btn-next">
            <i>
              <AiFillStepForward />
            </i>
          </div>
          <div className="btn btn-random">
            <i>
              <FaRandom />
            </i>
          </div>
        </div>
        <div className="progessControl">
          <div className="progressBlock">
            <span className="trackTime">00:00</span>
            <input
              id="progress"
              className="progressBar"
              type="range"
              value="0"
              step="1"
              min="0"
              max="100"
            />
            <div className="progressTrack">
              <div className="progressTrackUpdate"></div>
            </div>
            <span className="durationtime">00:00</span>
          </div>
        </div>
      </div>
      <audio id="audio" src=""></audio>
    </div>
  );
}

export default MusicControls;
