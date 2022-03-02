import React, { useState } from "react";
import "./createapps.css";
import Header from "../../Header/Header";
import { Form, FloatingLabel } from "react-bootstrap";
import down from "../../../assets/images/d.png";
import up from "../../../assets/images/u.png";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { handelCreateAppValues, handleCreateNewApp } from "../../../feature/addCollection/counterSlice"



const CreateApps = () => {
    // const [inputValue, setinputValue] = useState({});
    const [isActive, setIsActive] = useState(false);
    const [select, setSelect] = useState("");
    const option = [
        {
            id: 1,
            name: "Art & Design",
        },
        {
            id: 2,
            name: "Augmented Reality",
        },
        {
            id: 3,
            name: "Auto & Vehicles",
        },
        {
            id: 4,
            name: "Beauty",
        },
        {
            id: 5,
            name: "Books & Reference",
        },
        {
            id: 6,
            name: "Business",
        },
    ];
    const dispatch = useDispatch()
    const inputValue = useSelector((state) => state.hideShow.createApp)
    const handleInputValues = (e) => {
        // setinputValue({ ...inputValue, [e.target.name]: e.target.value });
        dispatch(handelCreateAppValues(e))
    };
    const redirect = useNavigate()

    const handleCheckBoxValue = (e) => {
        const checkboxvalue = e.target.value;
        setSelect(checkboxvalue);
    };

    const createNewApp = () => {
        let newObj = { ...inputValue }
        newObj.date = new Date()
        dispatch(handleCreateNewApp(newObj))
        redirect("/adminportal")
    }


    return (
        <>
            <Header showF={true} />
            <div className="create_App_main_container">
                <div className="create_app_hero_section">
                    <div className="create_app_heading">Create App</div>
                    <div className="create_app_content_box">
                        <div className="create_app_hero_text">App Details</div>
                        <div className="create_hero_sec_btn">
                            <div className="create_app_hero_cancel_btn">Cancel</div>
                            <div className="create_app_hero_create_btn" onClick={() => { createNewApp() }}>Create</div>
                        </div>
                    </div>
                    <div className="create_app_hero_sep"></div>
                </div>
                <div className="create_app_body_sec">
                    <div>
                        <div className="create_app_input_wrapper">
                            <div className="create_app_input1">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="App Name"
                                    className="mb-3 input_create_app"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="App Name"
                                        name="AppName"
                                        value={inputValue?.AppName}
                                        onChange={(e) => handleInputValues(e)}
                                    />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div className="create_app_input_wrapper">
                            <div className="create_app_input">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="App Store / Play Store Link"
                                    className="mb-3 input_create_app"
                                >
                                    <Form.Control type="text" placeholder="App Name"
                                        name="playstore"
                                        value={inputValue?.playstore}
                                        onChange={(e) => handleInputValues(e)}

                                    />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div className="create_app_input_wrapper">
                            <div className="create_app_input">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="App Logo Link"
                                    className="mb-3 input_create_app"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="App Name"
                                        name="applogo"
                                        value={inputValue?.applogo}
                                        onChange={(e) => handleInputValues(e)}
                                    />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div className="create_app_input_wrapper">
                            <div className="create_app_input">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="App Company Name"
                                    className="mb-3 input_create_app"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="App Name"
                                        name="company"
                                        value={inputValue?.company}
                                        onChange={(e) => handleInputValues(e)}
                                    />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div className="create_app_select_wrapper" onClick={() => setIsActive(!isActive)}>
                            <div
                                className="create_app_select_inner"

                            >

                                <div className="create_app_select_text" >
                                    <span style={{ fontSize: select ? "12px" : "14px", color: select ? "#8A8A8B" : "" }}>Select App Category</span><br />
                                    {select && <span style={{ color: "#000" }}>{select}</span>}
                                </div>

                                <div>{isActive ? <img src={up} /> : <img src={down} />}</div>
                            </div>
                            {isActive && (
                                <div className="create_app_select_content">
                                    {option.map((data) => {
                                        return (
                                            <>
                                                <div class="form-check" key={data.id}>
                                                    <input
                                                        type="checkbox"
                                                        checked={data.name === select}
                                                        value={data.name}
                                                        onChange={(e) => handleCheckBoxValue(e)}
                                                        class="form-check-input"
                                                        id="exampleCheck1"
                                                    />
                                                    <label class="form-check-label" for="exampleCheck1">
                                                        {data.name}
                                                    </label>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="show_upload_content">
                        <div className="d-flex">
                            <div className="cretae_section_upload_logo">

                                {inputValue.applogo ? <img src={inputValue.applogo} className="create_app_img_link" /> : ""}



                            </div>
                            <div className="create_app_upload_info">
                                <div className="cretae_app_catogroy">
                                    {select == "" ? "App Category" : select}
                                </div>
                                <div className="create_app_name">
                                    {inputValue.AppName ? inputValue.AppName : "App Name"}
                                </div>
                                <div className="create_app_ui_ux">
                                    XX UX Videos XX UI Screens
                                </div>
                                <div className="create_app_company_name">
                                    © {inputValue.company ? inputValue.company : "Company Name"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateApps;
