// import { hot } from "react-hot-loader";
// import { findDOMNode } from "react-dom";
// import screenfull from "screenfull";

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
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled, useTheme } from "@mui/material/styles";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const PlayerControls = ({
  onTime,
  onPlayPause,
  playing,
  onRewind,
  onFastForward,
  onPlayBackRateChange,
  playbackRate,
  played,
  onSeek,
  onSeekMouseDown,
  onSeekMouseUp,
  muted,
  onMute,
  onVolumeChange,
  onVolumeSeekUp,
  volume,
  seeking,
}) => {
  const theme = useTheme();

  const [fullScreen, setFullScreen] = useState(false);
  // const onClickFullscreen = () => {
  //   screenfull.request(findDOMNode(ref.player))
  // }
  const handelFUllScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div>
      <div className="react_player_controls_wrapper">
        <Slider
          aria-label="time-indicator"
          size="small"
          value={played * 100}
          min={0}
          step={1}
          max={100}
          onChange={onSeek}
          onMouseDown={onSeekMouseDown}
          onChangeCommitted={onSeekMouseUp}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#C5C5C5",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgb(255 255 255 / 16%)"
                    : "rgb(0 0 0 / 16%)"
                }`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
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
          onClick={onMute}
          >
          <Slider
          min={0}
          max={100}
          value={volume * 100}
          onChange={onVolumeChange}
          onChangeCommitted={onVolumeSeekUp}

           />
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
                              {rate}x
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
