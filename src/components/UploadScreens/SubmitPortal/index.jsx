import React, { useState } from 'react';
import Header from '../../Header/Header';
import "./submitportal.css"
import down from "../../../assets/images/d.png"
import appLogo from "../../../assets/images/submitLogo.png"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Submitportal = () => {
    const [AppCategory, setAppCategory] = useState([{
        catg: "App Category"
    }
        ,
    {
        catg: "App Category"
    }
        ,
    {
        catg: "App Category"
    }
        ,
    {
        catg: "App Category"
    }
        ,
    {
        catg: "App Category"
    }
    ])
    const redirect = useNavigate()
    const TotalCreateApps = useSelector((state) => state.hideShow.TotalCreateApps)
    return <>
        <Header showF={true} />
        <div className='submit_main_hero_section'>
            <div className='submit_portal_heading'>App Submission Portal</div>
            <div className='submit_portal_hero_content'>
                <div className='submit_hero_text'>Your WorkSpace</div>
                <div className='submit_hero_btn_wrapper'>
                    <div className='submit_hero_edit_btn' onClick={() => redirect("/updatefilter")}>Edit Filters</div>
                    <div className='submit_hero_new_btn' onClick={() => redirect("/createapp")}>Create New App</div>
                </div>
            </div>
            <div className='submit_portal_sep'></div>
        </div>

        <div className='create_apps_submit_heaing'>
            <div className='submit_portal_create_app_tag'>Created Apps</div>
            <div className='create_apps_submit_heaing_inner'>
                <div className='submit_p_catogery'><div className='create_apps_submit_heaing_text'>App Category</div>
                    <div><img src={down} /></div>
                </div>
                <div className='create_apps_submit_heaing_text'>UX Videos</div>
                <div className='create_apps_submit_heaing_text'>UI Screens</div>
                <div className='create_apps_submit_heaing_text'>Store Link</div>
                <div className='create_apps_submit_heaing_text'>Created on</div>
            </div>

        </div>

        <div className='submit_portal_info_section'>
            <div className='create_app_submit_section'>



                {
                    AppCategory.map((data) => {
                        return (
                            <>

                                <div className='create_app_submited_content'>
                                    <div className='d-flex justify-content-between align-items-center' >
                                        <div className='table_iner' onClick={() => redirect("/upload")}>
                                            <div className='submit_inner_logo'><img src={appLogo} className="admint_portal_app_logo" /><div className='admin_portal_app_name'>App Name</div></div>
                                            <div className='create_app_submited_content_text'>
                                                <div className='ap_c_content'>{data.catg}</div>
                                                <div className='ap_c_content' > &nbsp; &nbsp;&nbsp;0</div>
                                                <div className='ap_c_content'  > &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 0</div>
                                                <div className='ap_c_contentu'>Open Link</div>
                                                <div className='ap_c_content'>Oct 2020</div>
                                            </div>
                                        </div>
                                        <div className='submited_app_delete_btn'>Delete</div>
                                    </div>
                                    <div className='submited_content_table_sep'></div>
                                </div>

                            </>
                        )
                    })
                }

            </div>


        </div>
        <div className='create_apps_submit_heaing2'>
            <div className='submit_portal_create_app_tagp'>Published Apps</div>
            <div className='create_apps_submit_heaing_inner'>
                <div className='submit_p_catogery'><div className='create_apps_submit_heaing_text'>App Category</div>
                    <div><img src={down} /></div>
                </div>
                <div className='create_apps_submit_heaing_text'>UX Videos</div>
                <div className='create_apps_submit_heaing_text'>UI Screens</div>
                <div className='create_apps_submit_heaing_text'>Store Link</div>
                <div className='create_apps_submit_heaing_text'>Created on</div>
            </div>

        </div>
        <div className='submit_portal_info_section'>
            <div className='create_app_submit_section'>

                {
                    AppCategory.map((data) => {
                        return (
                            <>

                                <div className='create_app_submited_content'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='table_inner_2'>
                                            <div className='submit_inner_logo'><img src={appLogo} className="admint_portal_app_logo" /><div className='admin_portal_app_name'>App Name</div></div>
                                            <div className='create_app_submited_content_text2'>
                                                <div className='ap_c_content'>{data.catg}</div>
                                                <div className='ap_c_content' >&nbsp; &nbsp;&nbsp;0</div>
                                                <div className='ap_c_content'  >&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 0</div>
                                                <div className='ap_c_contentu'>Open Link</div>
                                                <div className='ap_c_content'>Oct 2020</div>
                                            </div>
                                        </div>
                                        <div className='publish_app_btn_wrapper'>
                                            <div className='publish_app_btn'>Review</div>
                                            <div className='publish_app_submit_btn'>Submit</div>
                                        </div>

                                    </div>
                                    <div className='submited_content_table_sep'></div>
                                </div>
                                <div></div>

                            </>
                        )
                    })
                }

            </div>


        </div>


    </>;
};

export default Submitportal;
