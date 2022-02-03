import React, { useState } from "react";
import "../UploadScreens/uploadscreen.css";
import Header from "../Header/Header";
import UploadS from "../../assets/images/uploads.png";
import Delete from "../../assets/images/Delete.png";
import Down from "../../assets/images/Vector7.png";
import Up from "../../assets/images/Vector2.png";
import Videos from "../../assets/images/Videos.png";
import secreen from "../../assets/images/Screens.png";
import Upload from "../UploadScreens/Upload";
import AffterUpload from "./AffterUpload";
import VideoUpload from "./videoUpload/videoUpload";
const UploadScreen = () => {
    const [arrow, setArrow] = useState(false);
    const [isActive, setIsActive] = useState(1);
    return (
        <>
            <Header showF={true} />
            <div className="uploadScreen_Wrapper">
                <div className="uploadS_heading">App Content Submission</div>
                <div className="uploadS_content_box">
                    <div className="uploadS_content_div">
                        <div>
                            <img src={UploadS} />
                        </div>
                        <div className="uploadS_content__inner_div">
                            <div className="uploadS_m_A">Music & Audio</div>
                            <div className="uploadS_inner_heading">SoundCloud</div>
                            <div className="upload_ux_ui_tag">10 UX Videos 93 UI Screens</div>
                            <div className="uploads_sound">© SoundCloud</div>
                        </div>
                    </div>
                    <div className="upload_hero_btn_wrapper">
                        <div className="upload_edit_app">Edit App Details</div>
                        <div className="upload_delete_app">
                            <span>
                                <img src={Delete} className="delete_icon" />
                            </span>
                            Delete
                        </div>
                    </div>
                </div>
                <div className="uplaod_feature_wrapper">
                    <div className="uploads_add_feature">Add Features</div>
                    <div className="d-flex">
                        <div className="upload_save_btn">Save</div>
                        <div className="upload_publish_btn">Publish</div>
                    </div>
                </div>
                <div className="upload_hero_seprator"></div>
                <div className="colapse_wrapper">
                    <div
                        className="colapse_div"
                        style={{
                            borderBottom: arrow == false ? "1px solid #c5c5c5" : "none",
                        }}
                    >
                        {arrow ? (
                            <div style={{ position: "relative" }}>
                                <div className="colaps_open_feature_counter">Feature 1</div>
                                <div className="colaps_input_wrapper">
                                    <input
                                        className="colaps_input"
                                        placeholder="Enter Screen Name"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex">
                                <div className="uploadS_feature_counter">Feature 1</div>
                                <div className="uploadS_feature_name">Feature Name</div>
                            </div>
                        )}
                        {arrow ? (
                            <div className="filter_content_wrapper">
                                <div
                                    onClick={() => setIsActive(1)}
                                    className={
                                        isActive === 1 ? "filter_active ui_vedio" : "ui_vedio"
                                    }
                                >
                                    {" "}
                                    <div>
                                        <img src={Videos} />
                                    </div>
                                    UX Video
                                </div>
                                <div
                                    onClick={() => setIsActive(2)}
                                    className={
                                        isActive === 2 ? "filter_active ui_vedio" : "ui_vedio"
                                    }
                                >
                                    {" "}
                                    <div>
                                        <img src={secreen} />
                                    </div>
                                    UI Screens
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex">
                                <div className="colapse_v_chap">
                                    UX Videos Chapters:{" "}
                                    <span className="colapse_v_chap1">22</span>{" "}
                                </div>
                                <div className="colapse_v_chap_screen">
                                    UI Screens: <span className="colapse_v_chap1">222</span>{" "}
                                </div>
                            </div>
                        )}

                        {/* ........Change Data on Colaps.... */}
                        {arrow && (
                            <div className="colpas_delete_app" data-toggle="modal" data-target="#exampleModalCenter">
                                <span>
                                    <img src={Delete} className="delete_icon" />
                                </span>
                                Delete
                            </div>
                        )}
                        <div
                            data-toggle="collapse"
                            data-target="#demo"
                            onClick={() => setArrow(!arrow)}
                        >
                            <div className="toggle_btn">
                                {" "}
                                <div>{arrow ? <img src={Up} /> : <img src={Down} />}</div>
                            </div>
                        </div>
                    </div>
                    <div id="demo" class="collapse">
                        {isActive == 1 ? <VideoUpload /> : null}
                        {isActive == 2 ? (
                            <div>
                                <Upload />
                                <AffterUpload />
                            </div>
                        ) : null}
                    </div>
                    <div className="colaps_add_feature">Add Feature</div>
                </div>
            </div>
            {/* ..........Modal....... */}
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered" role="document">
                    <div class="modal-content" >
                        <div class="">
                            <h5 class="modal-title modal_heading" id="exampleModalLongTitle">Are you sure?</h5>
                            {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                            <div className="heading_seprator"></div>
                        </div>
                        <div class="modal-text">
                            Once you delete , it cannot be undone and you will loose all the items in the feature.

                        </div>
                        <center><div className="heading_seprator1"></div></center>
                        <div class="modal_footer_wrappper">

                            <div className="modal_cancel" data-dismiss="modal">Cancel</div>
                            <div className="modal_delte_btn" data-dismiss="modal" onClick={() => setIsActive(1)}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadScreen;
