import React, { useState } from 'react';
import "./uploadscreen.css"
import Header from "../Header/Header"
import UploadS from "../../assets/images/uploads.png"
import Delete from "../../assets/images/Delete.png"
import Down from "../../assets/images/Vector7.png"
import Up from "../../assets/images/Vector2.png"
const UploadScreen = () => {
    const [arrow, setArrow] = useState(false)
    return <>


        <Header />
        <div className='uploadScreen_Wrapper'>
            <div className='uploadS_heading'>App Content Submission</div>
            <div className='uploadS_content_box'>
                <div className='uploadS_content_div'>
                    <div>
                        <img src={UploadS} />
                    </div>
                    <div className='uploadS_content__inner_div'>
                        <div className='uploadS_m_A'>Music & Audio</div>
                        <div className='uploadS_inner_heading'>SoundCloud</div>
                        <div className='upload_ux_ui_tag'>10 UX Videos 93  UI Screens</div>
                        <div className='uploads_sound'>© SoundCloud</div>


                    </div>
                </div>
                <div className='upload_hero_btn_wrapper'>
                    <div className='upload_edit_app'>Edit App Details</div>
                    <div className='upload_delete_app'>
                        <span><img src={Delete} className='delete_icon' /></span>
                        Delete</div>
                </div>
            </div>
            <div className='uplaod_feature_wrapper'>
                <div className='uploads_add_feature'>Add Features</div>
                <div className='d-flex'>
                    <div className='upload_save_btn'>Save</div>
                    <div className='upload_publish_btn'>Publish</div>
                </div>
            </div>
            <div className='upload_hero_seprator'></div>
            <div className='colapse_wrapper'>
                <div className='colapse_div' >
                    <div className='d-flex'>
                        <div className='uploadS_feature_counter'>Feature 1</div>
                        <div className='uploadS_feature_name'>Feature Name</div>
                    </div>
                    <div className='d-flex'>
                        <div className='colapse_v_chap'>UX Videos Chapters: <span className='colapse_v_chap1'>22</span> </div>
                        <div className='colapse_v_chap_screen'>UI Screens: <span className='colapse_v_chap1'>222</span> </div>
                    </div>
                    <div className='toggle_btn' onClick={() => setArrow(!arrow)}>
                        <div data-toggle="collapse" data-target="#demo">{
                            arrow ? <img src={Up} /> : <img src={Down} />
                        }</div>
                    </div>

                </div>
                <div className='colapse_content' id="demo" class="collapse">
                    <div>Feature 1</div>
                    <div>Feature 1</div>
                    <div>Feature 1</div>
                </div>
            </div>
        </div>






    </>;
};

export default UploadScreen;
