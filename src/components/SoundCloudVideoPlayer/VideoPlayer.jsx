import React, { useRef, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./soundcloudvideoplayer.css";
import dil from "../../assets/soundcloudimages/Dil ko karrar aya (cover) - Annural Khalid.mp4";
import tidal from "../../assets/soundcloudimages/Tidal.png";
import tidalthumbnail from "../../assets/soundcloudimages/sidebarthumbnail.png";
import PlayerControls from "../PlayerControls/PlayerControls";
import ReactPlayer from "react-player";
import expand from "../../assets/soundcloudimages/expand.png";
import openmenu from "../../assets/soundcloudimages/Openmenu.png";

const data = [
  {
    id: 1,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 2,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 3,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 4,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 5,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 6,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 7,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 8,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
  {
    id: 9,
    image: tidal,
    title: "Sign Up",
    thumbnailimg: tidalthumbnail,
    thumbnailtitle: "Tidal",
    videotime: "12:34",
  },
];

const asidedata = [
  {
    id: 1,
    videotimelft: "00:00",
    videotitleontime: "App Landing Screen",
    time: 0,
  },
  {
    id: 2,
    videotimelft: "00:32",
    videotitleontime: "Create an Account",
    time: 10,
  },
  {
    id: 3,
    videotimelft: "01:11",
    videotitleontime: "Log In Screen",
    time: 20,
  },
  {
    id: 4,
    videotimelft: "01:25",
    videotitleontime: "Add a Picture",
    time: 30,
  },
  {
    id: 5,
    videotimelft: "01:47",
    videotitleontime: "Start a free Trial",
    time: 40,
  },
  {
    id: 6,
    videotimelft: "02:01",
    videotitleontime: "Select Plan",
    time: 50,
  },
  {
    id: 7,
    videotimelft: "02:23",
    videotitleontime: "Payment Details",
    time: 60,
  },
  {
    id: 8,
    videotimelft: "02:35",
    videotitleontime: "User Landing Screen",
    time: 70,
  },
];

const VideoPlayer = () => {
  const [playOn, setPlayOn] = useState({
    playing: true,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });
const [color, setColor] = useState(1);
  const [leftAsideShow, setLeftAsideShow] = useState(true);

  const { playing, playbackRate, played, seeking } = playOn;

  const playRef = useRef(null);
  // const playContainerRef= useRef(null)

  const handelPlayPause = () => {
    setPlayOn({ ...playOn, playing: !playOn.playing });
  };

  const handelTime = (time) => {
    playRef.current.seekTo(time);
  };

  // const handelRewind=()=>{
  //   playRef.current.seekTo(playRef.current.getCurrentTime() - 10)
  // }

  // const handelFastForward=()=>{
  //   playRef.current.seekTo(playRef.current.getCurrentTime() + 10)
  // }

  const onPlayBackRateChange = (rate) => {
    setPlayOn({ ...playOn, playbackRate: rate });
  };

  const handelProgress = (changeState) => {

    // console.log(changeState); 
    if (!playOn.seeking) {
      setPlayOn({ ...playOn, ...changeState });
    }
  }; 

  const handelSeekChange = (e, newValue) => {
    setPlayOn({ ...playOn, played: parseFloat(newValue / 100) });
  };

  const handelSeekMouseUp = (e, newValue) => {
    setPlayOn({ ...playOn, seeking: false });
    playRef.current.seekTo(parseFloat(newValue / 100)); 
  };

  const handelSeekMouseDown = (e) => {
    setPlayOn({ ...playOn, seeking: true });
  };


  const handelLeftSideBar = () => {
    setLeftAsideShow(!leftAsideShow);
  };

  

  return (
    <Container className="videoplayer_container" fluid="true">
      {leftAsideShow ? (
        <div className="leftaside_wrapper">
          <div className="sc_videoplayer_btn_wrapper">
            <div className="sc_ux_videos">
              <button className="video_btn">
                <span className="sc_la_ux_txt">UX Videos</span>
              </button>
            </div>
            <div className="sc_ui_videos">
              <button className="video_btn">
                <span className="sc_la_ui_txt">UI Screens</span>
              </button>
            </div>
          </div>
          {asidedata.map((asidedata, index) => {
            return (
              <div className="sc_video_time_duration_details" key={index}>
                <div
                  className={
                    color == asidedata.id
                      ? "sc_left_aside_time_desc sc_la_td_bg"
                      : "sc_left_aside_time_desc"
                  }
                  onClick={() => {
                    setColor(asidedata.id);
                  }}
                >
                  <button
                    className="lft_aside_links"
                    onClick={() => {
                      handelTime(asidedata.time);
                    }}
                  >
                    {" "}
                    <span
                      className={
                        color === asidedata.id
                          ? "sc_la_time_txt sc_la_td_bg"
                          : "sc_la_time_txt"
                      }
                      onClick={() => {
                        setColor(asidedata.id);
                      }}
                    >
                      {asidedata.videotimelft}
                    </span>
                    <span
                      className={
                        color === asidedata.id
                          ? "sc_la_desc_txt sc_la_td_bg"
                          : "sc_la_desc_txt"
                      }
                      onClick={() => {
                        setColor(asidedata.id);
                      }}
                    >
                      {asidedata.videotitleontime}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="videoplayer_wrapper">
        <div className="react_player_wrapper">
          <div onClick={handelLeftSideBar} className="expand_vp_wrapper">
            {leftAsideShow ? (
              <Image src={expand} rounded />
            ) : (
              <Image src={openmenu} rounded />
            )}
          </div>
          <ReactPlayer
            playbackRate={playbackRate}
            ref={playRef}
            onProgress={handelProgress}
            url={dil}
            muted={false}
            playing={playing}
            width={"100%"}
            height={"100%"}
            // controls="true"
          />

          <PlayerControls
            onPlayPause={handelPlayPause}
            playing={playing}
            onTime={handelTime}
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
            <button className="video_btn">
              <span className="sc_la_ux_txt">Similar Patterns</span>
            </button>
          </div>
          <div className=" sc_ux_videos">
            <button className="video_btn">
              <span className="sc_la_ui_txt">Similar Patterns</span>
            </button>
          </div>
        </div>

        {data.map((data, index) => {
          return (
            <div className="box_card" key={index}>
              <div className="right_aside_card_wrapper">
                <div style={{ display: "flex" }}>
                  <Image src={data.image} rounded />
                  <div className="right_aside_card_video_details">
                    <span className="ra_card_txt_signup">{data.title}</span>
                    <div className="right_aside_card_thumbnail_items">
                      <Image src={data.thumbnailimg} rounded />
                      <span className="tidal_txt">{data.thumbnailtitle}</span>
                    </div>
                  </div>
                </div>
                <div className="right_aside_video_time_wrapper">
                  <span className="ra_card_video_time_txt">
                    {data.videotime}
                  </span>
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
