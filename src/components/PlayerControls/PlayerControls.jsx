import React, { useRef, useState } from "react";
// import { findDOMNode } from 'react-dom'
// import screenfull from 'screenfull'
// import { hot } from 'react-hot-loader'
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
// import { Slider } from "@mui/material"; 
import Slider, { SliderThumb } from '@mui/material/Slider';

import { styled } from '@mui/material/styles';

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
  onSeekMouseUp
}) => {

  const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}); 


const [fullScreen, setFullScreen] = useState(false)
// const onClickFullscreen = () => {
//   screenfull.request(findDOMNode(ref.player))
// }
const handelFUllScreen=() =>{
    setFullScreen(!fullScreen)
}
// const now = played;
  return (
    <div>
      <div className="react_player_controls_wrapper">
        {/* <ProgressBar
          className="pb_wrapper"
          now={played * 100}
          onChange={onSeek}
          onMouseDown={onSeekMouseDown}
          onChangeCommitted={onSeekMouseUp}
        //   label={`${played}%`}
        /> */}

        <PrettoSlider
        min={0}
        max={100}
        value={played * 100} 
        onChange={onSeek}
          onMouseDown={onSeekMouseDown}
          onChangeCommitted={onSeekMouseUp}

         />
        <div className="controls_bottom_items">
          <button className="controls_button_styling" onClick={onPlayPause}>
            {playing ? (
              <Image src={pause} rounded />
            ) : (
              <Image className="pad_lft" src={play} rounded />
            )}
          </button>
{/* 
          <button className="controls_button_styling"
          onClick={onTime}
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
            <button  className=" controls_button_styling">
              <Image className="fscreen_img" src={fullscreenimg} rounded />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
