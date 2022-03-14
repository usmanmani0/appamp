import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Container, Row, Col } from "react-bootstrap";
import "./hero.css";
import Maskimg from "../../assets/images/Mask Group.png";
import Maskimgmbl from "../../assets/images/Mask Group_mbl.png";
import { BiPlayCircle } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import dropDown from "../../assets/images/Vector.png"
import { useSelector, useDispatch } from 'react-redux';
import { handelValue, handelempty, chnageScreen } from "../../feature/addCollection/counterSlice"
import { useNavigate } from "react-router-dom";
import Down from "../../assets/images/downicon.png"


const Hero = () => {
  // const [searchBtn, setSearchBtn] = useState(0)
  // const dispatch = useDispatch()
  // const searchView = useSelector((state) => state.hideShow.searchView)
  // const sendValue = (e) => {
  //   dispatch(handelValue(e.target.value))
  // }
  // const [DownArrow, SetDownArrow] = useState(false)
  // const [UXSelect, setUXSelect] = useState("UX Videos")

  const [color, setColor] = useState("1");
  const searchView = useSelector((state) => state.hideShow.searchView)
  const isActiveScreen = useSelector((state) => state.hideShow.isActiveScreen)

  const [DownArrow, SetDownArrow] = useState(false)
  const [UXSelect, setUXSelect] = useState("UX Videos")
  const dispatch = useDispatch()

  const sendValue = (e) => {
    dispatch(handelValue(e.target.value))
  }
  const history = useNavigate()
  const reDirectFunction = (event) => {
    if (event.key === 'Enter' && searchView != "") {
      history("/searchpage")
    }
  }

  const clearState = () => {
    dispatch(handelempty())
  }
  const handleScreenView = (value) => {
    console.log("handle screen change clicked")
    dispatch(chnageScreen(value))
  }
  return (
    <>
      <div className="hero-section">
        <Row className="mob_col" >
          <Col xxl={6} xl={6} lg={6} md={12} xs={11} className="hero_desc" >
            <div className="headings_div">
              <div className="heading_width">
                <h4 className="heading_1">
                  Browse 100+ Apps to find your inspiration!
                </h4>
              </div>
              <div>
                <p className="heading_2">
                  Gain inspiration, research best practices or simply explore
                  your competitor’s features.
                </p>
              </div>
              <div className="search_box">
                <div className="search_div ">
                  <div class="div_wrap">
                    <input
                      onKeyPress={(e) => reDirectFunction(e)}
                      onChange={sendValue}
                      type="text"
                      id="searchInput"
                      value={searchView}
                      required
                      placeholder="Search Features or Components"
                    ></input>

                    <div style={{ width: "20px", cursor: "pointer" }}>{searchView !== "" && <IoIosCloseCircle onClick={clearState} />}</div>

                    <div className="vertical_line"></div>
                    <div class="dropdown disp_non" style={{ paddingTop: '8px', paddingLeft: '8px', paddingBottom: '8px', width: '148px' }}>


                      <div className='search_hero_mDropdown' onClick={() => SetDownArrow(!DownArrow)}>{UXSelect}<div><img src={Down} /></div></div>
                      <div className='search_dropdown_content2' style={{ display: DownArrow == true ? "flex" : "none" }}>
                        <div className='search_dropdown_value' onClick={() => { setUXSelect(UXSelect === "UX Videos" ? "UI Screens" : "UX Videos", SetDownArrow(false)) }}>{UXSelect === "UX Videos" ? "UI Screens" : "UX Videos"}</div>
                      </div>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                        id="show_upper_on_body"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            <span>UI Videos</span>
                          </a>
                        </li>

                      </ul>
                    </div>

                    <div className="search_buttonsdiv" id="dis_non">
                      <button
                        className="search_btn"
                        type="button"
                        style={{
                          backgroundColor:
                            isActiveScreen === "1" ? "rgba(22, 22, 24, 1)" : "white",
                          color: isActiveScreen === "1" ? "white" : "rgba(22, 22, 24, 1)",
                        }}
                        onClick={() => {
                          // setColor("1");
                          handleScreenView("1")
                        }}
                      >
                        <i className="icon_play">
                          <BiPlayCircle
                            className="icon"
                            size="24px"
                            style={{
                              color:
                                isActiveScreen === "1" ? "white" : "rgba(22, 22, 24, 1)",
                            }}
                          />
                        </i>
                        <span className="ux_hero_txt_btn">UX Videos</span>
                      </button>

                      <button
                        className="search_btn"
                        type="button"
                        style={{
                          backgroundColor:
                            isActiveScreen === "2" ? "rgba(22, 22, 24, 1)" : "white",
                          color: isActiveScreen === "2" ? "white" : "rgba(22, 22, 24, 1)",
                        }}
                        onClick={() => {
                          // setColor("2");
                          handleScreenView("2")
                        }}
                      >
                        <i className="icon_play">
                          <BiMobile
                            className="icon"
                            size="16px"
                            style={{
                              color:
                                isActiveScreen === "2" ? "white" : "rgba(22, 22, 24, 1)",
                            }}
                          />
                        </i>
                        <span className="ux_hero_txt_btn">UI Screens</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={12} xs={12} style={{ padding: '0px' }}>
            <div>
              <img className="mask_img dis01" src={Maskimg} alt="mask_img"></img>
            </div>
            <div>
              <img className="mask_mbl dis-mbl01" src={Maskimgmbl} alt="mask_img"></img>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
