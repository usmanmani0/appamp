import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Button,
  Tooltip,
  CardGroup,
  Card,
  Offcanvas,
} from "react-bootstrap";
import "./soundcloudvideoplayer.css";
import dil from "../../assets/soundcloudimages/Dil ko karrar aya (cover) - Annural Khalid.mp4";
import tidal from "../../assets/soundcloudimages/Tidal.png";
import tidalthumbnail from "../../assets/soundcloudimages/sidebarthumbnail.png";
import PlayerControls from "../PlayerControls/PlayerControls";
import ReactPlayer from "react-player";
import expand from "../../assets/soundcloudimages/expand.png";
import openmenu from "../../assets/soundcloudimages/Openmenu.png";
import plusicon from "../../assets/soundcloudimages/Add.png";
import downloadicon from "../../assets/soundcloudimages/Download.png";
import linkicon from "../../assets/soundcloudimages/Link.png";
import eimg1 from "../../assets/soundcloudimages/Exploringimg1.png";
import eimg2 from "../../assets/soundcloudimages/Exploringimg2.png";
import eimg3 from "../../assets/soundcloudimages/Exploringimg3.png";
import eimg4 from "../../assets/soundcloudimages/Exploringimg4.png";
import eimg5 from "../../assets/soundcloudimages/Exploringimg5.png";
import eimg6 from "../../assets/soundcloudimages/Exploringimg6.png";
import checkicon from "../../assets/soundcloudimages/Check.png";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";
import checkalert from "../../assets/soundcloudimages/CheckAlert.png";

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
    image: eimg4,
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

const VideoPlayer = () => {
  const [playOn, setPlayOn] = useState({
    playing: true,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });
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

  const [setCopy, showSetCopy] = useState(false)
  const copyLink = () =>{
    showSetCopy(!setCopy);

    setTimeout(() => {
      showSetCopy(null);
    }, 5000);
  }

  const [color, setColor] = useState(1);
  const [checkdata, setCheckdata] = useState([
    {
      id: 1,
      checked: false,
      image: checkicon,
      Name: "Collection #",
    },
    {
      id: 1,
      checked: true,
      image: checkicon,
      Name: "Collection #",
    },
    {
      id: 1,
      checked: true,
      image: checkicon,
      Name: "Collection #",
    },
  ]);

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
    console.log("CHANGE STATE", changeState);
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

  return (
    <>
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
            <div
              onClick={handelLeftSideBar}
              className="expand_vp_wrapper dis_icon_mv"
            >
              {leftAsideShow ? (
                <Image src={expand} rounded />
              ) : (
                <Image className="openmenue_icon" src={openmenu} rounded />
              )}
            </div>
            <div onClick={handelPopover} className="plus_icons_wp">
              <Image src={plusicon} rounded />
            </div>
            <div  className="download_icons_wp">
              <Image src={downloadicon} rounded />
            </div>
            <div onClick={copyLink} className="copy_icons_wp">
              <Image src={linkicon} rounded />
            </div>

            {showPopover ? (
              <div className="popoover_wrapper">
                <div class="form-group has-search ">
                  <input
                    type="text"
                    class="form-control"
                    id="form_control"
                    placeholder="Search Collections"
                  ></input>
                </div>
                {checkdata.map((data, index) => {
                  return (
                    <div className="collection_checkbox_wrapper" key={index}>
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
                    <span className="save_txt">Save</span>{" "}
                  </div>
                </div>
              </div>
            ) : null}

            {setSave ? (
              <div className="confirmation_wrapper">
                <Image src={checkalert} />
                <span className="alert_txt">Video added to 2 Collections</span>
                <div className="undo_btn">
                  <span className="undo_txt">Undo</span>
                </div>
              </div>
            ) : null}

          { setCopy ?  <div className="link_copy_wrapper">
              <Image src={checkalert} />
              <span className="alert_txt">Link copied</span>
            </div> : null}


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
                <span className="sc_la_ui_txt">Current App</span>
              </button>
            </div>
          </div>

          {data.map((data, index) => {
            return (
              <div className="box_card " key={index}>
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

      <Container className="ipad_view_container dis" fluid="true">
        <div className="rightaside_wrapper_ipad">
          <div className="sc_videoplayer_btn_wrapper">
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
          <div className="mbl_cards_box">
            {cardsdata.map((data) => {
              return (
                <>
                  <div className="mbl_card">
                    <img src={data.image} alt="ERROR" />
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
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Chapters</Offcanvas.Title>
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
          </Offcanvas.Body>
        </Offcanvas>
        <div className="mv_cards_top_btn">
          <div className="sc_videoplayer_btn_wrapper">
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

        {/* <div className="cards_imgs">
          <CardGroup className="crd_grp_mv">
            <Card className="cards_ipad">
              <Card.Img className="img_size" variant="top" src={eimg1} />
              <Card.Title className="cards_title_txt">Card title</Card.Title>
            </Card>
            <Card className="cards_ipad">
              <Card.Img className="img_size" variant="top" src={eimg2} />
              <Card.Title className="cards_title_txt">Card title</Card.Title>
            </Card>
          </CardGroup>
          <CardGroup className="crd_grp_mv">
            <Card className="cards_ipad">
              <Card.Img className="img_size" variant="top" src={eimg4} />
              <Card.Title className="cards_title_txt">Card title</Card.Title>
            </Card>
            <Card className="cards_ipad">
              <Card.Img className="img_size" variant="top" src={eimg5} />
              <Card.Title className="cards_title_txt">Card title</Card.Title>
            </Card>
          </CardGroup>
          <CardGroup className="crd_grp_mv">
            <Card className="cards_ipad">
              <Card.Img className="img_size" variant="top" src={eimg4} />
              <Card.Title className="cards_title_txt">Card title</Card.Title>
            </Card>
            <Card className="cards_ipad">
              <Card.Img className="img_size" variant="top" src={eimg5} />
              <Card.Title className="cards_title_txt">Card title</Card.Title>
            </Card>
          </CardGroup>
        </div> */}
      </Container>
    </>
  );
};

export default VideoPlayer;