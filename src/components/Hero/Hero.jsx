import React,{useState} from "react";
import $ from "jquery";
import { Container, Row, Col } from "react-bootstrap";
import "./hero.css";
import Maskimg from "../../assets/images/Mask Group.png";
import { BiPlayCircle } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";

const Hero = () => {
  const [color,setColor]=useState(1)
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
          <Row className="mob_col">
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



                    <div className="search_buttonsdiv">
                    
                      <button className="search_btn" type="button" style={{backgroundColor:color==="1"?"rgba(22, 22, 24, 1)":"white",color:color==="1"?"white":"rgba(22, 22, 24, 1)"}} onClick={()=>{setColor("1")}}>
                        <i className="icon_play">
                          <BiPlayCircle
                            className="icon"
                            size="16px"
                            style={{color:color==="1"?"white":"rgba(22, 22, 24, 1)"}}
                          />
                        </i>
                        <span>UX Vedios</span>
                      </button>
                    
                    
                    
                    <button className="search_btn" type="button" style={{backgroundColor:color==="2"?"rgba(22, 22, 24, 1)":"white", color:color==="2"?"white":"rgba(22, 22, 24, 1)"}} onClick={()=>{setColor("2")}}>
                    <i className="icon_play">
                      <BiMobile
                        className="icon"
                        size="16px"
                        style={{color:color==="2"?"white":"rgba(22, 22, 24, 1)"}}                      />
                    </i>
                    <span>UI Screens</span>
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
        </Container>
      </div>
    </>
  );
};

export default Hero;
