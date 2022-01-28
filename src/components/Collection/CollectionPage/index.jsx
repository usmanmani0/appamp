import React from 'react';
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
import UxVideos from './uxVideos';
import Footer from '../../Footer/Footer';
import UiScreens from './uiScreens';

const ColectionPage = () => {
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
                            <div className='collection_hero_3dots'>
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


        </>
    )
};

export default ColectionPage;
