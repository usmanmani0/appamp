import React, { useState } from "react";
import Logo from "../../assets/images/Union.png";
import Unionlogo from "../../assets/images/Union.png";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import AppleLogo from "../../assets/images/AppleLogo.png";
import close from "../../assets/images/Close.png";

import "./header.css";
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

const Header = () => {
  const [showModal, SetShowModal] = useState(false);

  const handelSignInModal = () => {
    SetShowModal(!showModal);
  };

  const [showSignUpModal, SetShowSignUpModal] = useState(false);

  const handelSignUpModal = () => {
    SetShowSignUpModal(!showSignUpModal);
  };
  return (
    <>
      <div className="header-section dis">
        <div className="logo_div">
          <div>
            <img className="logo" src={Logo} alt="logo"></img>
          </div>
          <div>
            <h4>AppMap</h4>
          </div>
        </div>

        <div className="buttons_div">
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
          </div>
        </div>
      </div>

      <div className="mob_nav dis-mob">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">
              <div className="mob_logo">
                <img className="logo" src={Logo} alt="logo"></img>
                <h4>AppMap</h4>
              </div>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {" "}
                  <div className="mob_buttons">
                    <button onClick={handelSignInModal} className="button_1" type="button">
                      Sign In
                    </button>
                    <button onClick={handelSignUpModal} className="button_2">Sign Up</button>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {showModal && (
        <Container className="signup_container" fluid>
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
      )}
      {showSignUpModal && (
        <Container className="signup_container" fluid>
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
      )}
    </>
  );
};

export default Header;
 