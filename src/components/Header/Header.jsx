import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Unionlogo from "../../assets/images/Union.png";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import AppleLogo from "../../assets/images/AppleLogo.png";
import close from "../../assets/images/Close.png";
import Profile from "../../assets/images/profile.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
// import useNavigate from "react-router-dom";


import "./header.css";
import "../Modal/Signup/signup.css";
import "../Modal/Signin/signin.css";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Image,
  Form,
  FloatingLabel,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = ({ showF }) => {

  const [showModal, SetShowModal] = useState(false);

  const handelSignInModal = () => {
    SetShowModal(!showModal);
  };


  const [showSignUpModal, SetShowSignUpModal] = useState(false);

  const handelSignUpModal = () => {
    SetShowSignUpModal(!showSignUpModal);
  };
  const [FCard, setFCard] = useState(false)
  const gotoCreateCollection = useNavigate()

  const [profilesetting, setprofilesetting] = useState(false);

  const handleprofilesetting = () => {
    setprofilesetting(!profilesetting)
  }


  return (
    <>
      <div className={showF ? "header-section dis2 shadow_control" : "header-section dis2"}>
        <div className="logo_div">
          <div>
            <Link to="/" ><img className="logo" src={Logo} alt="logo"></img></Link>
          </div>
          {/* <div>
            <h4>AppMap</h4>
          </div> */}
        </div>

        <div className="buttons_div d-flex">
          {showF ?
            <div className="search_page_f" onClick={() => setFCard(!FCard)}>F</div>
            :
            <div>
              <button
                onClick={handelSignInModal}
                className="button_1"
                type="button"
              >
                Sign In
              </button>
              <button onClick={handelSignUpModal} className="button_2">
                Sign Up
              </button>
            </div>}
        </div>
        <div className="f_click" style={{ display: FCard == false ? "none" : "block" }}>
          <div className="f_card_content">
            <div className="search_page_f">F</div>
            <div>   <div className="f_email">email.address</div>
              <div className="f_email2">email.address@gmail.com</div></div>

          </div>
          <div className="f_card_sep"></div>
          <div className="f_card_headingP" >Profile Settings</div>
          <div className="f_card_headingC" onClick={() => gotoCreateCollection("/createcollection")}>Collections</div>
          <div className="f_card_sep"></div>
          <div className="f_card_text1">Provide Feedback</div>
          <div className="f_card_text">Privacy Policy</div>
          <div className="f_card_text">Terms and Conditions</div>
          <div className="f_card_text">Log Out</div>

        </div>
      </div>

      <div className="mob_nav dis-mob2">
        <Navbar bg="light" expand="lg">
          <Container className="icon_control">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler collapsed" />
            <Navbar.Brand href="#home">
              <div className="mob_logo">
                <img className="logo" src={Logo} alt="logo"></img>
                {/* <h4>AppMap</h4> */}
              </div>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {" "}
                  <div className="mob_buttons">

                    <button
                      onClick={handelSignInModal}
                      className="button_1"
                      type="button"
                    >
                      Sign In
                    </button>
                    <button onClick={handelSignUpModal} className="button_2">
                      Sign Up
                    </button>
                  </div>
                  <div className="profile_setting">
                    <div className="profile_detail">
                      <div style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "white" }}>
                        {/* <img
                          className="profile_img"
                          src={Profile}
                          alt="profile_img"
                        ></img> */}
                        <div style={{ height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}><span>{("Qayyuma686@gmail.com".substring(0, 1)).toUpperCase()}</span></div>
                      </div>
                      <div className="Profile_desc">
                        <div className="profile_name">First Last</div>
                        <p style={{ marginBottom: "0px", fontSize: "12px", lineHeight: "14px" }}>email.address@gmail.com</p>
                      </div>
                    </div>
                    <hr className="profile_bottom_line1"></hr>
                    <div className="test_color test_btn" onClick={handleprofilesetting}>Profile Setting</div>
                    <div className="test_color test_btn">Collections</div>
                    <hr className="profile_bottom_line2"></hr>
                    <div className="test_color">provide Feedback</div>
                    <div className="test_color">privacy policy</div>
                    <div className="test_color">Term and Conditions</div>
                    <div className="test_color">Log Out</div>
                  </div>

                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {
        profilesetting && (
          <Container className="signup_container" fluid >
            <div className="close_img_outer hide_close_img">
              <Image
                onClick={handleprofilesetting}
                className="close_img"
                src={close}
                rounded
              />
            </div>
            <div className="signup_wrapper" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
              <div className="close_img_outer">
                <Image
                  onClick={handleprofilesetting}
                  className="close_img"
                  src={close}
                  rounded
                />
              </div>
              <Row>
                <Col className="logo_txt_line">
                  <Image className="union_img_logo" src={Unionlogo} rounded />
                  <span className="appmap_txt">AppMapp</span>
                </Col>
              </Row>
              <div>
                <div className="profile_update">
                  <div className="profile_control">
                    <div>
                      <h4>Profile Settings</h4>
                    </div>
                    <div>
                      <i className="icon_play">
                        <AiOutlineClose
                          onClick={handleprofilesetting}
                          className="icon"
                          size="16px"
                          color="black"
                        />
                      </i>
                    </div>
                  </div>
                  <p style={{ marginBottom: "8px !important" }}>Use these setting to manage your profile</p>
                  <hr className="profileupdate_line1"></hr>
                  <h6 style={{ marginTop: "40px", marginBottom: "16px" }}>Profile Photo</h6>
                  <div className="update_row">
                    <div>
                      <img
                        className="profile_img"
                        src={Profile}
                        alt="profile_img"
                      ></img>
                    </div>
                    <button

                      className="button_update"
                      type="button"
                    >
                      Update
                    </button>
                  </div>
                  <div className="form">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                  </div>
                  <hr className="profileupdate_line1"></hr>
                  {/* <h4>Save Changes</h4> */}
                </div>
              </div>
              <Row>
                <Col>
                  <p className="signup_footer_txt pt-4">
                    {/* Don't have an account?{" "} */}
                    <a className="signup_footer_txt1 signin_footer_txt" href="#">
                      Save Changes
                    </a>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        )
      }

      {
        showModal && (
          <Container className="signup_container" fluid style={{ zIndex: "99999" }}>
            <div className="close_img_outer hide_close_img">
              <Image
                onClick={handelSignInModal}
                className="close_img"
                src={close}
                rounded
              />
            </div>
            <div className="signup_wrapper">
              <div className="close_img_outer">
                <Image
                  onClick={handelSignInModal}
                  className="close_img"
                  src={close}
                  rounded
                />
              </div>
              <Row>
                <Col className="logo_txt_line">
                  <Image className="union_img_logo" src={Unionlogo} rounded />
                  <span className="appmap_txt">AppMapp</span>
                </Col>
              </Row>
              <Row>
                <Col className="cwg_outer_wrapper">
                  <button className="cwg_wrapper">
                    <Image className="google_img_logo" src={GoogleLogo} rounded />
                    <span className="cwg_txt">Continue with Google</span>
                  </button>
                </Col>
              </Row>

              <Row>
                <Col className="cwa_outer_wrapper">
                  <button className="cwa_wrapper">
                    <Image className="apple_img_logo" src={AppleLogo} rounded />
                    <span className="cwg_txt">Continue with Apple</span>
                  </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form_wrapper1">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3 form_inpt_wrapper"
                    >
                      <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="form_wrapper2 signin_form2_wrapper">
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                      className="form_inpt_wrapper"
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                  </div>
                </Col>
              </Row>

              <Row className="signin_btn">
                <Col className="signup_btn_wrapper">
                  <Button className="signup_btn">Sign In</Button>
                </Col>
              </Row>

              <Row>
                <Col className="signin_fpass_txt_cnter">
                  <a className="signup_footer_txt1" href="#">
                    Forgot Password?
                  </a>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p className="signup_footer_txt pt-4">
                    Don't have an account?{" "}
                    <a className="signup_footer_txt1 signin_footer_txt" href="#">
                      Sign Up
                    </a>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        )
      }

      {
        showSignUpModal && (
          <Container className="signup_container" fluid style={{ zIndex: "99999" }}>
            <div className="close_img_outer hide_close_img">
              <Image
                onClick={handelSignUpModal}
                className="close_img"
                src={close}
                rounded
              />
            </div>
            <div className="signup_wrapper">
              <div className="close_img_outer">
                <Image
                  onClick={handelSignUpModal}
                  className="close_img"
                  src={close}
                  rounded
                />
              </div>
              <Row>
                <Col className="logo_txt_line">
                  <Image className="union_img_logo" src={Unionlogo} rounded />
                  <span className="appmap_txt">AppMapp</span>
                </Col>
              </Row>
              <Row>
                <Col className="cwg_outer_wrapper">
                  <button className="cwg_wrapper">
                    <Image className="google_img_logo" src={GoogleLogo} rounded />
                    <span className="cwg_txt">Continue with Google</span>
                  </button>
                </Col>
              </Row>

              <Row>
                <Col className="cwa_outer_wrapper">
                  <button className="cwa_wrapper">
                    <Image className="apple_img_logo" src={AppleLogo} rounded />
                    <span className="cwg_txt">Continue with Apple</span>
                  </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form_wrapper1">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3 form_inpt_wrapper"
                    >
                      <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="form_wrapper2">
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                      className="form_inpt_wrapper"
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p className="signup_bottom_txt">
                    By clicking ‘Sign Up’, you agree to the
                    <a className="tc_txt">Terms of Conditions</a> and
                    <a className="tc_txt">Privacy Policy</a> of AppMapp.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col className="signup_btn_wrapper">
                  <Button className="signup_btn">Sign Up</Button>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p className="signup_footer_txt pt-4">
                    Already have an account?{" "}
                    <a className="signup_footer_txt1" href="">
                      Sign In
                    </a>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        )
      }
    </>
  );
};

export default Header;
