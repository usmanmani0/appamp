import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbarsoundcloud.css";
import {
  Container,
  Row,
  Col,
  Image,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import backarrow from "../../assets/soundcloudimages/Back.png";
import sclogo from "../../assets/soundcloudimages/soundcloudimg.png";
import backwararrow from "../../assets/soundcloudimages/backwardarrow.png";
import forwardarrow from "../../assets/soundcloudimages/forwardarrow.png";
import navactionbar from "../../assets/soundcloudimages/navactionbar.png";
import Copy from "../../assets/images/copy.png";
import Down from "../../assets/images/Download.png";
import Plus from "../../assets/images/plus.png";
import checkicon from "../../assets/soundcloudimages/Check.png";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";
const NavBarSoundCloud = () => {
  const [select, setSelect] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setSelect(!select);
  };

  function handleShowModal(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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

  const [checkdata, setCheckdata] = useState([
   
    
  ]);
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
  const history = useNavigate();
  return (
    <>
      <Container className="navbar_soundcloud_player dis_nav_bar" fluid="true">
        <Row>
          <Col sm={5} lg={5} xl={4} xxl={4}>
            <div className="navlogo_wrapper">
              <div className="backarrow">
                <Image
                  src={backarrow}
                  rounded
                  onClick={() => {
                    history(-1);
                  }}
                />
              </div>
              <div className="soundcloudlogo">
                <Image src={sclogo} rounded />
              </div>
              <div className="app_description">
                <span className="sc_app_logo_desc_txt">Music & Audio</span>
                <span className="sc_app_logo_desc_txt_1">SoundCloud</span>
              </div>
            </div>
          </Col>
          <Col className="nav_col_2_adjustment">
            <div className="nav_bf_icons_wrapper">
              <div className="nav_back_icon">
                <div className="copy_wrap ">
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>Previous Chapter</Tooltip>
                    )}
                    placement="bottom"
                  >
                    <Image src={backwararrow} rounded />
                  </OverlayTrigger>
                </div>
              </div>
              <div className="nav_txt">
                <span className="nav_inner_txt_ch">Chapters</span>
                <span className="nav_inner_txt">1 / 7</span>
              </div>
              <div className="nav_forward_icon">
                <div className="copy_wrap ">
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>Previous Chapter</Tooltip>
                    )}
                    placement="bottom"
                  >
                    <Image src={forwardarrow} rounded />
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
          {/* <Col className="nav_col_3_adjustment">
            <div className="navbar_action_icon_wrapper">
            <Image src={navactionbar} rounded />
            </div>
        </Col> */}
        </Row>
      </Container>

      <Container
        className="navbar_soundcloud_player dis_none_mv_navbar"
        fluid="true"
      >
        <Row className="mv_navbar_row_wrapper">
          <Col xs={2}>
            <div className="navlogo_wrapper">
              <div className="backarrow"   onClick={() => {
                    history(-1);
                  }}>
                <Image src={backarrow} rounded />
              </div>
            </div>
          </Col>

          <Col xs={8} className="nav_col_2_adjustment">
            <div className="nav_bf_icons_wrapper">
              <div className="nav_back_icon">
                <Image src={backwararrow} rounded />
              </div>
              <div className="nav_txt">
                <span className="nav_inner_txt_ch">Chapters</span>
                <span className="nav_inner_txt">1 / 7</span>
              </div>
              <div className="nav_forward_icon">
                <Image src={forwardarrow} rounded />
              </div>
            </div>
          </Col>

          <Col xs={2} className="nav_col_3_adjustment">
            <div onClick={handleShow} className="navbar_action_icon_wrapper">
              <Image src={navactionbar} rounded />
            </div>

            {select ? (
              <div className="share_copy_mv">
                <div className="select_content_wrapper_1">
                  <div
                    onClick={handleShowModal}
                    className="d-flex align-items-center"
                  >
                    <div>
                      <img src={Plus} />
                    </div>
                    <div className="add_to_col">Add to Collection</div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <div>
                      <img src={Down} style={{ marginLeft: "-7px" }} />
                    </div>
                    <div className="select_download">Download</div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <div>
                      <img src={Copy} />
                    </div>
                    <div className="add_to_col">Copy Share Link</div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mdl_mv"> 
              <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
              >
                <Modal.Header className="mdl_header_navbar" closeButton>
                  <Modal.Title style={{ textAlign: "center" }}>
                    Add to Collection
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="popoover_wrapper_mv">
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
                        <div
                          className="collection_checkbox_wrapper"
                          key={index}
                        >
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

                    <div className="save_collection_btn_wrapper_mv">
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
                          tick.length >= 1 ? () => saveCollection() : null
                        }
                      >
                        {" "}
                        <a style={{textDecoration:'none'}} href="/SoundCloudPage">
                          {" "}
                          <span className="save_txt">Save</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBarSoundCloud;
