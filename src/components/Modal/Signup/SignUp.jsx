import React, { useState } from "react";
import "./signup.css";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import Unionlogo from "../../../assets/images/Union.png";
import GoogleLogo from "../../../assets/images/GoogleLogo.png";
import AppleLogo from "../../../assets/images/AppleLogo.png";
import close from "../../../assets/images/Close.png";
const SignUp = () => {
  const [showModal, SetShowModal] = useState(false);

  const handelModal = () => {
    SetShowModal(!showModal);
  };
  return (
    <>
      {showModal && (
        <Container className="signup_container" fluid>
          <div className="close_img_outer hide_close_img">
            <Image
              onClick={handelModal}
              className="close_img"
              src={close}
              rounded
            />
          </div>
          <div className="signup_wrapper">
            <div className="close_img_outer">
              <Image
                onClick={handelModal}
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
                  <a className="tc_txt" style={{ color: "#505052" }}>&nbsp;Terms of Conditions&nbsp;</a> and
                  <a className="tc_txt" style={{ color: "#505052" }}>&nbsp;Privacy Policy&nbsp;</a> of AppMapp.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="signup_btn_wrapper">
                <Button className="signup_btn" style={{ fontWeight: "bold" }}>Sign Up</Button>
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

export default SignUp;
