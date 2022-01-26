import React, { useState, useEffect } from "react";
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
import backarrow from "../../assets/soundcloudimages/Back2x.png";
import sclogo from "../../assets/soundcloudimages/soundcloudimg.png";
import backwararrow from "../../assets/soundcloudimages/backwardarrow2x.png";
import forwardarrow from "../../assets/soundcloudimages/forwardarrow2x.png";
import navactionbar from "../../assets/soundcloudimages/navactionbar.png";
import Copy from "../../assets/images/copy.png";
import Down from "../../assets/images/Download.png";
import Plus from "../../assets/images/plus.png";
import checkicon from "../../assets/soundcloudimages/Check.png";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";
import { useSelector, useDispatch } from "react-redux";
import {
  handleShowModal,
  changeSideBarContent,
} from "../../feature/hideShowModal/hideshowModal";
import MobileAddCollectionModal from "../MobileAddCollection";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const NavBarSoundCloud = ({ asidedata }) => {
  const showAddModal = useSelector((state) => state.showModal.show);
  const fullscreen = useSelector((state) => state.showModal.fullscreen);
  let color = useSelector((state) => state.showModal.color);
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  const handleShow = () => {
    setSelect(!select);
  };
  useEffect(() => {}, [color]);
  const [tick, setTick] = useState([]);

  const checkTick = async (index) => {
    let findIndex = tick.find((data) => data === index);
    if (findIndex) {
      let removeIndex = await tick.filter((data) => data !== index);
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

  const pre = () => {
    if (color <= 1) {
      // setColor(asidedata.length);
      dispatch(changeSideBarContent(asidedata.length));
    } else {
      // setColor(color--);
      dispatch(changeSideBarContent(color - 1));
    }
  };
  const next = () => {
    if (color >= asidedata.length) {
      dispatch(changeSideBarContent(1));
    } else {
      dispatch(changeSideBarContent(color + 1));
    }
  };

  return (
    <>
      <Container className="navbar_soundcloud_player dis_nav_bar" fluid="true">
        <Row>
          <Col sm={5} lg={5} xl={4} xxl={4}>
            <div className="navlogo_wrapper">
              <div className="backarrow">
                <Image
                  src={backarrow}
                  className="bk_arrow_img"
                  rounded
                  onClick={() => {
                    history(-1);
                  }}
                />
              </div>
              <div className="soundcloudlogo">
                <Image src={sclogo} rounded className="nav_log" />
              </div>
              <div className="app_description">
                <span className="sc_app_logo_desc_txt">Music & Audio</span>
                <span className="sc_app_logo_desc_txt_1">SoundCloud</span>
              </div>
            </div>
          </Col>
          <Col className="nav_col_2_adjustment">
            <div className="nav_bf_icons_wrapper">
              <div className="nav_back_icon" onClick={pre}>
                <div>
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>Previous Chapter</Tooltip>
                    )}
                    placement="bottom"
                  >
                    {/* <Image src={backwararrow} rounded /> */}
                    <div>
                    <AiOutlineLeft />
                    </div>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="nav_txt">
                <span className="nav_inner_txt_ch">Chapters</span>
                <span className="nav_inner_txt">
                  {" "}
                  {color} / {asidedata.length}{" "}
                </span>
              </div>
              <div className="nav_forward_icon" onClick={next}>
                <div>
                  <OverlayTrigger
                    delay={{ hide: 150, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>Next Chapter</Tooltip>
                    )}
                    placement="bottom"
                  >
                    {/* <Image src={forwardarrow} rounded /> */}
                    <div>
                    <AiOutlineRight />
                    </div>
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
              <div
                className="backarrow"
                onClick={() => {
                  history(-1);
                }}
              >
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
                    onClick={() => dispatch(handleShowModal(true))}
                    className="d-flex align-items-center"
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
                    <div className="add_to_col">Copy Share Link</div>
                  </div>
                </div>
              </div>
            ) : null}
            <MobileAddCollectionModal />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBarSoundCloud;
