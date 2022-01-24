import React, { useState } from "react";
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Card4 from "../../assets/images/card4.png";
import Card3 from "../../assets/images/card3.png";
import Card6 from "../../assets/images/card6.png";
import Card5 from "../../assets/images/card5.png";
import Card7 from "../../assets/images/card7.png";
import Card8 from "../../assets/images/card8.png";
import Card9 from "../../assets/images/card9.png";
import Plus from "../../assets/images/plus.png";
import Copy from "../../assets/images/copy.png";
import Down from "../../assets/images/Download.png";
import Cloud from "../../assets/images/cloud.png";
import option from "../../assets/images/select.png";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import MPlus from "../../assets/images/mplus.png";
import checkalert from "../../assets/soundcloudimages/CheckAlert.png";
import Close from "../../assets/images/Close.png";
import Search from "../../assets/images/s.png";
import MCopy from "../../assets/images/mcopy.png";
import MDownload from "../../assets/images/mdownload.png";
import checkicon from "../../assets/soundcloudimages/Check.png";
import { Image } from "react-bootstrap";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";
import PlayVedio from "../../assets/images/playVedio.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../MobileAddCollection/mobileaddcollection.css";
import "./uxvideosplaylist.css";
import { createGlobalStyle } from "styled-components";

const UxVideoSecreenPlaylist = () => {
  const [showPopover, setShowPopover] = useState({ open: true });
  const [tick, setTick] = useState([]);
  const [setSave, showSetSave] = useState(false);
  const [copy, setCopy] = useState(false);
  const [select, setSelect] = useState({ open: false });
  const [checkdata, setCheckdata] = useState([
    {
      id: 1,
      checked: false,
      image: checkicon,
      Name: "Collection # 1",
    },
    {
      id: 2,
      checked: true,
      image: checkicon,
      Name: "Collection # 2",
    },
    {
      id: 3,
      checked: true,
      image: checkicon,
      Name: "Collection # 3",
    },
  ]);
  const checkTick = async (index) => {
    let findIndex = tick.find((data) => data === index);
    if (findIndex) {
      let removeIndex = await tick.filter((data) => data !== index);
      setTick(removeIndex);
    } else {
      setTick([...tick, index]);
    }
  };
  const handelPopover = () => {
    setShowPopover(!showPopover);
  };

  const saveCollection = () => {
    showSetSave(!setSave);

    setTimeout(() => {
      showSetSave(null);
    }, 5000);
  };
  const copyShare = () => {
    setCopy(!setSave);

    setTimeout(() => {
      setCopy(null);
    }, 5000);
  };

  const vedioCard = [
    {
      id: 1,
      img: Card1,
      text: "Log Out",
    },
    {
      id: 2,
      img: Card2,
      text: "Onboarding",
    },
    {
      id: 3,
      img: Card3,
      text: "Playing a song",
    },
    {
      id: 4,
      img: Card4,
      text: "Searching for a song",
    },
    {
      id: 5,
      img: Card5,
      text: "Sign Up",
    },
    {
      id: 6,
      img: Card6,
      text: "Exploring Settings",
    },
    {
      id: 7,
      img: Card7,
      text: "Exploring Library (W...",
    },
    {
      id: 8,
      img: Card8,
      text: "Exploring Library",
    },
    {
      id: 9,
      img: Card9,
      text: "Exploring an Artist ",
    },
  ];
  const addCollection = () => {
    let index = checkdata.length;
    console.log("klkkl", index);
    let obj = {
      id: 1,
      checked: false,
      image: checkicon,
      // Name: `${"Collection # " + index}`,
      Name: `Collection #  ${index + 1}`,
    };
    checkdata.unshift(obj);

    setCheckdata([...checkdata]);
  };
  const his = useNavigate();
  const changeDynamicText = (e, index) => {
    console.log("kkkk", e, index);
    let data = [...checkdata];
    data[index].Name = e;
    setCheckdata(data);
  };
  const test = () => {
    // his('/soundcloudpage')
    console.log("skadjbvvvvvvvvvvvvvvvv");
  };

  const [selectBtn, setSelectBtn] = useState("select_btn");
  const xyz = () => {
    // console.log("onMouse ebter fn");
    setSelectBtn("cont2");
  };

  return (
    <>
      <div className="soud_cloud_vedio_section_playlist">
        <div className="vedio_card_wrapper_ux_playlist">
          <span className="ux_total_screen_txt">11 Screens</span>
          {vedioCard.map((data, index) => {
            return (
              <>
                <div className="ux_video_playelist_container" key={index}>
                  <div className="ux_video_playelist_idex_no_wrapper">
                    <span className="ux_video_playelist_idex_no_txt">
                      {data.id}.
                    </span>
                  </div>
                  <div className="ux_video_playelist_wrapper">
                    {/* <Link to="/soundcloudpage"> */}
                    <div className="vedio_card_ux_playlist" onClick={test}>
                      {" "}
                      <img src={data.img} className="img-fluid" alt="err" />
                      <div className="UI_Secreen_add_collection">
                        {showPopover ? (
                          <div
                            className="UI_Secreen_popoover_wrapper"
                            style={{
                              display:
                                index === showPopover.open ? "block" : "none",
                            }}
                          >
                            <div class="form-group Ui_Secreen_has-search ">
                              <input
                                type="text"
                                class="form-control"
                                id="form_control"
                                placeholder="Search Collections"
                              ></input>
                            </div>

                            {checkdata.map((data, index) => {
                              return (
                                <div
                                  className="UI_Secreen_collection_checkbox_wrapper"
                                  key={index}
                                >
                                  <div className="Ui_Secreen_collection_inner_wrapper">
                                    <div
                                      className={
                                        tick.includes(`${index}`)
                                          ? "Ui_Secreen_checkbox_wrapper_enable"
                                          : "Ui_Secreen_checkbox_wrapper"
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
                                        <EditText
                                          type={"text"}
                                          name={"Name"}
                                          value={data.Name}
                                          onChange={(e) =>
                                            changeDynamicText(e, index)
                                          }
                                        />
                                      </span>
                                    </div>
                                    {/* <div>
                                    <img
                                      src={PlayVedio}
                                      className="play_vedio_add_collection"
                                      alt="err"
                                    />
                                  </div> */}
                                  </div>
                                </div>
                              );
                            })}

                            <div className="UI_Secreen_save_collection_btn_wrapper">
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
                                onClick={
                                  tick.length >= 1
                                    ? () => saveCollection()
                                    : null
                                }
                              >
                                {" "}
                                <span
                                  className="save_txt"
                                  onClick={handelPopover}
                                >
                                  Save
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div
                        className="share_copy"
                        onClick={() => {
                          setSelect({
                            open: select.open === index ? false : index,
                          });
                        }}
                        style={{
                          display: index === select.open ? "block" : "none",
                        }}
                      >
                        <div className="select_content_wrapper_1">
                          <div
                            className="d-flex align-items-center"
                            onClick={() => {
                              setShowPopover({
                                open:
                                  showPopover.open === index ? false : index,
                              });
                            }}
                          >
                            <div>
                              <img src={Plus} alt="err" />
                            </div>
                            <div className="add_to_col">Add to Collection</div>
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <div>
                              <img
                                src={Down}
                                style={{ marginLeft: "-7px" }}
                                alt="err"
                              />
                            </div>
                            <div className="select_download">Download</div>
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <div>
                              <img src={Copy} alt="err" />
                            </div>
                            <div
                              className="add_to_col"
                              onClick={() => {
                                copyShare();
                              }}
                            >
                              Copy Share Link
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mobie_share_copy"
                        onClick={() => {
                          setSelect({
                            open: select.open === index ? false : index,
                          });
                        }}
                        style={{
                          display: index === select.open ? "block" : "none",
                        }}
                      >
                        <div className="d-flex justify-content-center">
                          <img
                            src={MPlus}
                            onClick={() => {
                              setShowPopover({
                                open:
                                  showPopover.open === index ? false : index,
                              });
                            }}
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <img src={MDownload} />
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          onClick={copyShare}
                        >
                          <img src={MCopy} />
                        </div>
                      </div>
                      <div className="vedio_time">
                        <div className="vedio_time_wrapper">12:40</div>
                      </div>
                      <div className="card_content">
                        <div className="card_content_show">
                          <Link to="/soundcloudpage" className="extra1">
                            <div></div>
                          </Link>
                          <div className="extra2">
                            <div className="d-flex">
                              <div>
                                {" "}
                                <img
                                  src={Cloud}
                                  className="onHoverImage"
                                  alt="err"
                                />
                              </div>
                              <div className="onHoverText">{data.text}</div>
                            </div>
                            <div
                              className={selectBtn}
                              onMouseEnter={xyz}
                              onClick={() => {
                                setSelect({
                                  open: select.open === index ? false : index,
                                });
                              }}
                            >
                              <img src={option} alt="err" />{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                    <div className="card_botom_text">{data.text}</div>
                  </div>
                </div>
                {setSave ? (
                  <div className="UI_Secreen_confirmation_wrapper">
                    <Image src={checkalert} />
                    <span className="alert_txt">
                      Video added to 2 Collections
                    </span>
                    <div className="undo_btn">
                      <span className="undo_txt">Undo</span>
                    </div>
                  </div>
                ) : copy ? (
                  <div className="UI_Secreen_confirmation_wrapper">
                    <div>
                      <Image src={checkalert} />
                      <span className="alert_txt">Copy Link</span>
                    </div>
                    <div className="undo_btn">
                      <span className="undo_txt">Undo</span>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
      {showPopover.open ? null : (
        <div className="m_add_collection">
          <div className="add_collection_header">
            <div>
              <img
                src={Close}
                onClick={() => {
                  setShowPopover({ open: true });
                }}
                alt="err"
              />
            </div>
            <div className="m-add_collection_heading">Add to Collection</div>
            <div></div>
          </div>
          <div className="m_add_collection_seprator"></div>
          <div className="m_search_container">
            <div className="m_search_wrapper">
              <div>
                <img src={Search} className="m_search_icon" alt="err" />
              </div>
              <input
                className="search_input"
                placeholder="Search Collections"
              />
            </div>
          </div>
          {checkdata.map((data, index) => {
            return (
              <>
                <div className="m_checkbox_wrapper">
                  <div
                    className={
                      tick.includes(`${index}`)
                        ? "m_checkbox_enable"
                        : "m_checkbox"
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
              </>
            );
          })}

          <div className="m_new_collectionAnd_save">
            <div className="add_collection_btn" onClick={() => addCollection()}>
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
              <Link to="/SoundCloudPage">
                {" "}
                <span className="save_txt">Save</span>
              </Link>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UxVideoSecreenPlaylist;
