import React, { useRef, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./soundcloudvideoplayer.css";
import dil from "../../assets/soundcloudimages/Dil ko karrar aya (cover) - Annural Khalid.mp4";
import tidal from "../../assets/soundcloudimages/Tidal.png";
import tidalthumbnail from "../../assets/soundcloudimages/sidebarthumbnail.png";
import PlayerControls from "../PlayerControls/PlayerControls";
import ReactPlayer from "react-player";

const data = [
  {
    id: 1,
    // image:img1,
    title: "Card title 1",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 2,
    // image:img2,
    title: "Card title 2",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 3,
    // image:img3,
    title: "Card title 3",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 4,
    // image:img4,
    title: "Card title 4",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 5,
    // image:img5,
    title: "Card title 5",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 6,
    // image:img6,
    title: "Card title 6",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 7,
    // image:img1,
    title: "Card title 7",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 8,
    // image:img2,
    title: "Card title 8",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
  {
    id: 9,
    // image:img3,
    title: "Card title 9",
    description:
      "This is a longer card with supporting text below as a natural lead -in to additional content. This content is a little bit longer.",
  },
];



const VideoPlayer = () => {

  const [playOn, setPlayOn] = useState({
    playing: true,
    playbackRate:1.0,
    played:0,
    seeking:false,
  });
  
  const { playing , playbackRate, played, seeking} = playOn;

  const playRef = useRef(null)
  // const playContainerRef= useRef(null)

  const handelPlayPause = () => {
    setPlayOn({...playOn, playing:!playOn.playing})
  }

  // const handelRewind=()=>{
  //   playRef.current.seekTo(playRef.current.getCurrentTime() - 10)
  // }

  // const handelFastForward=()=>{
  //   playRef.current.seekTo(playRef.current.getCurrentTime() + 10)
  // } 

  const onPlayBackRateChange=(rate) =>{
    setPlayOn({...playOn, playbackRate:rate })
  }

  const handelProgress= (changeState) =>{
    if(!playOn.seeking){
      setPlayOn({...playOn, ...changeState });

    }
  }

  const handelSeekChange= (e, newValue) =>{
    setPlayOn({...playOn, played:parseFloat(newValue/100)})
  }

  const handelSeekMouseDown = (e) =>{
    setPlayOn({...playOn,seeking:true })
  }


  const handelSeekMouseUp=(e, newValue) =>{
    setPlayOn({...playOn,seeking:false })
    playRef.current.seekTo(newValue/100)
  }


  return (
    <Container className="videoplayer_container" fluid="true">
      <div className="leftaside_wrapper">
        <div className="sc_videoplayer_btn_wrapper">
          <div className="sc_ux_videos">
            <span className="sc_la_ux_txt">UX Videos</span>
          </div>
          <div className="sc_ui_videos">
            <span className="sc_la_ui_txt">UI Screens</span>
          </div>
        </div>
        {data.map((data, index) => {
          return (
            <div className="sc_video_time_duration_details" key={index}>
              <div
                className={
                  index === 0
                    ? "sc_left_aside_time_desc sc_la_td_bg"
                    : "sc_left_aside_time_desc"
                }
              >
                <span
                  className={
                    index === 0
                      ? "sc_la_time_txt sc_la_time_txt_cl"
                      : "sc_la_time_txt"
                  }
                >
                  00:00
                </span>
                <span
                  className={
                    index === 0
                      ? "sc_la_desc_txt sc_la_time_txt_cl"
                      : "sc_la_desc_txt"
                  }
                >
                  App Landing Screen
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="videoplayer_wrapper">
        <div  className="react_player_wrapper">
          <ReactPlayer
          playbackRate={playbackRate}
            ref={playRef}
            onProgress={handelProgress}
            url={dil}
            muted={false}
            playing={playing}
            width={"100%"}
            height={"100%"}
          />
          <PlayerControls
          onPlayPause={handelPlayPause}
          playing={playing}
          // onRewind={handelRewind}
          // onFastForward={handelFastForward}
          playbackRate={playbackRate}
          onPlayBackRateChange={onPlayBackRateChange}
          played={played}
          onSeek={handelSeekChange}
          onSeekMouseDown={handelSeekMouseDown}
          onSeekMouseUp={handelSeekMouseUp}

           />
        </div>
      </div>
      <div className="rightaside_wrapper">
        <div className="sc_videoplayer_btn_wrapper">
          <div className=" sc_ui_videos">
            <span className="sc_la_ux_txt">Similar Patterns</span>
          </div>
          <div className=" sc_ux_videos">
            <span className="sc_la_ui_txt">Similar Patterns</span>
          </div>
        </div>

        {data.map((data, index) => {
          return (
            <div className="box_card" key={index}>
              <div className="right_aside_card_wrapper">
                <div style={{ display: "flex" }}>
                  <Image src={tidal} rounded />
                  <div className="right_aside_card_video_details">
                    <span className="ra_card_txt_signup">Sign Up</span>
                    <div className="right_aside_card_thumbnail_items">
                      <Image src={tidalthumbnail} rounded />
                      <span className="tidal_txt">Tidal</span>
                    </div>
                  </div>
                </div>
                <div className="right_aside_video_time_wrapper">
                  <span className="ra_card_video_time_txt">12:34</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default VideoPlayer;
