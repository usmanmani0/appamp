import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Image,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import "./soundcloudvideoplayer.css";
import fullscreenimg from "../../assets/soundcloudimages/fullscreen.png";
import dil from "../../assets/soundcloudimages/Dil ko karrar aya (cover) - Annural Khalid.mp4";
import tidal from "../../assets/soundcloudimages/Tidal.png";
import tidalthumbnail from "../../assets/soundcloudimages/sidebarthumbnail.png";
import PlayerControls from "../PlayerControls/PlayerControls";
import ReactPlayer from "react-player";
import expand from "../../assets/soundcloudimages/expand.png";
import eclipse from "../../assets/soundcloudimages/eclipse.png";
import openmenu from "../../assets/soundcloudimages/Openmenu.png";
import plusicon from "../../assets/soundcloudimages/Add.png";
import downloadicon from "../../assets/soundcloudimages/Download.png";
import linkicon from "../../assets/soundcloudimages/Link.png";
import eimg1 from "../../assets/images/card1.png";
import eimg11 from "../../assets/images/screenP.png";
import eimg2 from "../../assets/soundcloudimages/Exploringimg2.png";
import eimg3 from "../../assets/soundcloudimages/Exploringimg3.png";
import eimg4 from "../../assets/soundcloudimages/Exploringimg4.png";
import eimg5 from "../../assets/soundcloudimages/Exploringimg5.png";
import eimg6 from "../../assets/soundcloudimages/Exploringimg6.png";
import checkicon from "../../assets/soundcloudimages/Check.png";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";
import checkalert from "../../assets/soundcloudimages/CheckAlert.png";
import playiconsrightcard from "../../assets/soundcloudimages/Playiconcards.png";
import navactionbar from "../../assets/soundcloudimages/navactionbar.png";
import { IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import { findDOMNode } from "react-dom";
import screenfull from "screenfull";
import { useSelector, useDispatch } from "react-redux";
import {
  handleShowModal,
  changeSideBarContent,
} from "../../feature/hideShowModal/hideshowModal";
import MobileAddCollectionModal from "../MobileAddCollection";
import UxVideoSecreenPlaylist from "../UxVideosPlaylist";
import UxVideoSecreen from "../UxVideosSecreen";
import SimilarPatterns from "../SimilarPatterns";
import Similar from "../SimilarPatterns/similar"

// const asidedata = [
//   {
//     id: 1,
//     videotimelft: "00:00",
//     videotitleontime: "App Landing Screen",
//     time: 0,
//   },
//   {
//     id: 2,
//     videotimelft: "00:32",
//     videotitleontime: "Create an Account",
//     time: 10,
//   },
//   {
//     id: 3,
//     videotimelft: "01:11",
//     videotitleontime: "Log In Screen",
//     time: 20,
//   },
//   {
//     id: 4,
//     videotimelft: "01:25",
//     videotitleontime: "Add a Picture",
//     time: 30,
//   },
//   {
//     id: 5,
//     videotimelft: "01:47",
//     videotitleontime: "Start a free Trial",
//     time: 40,
//   },
//   {
//     id: 6,
//     videotimelft: "02:01",
//     videotitleontime: "Select Plan",
//     time: 50,
//   },
//   {
//     id: 7,
//     videotimelft: "02:23",
//     videotitleontime: "Payment Details",
//     time: 60,
//   },
//   {
//     id: 8,
//     videotimelft: "02:35",
//     videotitleontime: "User Landing Screen",
//     time: 70,
//   },
// ];


const cardsdata = [
  {
    id: 1,
    image: eimg1,
    title: "title1",
  },
  {
    id: 2,
    image: eimg2,
    title: "title2",
  },
  {
    id: 3,
    image: eimg3,
    title: "title3",
  },
  {
    id: 4,
    image: eimg1,
    title: "title4",
  },
  {
    id: 5,
    image: eimg5,
    title: "title5",
  },
  {
    id: 6,
    image: eimg6,
    title: "title6",
  },
];

const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }

  console.log(",kkkkk", seconds * 1000);
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }

  return `${mm}:${ss}`;
};

const VideoPlayer = (props) => {
  // const { color, setColor } = props
  const location = useLocation()
  console.log("kkkklll", location)

  const [asidedata, setAsideData] = useState([
    {
      id: 1,
      videotimelft: "0:00",
      videotitleontime: "App Landing Screen",
      time: 0,
    },
    {
      id: 2,
      videotimelft: "0:32",
      videotitleontime: "Create an Account",
      time: 32,
    },
    {
      id: 3,
      videotimelft: "1:11",
      videotitleontime: "Log In Screen",
      time: 71,
    },
    {
      id: 4,
      videotimelft: "1:25",
      videotitleontime: "Add a Picture",
      time: 75,
    },
    {
      id: 5,
      videotimelft: "1:47",
      videotitleontime: "Start a free Trial",
      time: 80,
    },
    {
      id: 6,
      videotimelft: "2:01",
      videotitleontime: "Select Plan",
      time: 90,
    },
    {
      id: 7,
      videotimelft: "2:23",
      videotitleontime: "Payment Details",
      time: 95,
    },
    {
      id: 8,
      videotimelft: "2:35",
      videotitleontime: "User Landing Screen",
      time: 99,
    },
  ]);

  const showAddModal = useSelector((state) => state.showModal.show);
  let color = useSelector((state) => state.showModal.color);

  const fullscreen = useSelector((state) => state.showModal.fullscreen);
  const dispatch = useDispatch();
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  const [playOn, setPlayOn] = useState({
    playing: true,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    muted: true,
    volume: 0.5,
  });

  const { playing, playbackRate, played, muted, volume, seeking } = playOn;
  const [tick, setTick] = useState([]);

  const checkTick = async (index) => {
    let findIndex = tick.find((data) => data == index);
    if (findIndex) {
      let removeIndex = await tick.filter((data) => data != index);
      setTick(removeIndex);
    } else {
      setTick([...tick, index]);
    }
  };

  const [setSave, showSetSave] = useState(false);
  const saveCollection = () => {
    showSetSave(!setSave);

    setTimeout(() => {
      showSetSave(null);
    }, 5000);
  };

  const [setCopy, showSetCopy] = useState(false);
  const copyLink = () => {
    showSetCopy(!setCopy);

    setTimeout(() => {
      showSetCopy(null);
    }, 5000);
  };

  // const [color, setColor] = useState(1);
  const [checkdata, setCheckdata] = useState([
    {
      id: 1,
      checked: false,
      image: checkicon,
      Name: "Collection #",
    },
    {
      id: 2,
      checked: false,
      image: checkicon,
      Name: "Collection #",
    },
    {
      id: 3,
      checked: false,
      image: checkicon,
      Name: "Collection #",
    },
    {
      id: 4,
      checked: false,
      image: checkicon,
      Name: "Collection #",
    },
  ]);

  const [leftAsideShow, setLeftAsideShow] = useState(true);

  const playRef = useRef(null);
  const videoPlayerContainerRef = useRef();
  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }
  const handelPlayPause = () => {
    setPlayOn({ ...playOn, playing: !playOn.playing });
  };

  useEffect(async () => {
    await asidedata?.map((data) => {
      if (data?.id == color) {
        playRef?.current?.seekTo(data.time);
      }
    });
  }, [color]);

  const handelTime = (time) => {
    playRef?.current.seekTo(time);
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
    // console.log("CHANGE STATE", changeState);
    if (!playOn.seeking) {
      setPlayOn({ ...playOn, ...changeState });
    }
  };

  const handelSeekChange = (e, newValue) => {
    setPlayOn({ ...playOn, played: parseFloat(newValue / 100) });
  };
  const handelSeekMouseDown = (e) => {
    setPlayOn({ ...playOn, seeking: true });
  };
  const handelSeekMouseUp = (e, newValue) => {
    setPlayOn({ ...playOn, seeking: false });
    playRef.current.seekTo(newValue / 100);
  };

  const handelLeftSideBar = () => {
    setLeftAsideShow(!leftAsideShow);
  };

  const handelMute = () => {
    setPlayOn({ ...playOn, muted: !playOn.muted });
  };

  const handelVolumeChange = (e, newValue) => {
    setPlayOn({
      ...playOn,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handelVolumeSeekUp = (e, newValue) => {
    setPlayOn({
      ...playOn,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPopover, setShowPopover] = useState(false);

  const handelPopover = () => {
    setShowPopover(!showPopover);
  };

  const addCollection = () => {
    let obj = {
      id: 1,
      checked: false,
      image: checkicon,
      Name: "Collection #",
    };
    // console.log("ssssssss");
    setCheckdata([...checkdata, obj]);
  };
  // console.log("TICK ======== ", tick);
  const [full, setFull] = useState(false);
  const goFullScreen = () => {
    screenfull.toggle(videoPlayerContainerRef.current);
  };

  const [showUmodal, setShowUmodal] = useState();

  const handelUmodel = (index) => {
    if (index == showUmodal) {
      setShowUmodal(-1);
    } else setShowUmodal(index);
  };
  // console.log("duration");
  const [uiVideoShow, setuiVideoShow] = useState(false);

  const handeluiVideo = () => {
    setuiVideoShow(!uiVideoShow);
  };
  const [similarPatternShow, setsimilarPatternShow] = useState(false);

  const handelSimilarPattern = () => {
    setsimilarPatternShow(!similarPatternShow);
  };

  const [similarPatternIproShow, setsimilarPatternIproShow] = useState(false);

  const handelSimilarPatternIpro = () => {
    setsimilarPatternIproShow(!similarPatternIproShow);
  };

  const currentTime = playRef.current
    ? playRef.current.getCurrentTime()
    : "00:00";
  const duration = playRef.current ? playRef.current.getDuration() : "00:00";

  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);

  useEffect(() => {
    const elapsedTime = format(currentTime);
    var a = elapsedTime.split(":");
    // console.log("g", a);
    var seconds = parseInt(a[0]) * 60 + parseInt(a[1]);
    // console.log(seconds);

    let arrayseconds = asidedata[color - 1].videotimelft;
    // console.log("static array data",arrayseconds)
    var b = arrayseconds.split(":");
    // console.log("g", b);
    var aS = parseInt(b[0]) * 60 + parseInt(b[1]);
    // console.log(aS);

    // console.log("coooo", elapsedTime, color);
    let index = asidedata.findIndex(
      (item) => item.videotimelft === elapsedTime
    );
    // console.log("please set the index", index);
    if (index > 0) {
      dispatch(changeSideBarContent(index + 1));
    }
    // console.log("aaaaaa====", seconds <= aS, seconds >= aS);
    // if (seconds<aS) {
    //   dispatch(changeSideBarContent(color - 1));
    // }
  }, [elapsedTime]);

  // keyboard keys functions

  document.body.onkeyup = function (e) {
    if (e.code === "Space") {
      //  console.log('space presed', e) //your code
      setPlayOn({ ...playOn, playing: !playOn.playing });
    } else if (e.code === "ArrowRight") {
      //  console.log('arrow right presed', e) //your code
      if (color >= asidedata.length) {
        dispatch(changeSideBarContent(1));
      } else {
        dispatch(changeSideBarContent(color + 1));
      }
    } else if (e.code === "ArrowLeft")
      if (color <= 1) {
        // setColor(asidedata.length);
        dispatch(changeSideBarContent(asidedata.length));
      } else {
        // setColor(color--);
        dispatch(changeSideBarContent(color - 1));
      }
    else {
      console.log("err");
    }
  };

  return (
    <>
      <Container className="videoplayer_container" fluid="true">
        {leftAsideShow ? (
          <div className="leftaside_wrapper">
            <div>
              <div className="sc_videoplayer_btn_wrapper">
                <div
                  onClick={handeluiVideo}
                  className={uiVideoShow ? "sc_ux_videos" : "sc_ux_videos_na"}
                >
                  <button className="video_btn">
                    <span className="sc_la_ux_txt">UX Videos</span>
                  </button>
                </div>
                <div
                  onClick={handeluiVideo}
                  className={uiVideoShow ? " sc_ui_videos_na" : "sc_ui_videos"}
                >
                  <button className="video_btn">
                    <span className="sc_la_ui_txt">UI Screens</span>
                  </button>
                </div>
              </div>
            </div>
            {uiVideoShow ?


              location.state.moreResult ?
                asidedata.map((asidedata, index) => {
                  return (
                    <div className="sc_video_time_duration_details" key={index}>
                      <div
                        className={
                          color === asidedata.id
                            ? "sc_left_aside_time_desc sc_la_td_bg"
                            : "sc_left_aside_time_desc"
                        }
                        onClick={() => {
                          dispatch(changeSideBarContent(asidedata.id));
                        }}
                      >
                        <button className="lft_aside_links">
                          {" "}
                          <div className="time_wrapper_lf_aside">
                            <span
                              className={
                                color === asidedata.id
                                  ? "sc_la_time_txt sc_la_td_bg"
                                  : "sc_la_time_txt"
                              }
                            >
                              {asidedata.videotimelft}
                            </span>
                          </div>
                          <span
                            className={
                              color === asidedata.id
                                ? "sc_la_desc_txt sc_la_td_bg"
                                : "sc_la_desc_txt"
                            }
                          >
                            {truncate(`${asidedata.videotitleontime}`, 20)}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                }) :

                <div className="Ui_sccreen_main_scrool_wrapper">
                  <div className="mbl_cards_box">
                    <span>1244 UI Screens</span>
                    {cardsdata.map((data) => {
                      return (
                        <>
                          <div className="mbl_card">
                            <div className="pl_icon_cards_right">
                              <img src={playiconsrightcard} alt="" />
                            </div>
                            <div className="time_right_wrapper_cards">
                              <span className="time_right_wrapper_cards_txt">
                                12:34
                              </span>
                            </div>
                            <img
                              src={data.image}
                              alt="ERROR"
                              style={{
                                outline: "1px solid #e9ecef",
                                borderRadius: "10px",
                              }}
                            />

                            {/* <div className="card_title">{data.title}</div> */}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              : (
                <div>
                  <UxVideoSecreenPlaylist />
                </div>
              )}
            {/* {uiVideoShow ? (
              asidedata.map((asidedata, index) => {
                return (
                  <div className="sc_video_time_duration_details" key={index}>
                    <div
                      className={
                        color === asidedata.id
                          ? "sc_left_aside_time_desc sc_la_td_bg"
                          : "sc_left_aside_time_desc"
                      }
                      onClick={() => {
                        dispatch(changeSideBarContent(asidedata.id));
                      }}
                    >
                      <button className="lft_aside_links">
                        {" "}
                        <div className="time_wrapper_lf_aside">
                          <span
                            className={
                              color === asidedata.id
                                ? "sc_la_time_txt sc_la_td_bg"
                                : "sc_la_time_txt"
                            }
                          >
                            {asidedata.videotimelft}
                          </span>
                        </div>
                        <span
                          className={
                            color === asidedata.id
                              ? "sc_la_desc_txt sc_la_td_bg"
                              : "sc_la_desc_txt"
                          }
                        >
                          {truncate(`${asidedata.videotitleontime}`, 20)}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
          

              <div>
              <UxVideoSecreenPlaylist />
              
              </div>
            )} */}
          </div>
        ) : null}
        {console.log("more result", props)}
        <div className="videoplayer_wrapper" onClick={handelPlayPause}>
          <div className="react_player_wrapper">
            <div
              onClick={handelLeftSideBar}
              className="expand_vp_wrapper dis_icon_mv"
            >
              {leftAsideShow ? (
                <div>
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => <Tooltip {...props}>Collapsse</Tooltip>}
                    placement="bottom"
                  >
                    <Image
                      src={expand}
                      rounded
                      style={{
                        backgroundColor: "transparent",
                      }}
                    />
                  </OverlayTrigger>
                </div>
              ) : (
                <div className="copy_wrap">
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => <Tooltip {...props}>Expand</Tooltip>}
                    placement="bottom"
                  >
                    <Image
                      className="openmenue_icon"
                      src={openmenu}
                      rounded
                      style={{ width: "24px", height: "24px" }}
                    />
                    {/* <div className="ecl" style={{ background: "white" }}>
                      <IoIosArrowBack style={{ marginRight: "-15px" }} />
                      <IoIosArrowBack />
                    </div> */}
                  </OverlayTrigger>
                </div>
              )}
            </div>
            <div className="dis_none_mbl_view">
              <div onClick={handelPopover} className="plus_icons_wp">
                <div className="copy_wrap ">
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>Add to Collection</Tooltip>
                    )}
                    placement="bottom"
                  >
                    <Image
                      src={plusicon}
                      rounded
                      style={{ width: "24px", height: "24px" }}
                    />
                  </OverlayTrigger>
                </div>
              </div>
              <div className="download_icons_wp">
                <div className="copy_wrap ">
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>Download Video</Tooltip>
                    )}
                    placement="bottom"
                  >
                    <Image
                      src={downloadicon}
                      rounded
                      style={{ width: "24px", height: "24px" }}
                    />
                  </OverlayTrigger>
                </div>
              </div>
              <div onClick={copyLink} className="copy_icons_wp">
                <div className="copy_wrap ">
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>Copy Share Link</Tooltip>
                    )}
                    placement="bottom"
                  >
                    <Image
                      src={linkicon}
                      rounded
                      style={{ width: "24px", height: "24px" }}
                    />
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            {showPopover ? (
              <div className="popoover_wrapper j">
                <div class="form-group has-search search_modified ">
                  <input
                    type="text"
                    class="form-control"
                    id="form_control"
                    placeholder="Search Collections"
                  ></input>
                </div>
                {checkdata.map((data, index) => {
                  return (
                    <div className="collection_checkbox_wrapper " key={index}>
                      <div
                        className={
                          tick.includes(`${index}`)
                            ? "checkbox_wrapper_enable"
                            : "checkbox_wrapper"
                        }
                        onClick={() => checkTick(`${index}`)}
                      >
                        {tick.includes(`${index}`) ? (
                          <Image src={data.image} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        <span className="collection_txt">
                          {data.Name + " " + [index + 1]}
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div className="save_collection_btn_wrapper">
                  <div
                    className="add_collection_btn"
                    onClick={() => addCollection()}
                  >
                    <Image src={plusiconsave} />
                    <span className="nc_txt">New Collection</span>
                  </div>
                  <div
                    className={
                      tick.length >= 1
                        ? "save_coll_enable_btn"
                        : " save_collection_btn"
                    }
                    onClick={tick.length >= 1 ? () => saveCollection() : null}
                  >
                    {" "}
                    <Link
                      to="/SoundCloudPage"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="save_txt">Save</span>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            ) : null}

            {setSave ? (
              <div className="confirmation_wrapper">
                <Image src={checkalert} />
                <span className="alert_txt">Video added to 2 Collections</span>
                <div onClick={() => setTick([])} className="undo_btn">
                  <span className="undo_txt">Undo</span>
                </div>
              </div>
            ) : null}

            {setCopy ? (
              <div className="link_copy_wrapper">
                <Image src={checkalert} />
                <span className="alert_txt">Link copied</span>
              </div>
            ) : null}


            {
              location.state.moreResult ?
                <div
                  ref={videoPlayerContainerRef}
                  style={{ position: "relative", height: "100%" }}
                >
                  <ReactPlayer
                    playbackRate={playbackRate}
                    ref={playRef}
                    onProgress={handelProgress}
                    url={dil}
                    muted={muted}
                    playing={playing}
                    width={"100%"}
                    height={"100%"}
                    volume={volume}
                    controls={""}
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
                    seeking={seeking}
                    muted={muted}
                    onMute={handelMute}
                    onVolumeSeekUp={handelVolumeSeekUp}
                    onVolumeChange={handelVolumeChange}
                    volume={volume}
                    goFullScreen={goFullScreen}
                    elapsedTime={elapsedTime}
                    totalDuration={totalDuration}
                  />
                </div> :

                <div style={{ height: "-webkit-fill-available" }}>
                  <div
                    className="screen_player"
                  >
                    <img src={eimg11} className="screen_player_img" alt="" />

                  </div>
                  <div
                    className="screen_player_full_screen"
                    onClick={() => {
                      goFullScreen();
                      setFull(!full);
                    }}
                  >
                    <img src={fullscreenimg} alt="" />
                  </div>
                </div>}
          </div>
        </div>
        <div className="rightaside_wrapper">
          {
            location.state.moreResult ? <SimilarPatterns /> : <div>
              <div className="d-flex justify-content-center">
                <div className="sc_videoplayer_btn_wrapper">
                  <div className="sc_ui_videos_right_more">
                    <button className="video_btn">
                      <span className="sc_la_ux_txt">More Results</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="Ui_sccreen_main_scrool_wrapper">
                <div className="mbl_cards_box">
                  <span>1244 UI Screens</span>
                  {cardsdata.map((data) => {
                    return (
                      <>
                        <div className="mbl_card">
                          <div className="pl_icon_cards_right">
                            <img src={playiconsrightcard} alt="" />
                          </div>
                          <div className="time_right_wrapper_cards">
                            <span className="time_right_wrapper_cards_txt">
                              12:34
                            </span>
                          </div>
                          <img
                            src={data.image}
                            alt="ERROR"
                            style={{
                              outline: "1px solid #e9ecef",
                              borderRadius: "10px",
                            }}
                          />

                          {/* <div className="card_title">{data.title}</div> */}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          }


          {/* More Resluts */}


        </div>
      </Container>
      {/* id="myHeader" */}
      <Container className="ipad_view_container dis" fluid="true">
        <div className="rightaside_wrapper_ipad">
          <div
            className="d-flex justify-content-center"
            style={{ borderBottom: "1px solid #f4f4f4" }}
          >
            <div className="sc_videoplayer_btn_wrapper_ipad">
              <div
                onClick={handelSimilarPatternIpro}
                className={
                  similarPatternIproShow
                    ? "sc_ui_videos_ipro"
                    : "sc_ui_videos_ipro_na"
                }
              >
                <button className="video_btn">
                  <span className="sc_la_ux_txt">Similar Patterns</span>
                </button>
              </div>
              <div
                onClick={handelSimilarPatternIpro}
                className={
                  similarPatternIproShow
                    ? "sc_ux_videos_ipro_na"
                    : "sc_ux_videos_ipro"
                }
              >
                <button className="video_btn">
                  <span className="sc_la_ui_txt">Current App</span>
                </button>
              </div>
            </div>
          </div>

          <hr />
          <div className="mbl_cards_box">
            {cardsdata.map((data, index) => {
              return (
                <>
                  <div
                    className="mbl_card"
                    onClick={() => {
                      handelUmodel(index);
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img src={data.image} alt="ERROR" />

                      <div className="pl_icon_cards_right">
                        <img src={playiconsrightcard} alt="" />
                      </div>

                      <div className="time_right_wrapper_cards">
                        <span className="time_right_wrapper_cards_txt">
                          12:34
                        </span>
                      </div>

                      <div
                        onClick={() => {
                          handelUmodel(index);
                        }}
                        className="ac_icon_cards_right"
                      >
                        <img src={navactionbar} alt="" />
                      </div>

                      {index === showUmodal ? (
                        <div className="u_modal_cards_mv">
                          <div
                            className="u_plus_wrapper_mdl"
                            onClick={() => dispatch(handleShowModal(true))}
                          >
                            <Image src={plusicon} rounded />
                          </div>
                          <div className="u_down_wrapper_mdl">
                            <Image src={downloadicon} rounded />
                          </div>
                          <div className="u_cpy_wrapper_mdl">
                            <Image src={linkicon} rounded />
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="card_title">{data.title}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Container>
      <Container className="mv_sc_container">
        <button
          className="mv_sc_player_btn"
          variant="primary"
          onClick={handleShow}
        >
          <Image src={openmenu} />
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Chapters</Offcanvas.Title>
            <Offcanvas.Title>
              <div onClick={() => setShow(false)} className="ecl">
                <IoIosArrowBack style={{ marginRight: "-15px" }} />
                <IoIosArrowBack />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
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
                      dispatch(changeSideBarContent(asidedata.id));
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
                          dispatch(changeSideBarContent(asidedata.id));
                        }}
                      >
                        {asidedata.videotimelft}
                      </span>
                      <span
                        className={
                          color === asidedata.id
                            ? "sc_la_desc_txt sc_la_td_bg h"
                            : "sc_la_desc_txt h"
                        }
                        onClick={() => {
                          dispatch(changeSideBarContent(asidedata.id));
                        }}
                      >
                        {truncate(`${asidedata.videotitleontime}`, 16)}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </Offcanvas.Body>
        </Offcanvas>
        <div className="mv_cards_top_btn">
          <div className="sc_videoplayer_btn_wrapper_ipad">
            <div className=" sc_ui_videos">
              <button className="video_btn">
                <span className="sc_la_ux_txt">Similar Patterns</span>
              </button>
            </div>
            <div className=" sc_ux_videos">
              <button className="video_btn">
                <span className="sc_la_ui_txt">Current App</span>
              </button>
            </div>
          </div>
          <hr />
        </div>
        <MobileAddCollectionModal />
      </Container>
    </>
  );
};

export default VideoPlayer;
