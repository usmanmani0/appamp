import React, { useState } from "react";
import $ from "jquery";
import { Container, Row, Col } from "react-bootstrap";
import "./hero.css";
import Maskimg from "../../assets/images/Mask Group.png";
import { BiPlayCircle } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";

const Hero = () => {
  const [color, setColor] = useState(1);

  return (
    <>
      <div className="hero-section">
        <Row className="mob_col">
          <Col lg={6} md={12} xs={12} className="hero_desc">
            <div>
              <div style={{ width: "100%" }}>
                <h4 className="heading_1">
                  Browse 100+ Apps to find your inspiration!
                </h4>
              </div>
              <div style={{ width: "100%" }}>
                <p className="heading_2">
                  Gain inspiration, research best practices or simply explore
                  your competitor’s features.
                </p>
              </div>

              <div className="search_div">
                <div class="container-fluid d-flex justify-content-between align-item-center px-4">
                  <input
                    type="text"
                    id="searchInput"
                    placeholder="Search Features or Components"
                  ></input>

                  <div className="search_buttonsdiv">
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
                      <span className="ux_hero_txt_btn">UX Vedios</span>
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
          </Col>
          <Col lg={6} md={12} xs={12}>
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
