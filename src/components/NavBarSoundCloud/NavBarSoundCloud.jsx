import React, { } from "react";
import { useNavigate } from "react-router-dom";
import "./navbarsoundcloud.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import backarrow from "../../assets/soundcloudimages/Back.png";
import sclogo from "../../assets/soundcloudimages/soundcloudimg.png";
import backwararrow from "../../assets/soundcloudimages/backwardarrow.png";
import forwardarrow from "../../assets/soundcloudimages/forwardarrow.png";
import navactionbar from "../../assets/soundcloudimages/navactionbar.png";
const NavBarSoundCloud = () => {
  const history = useNavigate()
  return (
    <>
      <Container className="navbar_soundcloud_player dis_nav_bar" fluid="true">
        <Row>
          <Col sm={5} lg={5} xl={4} xxl={4}>
            <div className="navlogo_wrapper">
              <div className="backarrow">
                <Image src={backarrow} rounded />
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
                <Image src={backwararrow} rounded />
              </div>
              <div className="nav_txt">
                <span className="nav_inner_txt">User Onboarding</span>
              </div>
              <div className="nav_forward_icon">
                <Image src={forwardarrow} rounded />
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

      <Container className="navbar_soundcloud_player dis_none_mv_navbar" fluid="true">
        <Row className="mv_navbar_row_wrapper">
          <Col xs={2}>
            <div className="navlogo_wrapper">
              <div className="backarrow">
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
                <span className="nav_inner_txt">User Onboarding</span>
              </div>
              <div className="nav_forward_icon">
                <Image src={forwardarrow} rounded />
              </div>
            </div>
          </Col>

          <Col xs={2} className="nav_col_3_adjustment">
            <div className="navbar_action_icon_wrapper">
              <Image src={navactionbar} rounded />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBarSoundCloud;
