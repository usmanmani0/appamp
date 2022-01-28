import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Container, Row, Col } from "react-bootstrap";
import "./hero.css";
import Maskimg from "../../assets/images/Mask Group.png";
import { BiPlayCircle } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { handelValue, handelempty } from "../../feature/addCollection/counterSlice"
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const [color, setColor] = useState(1);
  const searchView = useSelector((state) => state.hideShow.searchView)
  const dispatch = useDispatch()

  const sendValue = (e) => {
    console.log("key value", e.target.value)
    dispatch(handelValue(e.target.value))
  }
  const history = useNavigate()
  const reDirectFunction = (event) => {
    if (event.key === 'Enter') {
      history("/searchpage")
    }
  }

  return (
    <>
      <div className="hero-section">
        <Row className="mob_col" style={{ padding: "3s0px 10px" }}>
          <Col xxl={6} xl={6} lg={6} md={12} xs={11} className="hero_desc">
            <div className="headings_div">
              <div>
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
                      placeholder="Search Features or Components"
                    ></input>

                    <div className="vertical_line"></div>
                    <div class="dropdown disp_non" style={{ marginTop: '7px', paddingLeft: '8px', paddingBottom: '8px', width: '150px' }}>
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="recent_button"
                        style={{ border: 'none', paddingLeft: '8px', width: '130px' }}
                      >
                        <span>UX Videos</span>
                        <b>
                          <i className="icon_down" style={{ marginLeft: '8px' }}>
                            <IoIosArrowDown
                              className="icon"
                              size="18px"
                              color="black"
                              fontWeight={900}

                            />
                          </i>
                        </b>
                      </button>
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
                            color === "1" ? "rgba(22, 22, 24, 1)" : "white",
                          color: color === "1" ? "white" : "rgba(22, 22, 24, 1)",
                        }}
                        onClick={() => {
                          setColor("1");
                        }}
                      >
                        <i className="icon_play">
                          <BiPlayCircle
                            className="icon"
                            size="16px"
                            style={{
                              color:
                                color === "1" ? "white" : "rgba(22, 22, 24, 1)",
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
                            color === "2" ? "rgba(22, 22, 24, 1)" : "white",
                          color: color === "2" ? "white" : "rgba(22, 22, 24, 1)",
                        }}
                        onClick={() => {
                          setColor("2");
                        }}
                      >
                        <i className="icon_play">
                          <BiMobile
                            className="icon"
                            size="16px"
                            style={{
                              color:
                                color === "2" ? "white" : "rgba(22, 22, 24, 1)",
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
          <Col xxl={6} xl={6} lg={6} md={12} xs={12}>
            <div>
              <img className="mask_img" src={Maskimg} alt="mask_img"></img>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
