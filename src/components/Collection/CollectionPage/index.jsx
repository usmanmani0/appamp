import React, { useState } from 'react';
import Header from '../../Header/Header';
import "../CollectionPage/collectionpage.css"
import Dots from "../../../assets/images/dots3.png"
import down from "../../../assets/images/Download.png"
import Fit from "../../../assets/images/fit.png"
import Starva from "../../../assets/images/starva.png"
import Cloud from "../../../assets/images/ccloud.png"
import Shopy from "../../../assets/images/shopy1.png"
import Deezer from "../../../assets/images/deezer1.png"
import YouTube from "../../../assets/images/youtube.png"
import Cros from "../../../assets/images/cros.png"
import UxVideos from './uxVideos';
import Footer from '../../Footer/Footer';
import UiScreens from './uiScreens';
import { useNavigate } from 'react-router-dom';
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

const ColectionPage = () => {
    const [editCollection, seteditCollection] = useState()
    const handleinput = (e) => {
        let result = e.target.value
        seteditCollection(result)

    }
    const history = useNavigate()
    return (
        <>
            <Header showF={true} />
            <div className='collection_page_hero_section'>
                <div className='collection_hero_box'>
                    <div className='collection_page_hero_heading_sec'>
                        <div>
                            <div className='collection_page_hero_heading'>Button</div>
                            <div className='collection_page_hero_text' >
                                <div className='collection_page_ux'>10 UX Videos</div>
                                <div className='collection_page_ui'>93  UI Screens</div>
                            </div>
                        </div>
                        <div>
                            <div className='collection_hero_3dots' data-toggle="modal"
                                data-target="#exampleModalCenter">
                                <div><img src={Dots} /></div>
                            </div>
                            <div className='collection_hero_download'>
                                <div><img src={down} /></div>
                            </div>
                        </div>



                    </div>
                    <div className='about_collection'>In this collection</div>
                    <div className='collection_types_wrapper'>
                        <div className='coll_type_contet_wrapper'>
                            <div>
                                <img src={Fit} />
                            </div>
                            <div className='c_type_heading'>Google Fit</div>
                            <div className='c_type_text'>Health & Fitness</div>
                        </div>
                        <div className='coll_type_contet_wrapper'>
                            <div>
                                <img src={Starva} />
                            </div>
                            <div className='c_type_heading'>Strava</div>
                            <div className='c_type_text'>Health & Fitness</div>
                        </div>
                        <div className='coll_type_contet_wrapper'>
                            <div>
                                <img src={Cloud} />
                            </div>
                            <div className='c_type_heading'>SoundCloud</div>
                            <div className='c_type_text'>Music & Audio</div>
                        </div>
                        <div className='coll_type_contet_wrapper'>
                            <div>
                                <img src={Shopy} />
                            </div>
                            <div className='c_type_heading'>Spotify</div>
                            <div className='c_type_text'>Music & Audio</div>
                        </div>
                        <div className='coll_type_contet_wrapper'>
                            <div>
                                <img src={Deezer} />
                            </div>
                            <div className='c_type_heading'>Deezer</div>
                            <div className='c_type_text'>Music & Audio</div>
                        </div>
                        <div className='coll_type_contet_wrapper'>
                            <div>
                                <img src={YouTube} style={{ height: "40px", width: "40px" }} />
                            </div>
                            <div className='c_type_heading'>Youtube Music</div>
                            <div className='c_type_text'>Music & Audio</div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='collection_page_body'>
                <div className='collection_page_seprator'>
                    <div>
                        <div className='col_uxVideo_heading'>UX Videos</div>
                        <div className='col_vedios_length'>8 Videos</div>
                    </div>
                    <div className='col_ux_sep'></div>
                </div>
                <UxVideos />
                <div className='collection_page_seprator'>
                    <div>
                        <div className='col_uxVideo_heading'>UI Screens</div>
                        <div className='col_vedios_length'>5 Videos</div>
                    </div>
                    <div className='col_ux_sep'></div>
                </div>
                <UiScreens />

            </div>
            <Footer />
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal_top">
                            <div class="collection_pagemodal_head" id="exampleModalLongTitle">Collection Settings</div>
                            <div type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ height: "13px", width: "13px" }}><img src={Cros} /></span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center divder_control'>
                            <div className='collection_page_modal_divider'></div>
                        </div>

                        <div className='collection_page_input_wrapper'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Edit Collection Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Edit Collection Name"
                                    onChange={(e) => handleinput(e)}
                                />
                            </FloatingLabel>

                        </div>
                        <div className='d-flex justify-content-center divder_control1'>
                            <div className='collection_page_modal_divider'></div>
                        </div>
                        <div class="collection_page_footer">
                            <div class="col_page_d_collection" data-toggle="modal"
                                data-target="#exampleModalCenter1" data-dismiss="modal" >Delete Collection</div>
                            <div data-dismiss={editCollection && "modal"} class={editCollection ? "save_change_color" : "col_page_save_change"}>Save Changes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="modal fade "
                id="exampleModalCenter1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div class="modal-dialog  modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="">
                            <h5 class="modal-title modal_heading" id="exampleModalLongTitle">
                                Are you sure?
                            </h5>
                            {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                            <div className="heading_seprator"></div>
                        </div>
                        <div class="modal-text">
                            Once you delete , it cannot be undone and you will loose all the
                            items in the feature.
                        </div>
                        <center>
                            <div className="heading_seprator1"></div>
                        </center>
                        <div class="modal_footer_wrappper">
                            <div className="modal_cancel" data-dismiss="modal">
                                Cancel
                            </div>
                            <div
                                className="modal_delte_btn"
                                data-dismiss="modal"
                                onClick={() => history("/createcollection")}
                            >
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default ColectionPage;
