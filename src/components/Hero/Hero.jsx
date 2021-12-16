import React from "react";
import $ from "jquery";
import { Container, Row, Col } from "react-bootstrap";
import "./hero.css";
import Screens from "../../assets/images/Screens.png";
import Maskimg from "../../assets/images/Mask Group.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  $("#searchInput").focus(function () {
    $("#searchInput").css({
      display: "inline",
      width: "40%",
      border: "1px solid #40585d",
      opacity: "1",
      padding: "8px 20px 8px 20px",
      "background-image": "none",
      "box-shadow": "0 0 1px black",
    });
    $("#submitsearch").css("display", "inline");

    $("#searchInput").prop("placeholder", "");
  });
  return (
    <>
      <div className="hero-section">
        <Container className="hero_container">
          <Row>
            <Col lg={6} md={12} xs={12} className="hero_desc">
              <div>
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
                <div className="search_div">
                  <div class="container-fluid">
                    <input
                      type="text"
                      id="searchInput"
                      placeholder="Search Features or Components"
                    ></input>
                    <div className="submitsearch">
                      <button className="search_btn" type="button">
                        <i className="icon_play">
                          <BiPlayCircle
                            className="icon"
                            size="16px"
                            color="white"
                          />
                        </i>
                        <span>UX Vedios</span>
                      </button>
                    </div>
                    <div>
                      <img
                        className="screens_img"
                        src={Screens}
                        alt="screens_img"
                      ></img>
                    </div>
                    <div className="ui_div">UI Screens</div>
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
        </Container>
      </div>
    </>
  );
};

export default Hero;
