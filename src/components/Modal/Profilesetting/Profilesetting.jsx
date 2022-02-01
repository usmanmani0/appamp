import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Image,
    Form,
    FloatingLabel,
    Button,
    Modal,
} from "react-bootstrap";
import Unionlogo from "../../../assets/images/Union.png";
import GoogleLogo from "../../../assets/images/GoogleLogo.png";
import AppleLogo from "../../../assets/images/AppleLogo.png";
import close from "../../../assets/images/Close.png";
import "./profilesetting.css"
// import "../../Header/header.css"

const Profilesetting = () => {
    const [showModal1, SetShowModal1] = useState(false);

<<<<<<< HEAD
    const handelModal1 = () => {
=======
    const handelModal = () => {
>>>>>>> 491f8811adc3e882f468f3d4e02394fefae65dfd
        SetShowModal1(!showModal1);
    };
    return (
        <>
            {showModal1 && (
<<<<<<< HEAD
                <Container className="profilesetting_container" fluid>
=======
                <Container className="signup_container" fluid>
>>>>>>> 491f8811adc3e882f468f3d4e02394fefae65dfd
                    <div className="close_img_outer hide_close_img">
                        <Image
                            onClick={handelModal1}
                            className="close_img"
                            src={close}
                            rounded
                        />
                    </div>
                    <div className="Profilesetting_wrapper">
                        <div className="close_img_outer">
                            <Image
                                onClick={handelModal1}
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
                                                className="icon"
                                                size="16px"
                                                color="black"
                                            />
                                        </i>
                                    </div>
                                </div>
                                <p>Use these setting to manage your profile</p>
                                <hr className="profileupdate_line1"></hr>
                                <h6>Profile Photo</h6>
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
            )}


        </>
    );
};

export default Profilesetting;
