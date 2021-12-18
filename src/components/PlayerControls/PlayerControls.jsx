import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ProgressBar,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import "../SoundCloudVideoPlayer/soundcloudvideoplayer.css";

import pause from "../../assets/soundcloudimages/pause.png";
import play from "../../assets/soundcloudimages/play.png";
import fullscreenimg from "../../assets/soundcloudimages/fullscreen.png";
import smallscreenimg from "../../assets/soundcloudimages/smallscreen.png";
import playbackspeedimg from "../../assets/soundcloudimages/playbackspeed.png";


const PlayerControls = ({
  onPlayPause,
  playing,
  onRewind,
  onFastForward,
  onPlayBackRateChange,
  playbackRate,
  played, 
  onSeek,
  onSeekMouseDown,
  onSeekMouseUp
}) => {

const [fullScreen, setFullScreen] = useState(false)

const handelFUllScreen=() =>{
    setFullScreen(!fullScreen)
}
// const now = played;
  return (
    <div>
      <div className="react_player_controls_wrapper">
        <ProgressBar
          className="pb_wrapper"
          now={played * 100}
          onChange={onSeek}
          onMouseDown={onSeekMouseDown}
          onChangeCommitted={onSeekMouseUp}
        //   label={`${played}%`}
        />
        <div className="controls_bottom_items">
          <button className="controls_button_styling" onClick={onPlayPause}>
            {playing ? (
              <Image src={pause} rounded />
            ) : (
              <Image className="pad_lft" src={play} rounded />
            )}
          </button>

          {/* <button className="controls_button_styling"
          onClick={onRewind}
          >
          <Image src={pause} rounded />
          </button>

          <button className="controls_button_styling"
          onClick={onFastForward}
          >
          <Image src={play} rounded />
          </button> */}

          <div className="right_controls_items">
            <div>
              <OverlayTrigger
                trigger="click"
                overlay={
                  <Popover>
                    <Popover.Body>
                      {[1, 1.25, 1.5, 1.75, 2].map((rate) => {
                        return (
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              onClick={() => onPlayBackRateChange(rate)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              {rate}X
                            </label>
                          </div>
                        );
                      })}
                    </Popover.Body>
                  </Popover>
                }
              >
                <button className=" controls_button_styling">
                  <Image
                    className="pspeed_img"
                    src={playbackspeedimg}
                    rounded
                  />
                </button>
              </OverlayTrigger>
            </div>
            <button className=" controls_button_styling">
              <Image className="fscreen_img" src={fullscreenimg} rounded />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
