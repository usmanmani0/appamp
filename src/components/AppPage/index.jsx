import React, { useState } from 'react'
import './appPage.css'
import Sound from "../../assets/images/sound.png"
import Secreen1 from "../../assets/images/s1.png"
import Secreen2 from "../../assets/images/s2.png"
import Secreen3 from "../../assets/images/s3.png"
import Secreen4 from "../../assets/images/s4.png"
import Secreen5 from "../../assets/images/s5.png"
import Secreen6 from "../../assets/images/s6.png"
import Secreen7 from "../../assets/images/s7.png"
import Secreen8 from "../../assets/images/s8.png"
import Secreen9 from "../../assets/images/s9.png"
import Secreen10 from "../../assets/images/s10.png"
import Secreen11 from "../../assets/images/s11.png"
import Secreen12 from "../../assets/images/s12.png"
import Stream1 from "../../assets/images/st1.png"
import Stream2 from "../../assets/images/st2.png"
import Stream3 from "../../assets/images/st3.png"
import Stream4 from "../../assets/images/st4.png"
import Stream5 from "../../assets/images/st5.png"
// import Stream6 from "../../assets/images/st6.png"
import Stream7 from "../../assets/images/st7.png"
import Stream8 from "../../assets/images/st8.png"
import Stream9 from "../../assets/images/st9.png"
import aUp from "../../assets/images/arrowup.png"

import Copy from "../../assets/images/copy.png"
import Down from "../../assets/images/Download.png"
import Videos from "../../assets/images/Videos.png"
import secreen from "../../assets/images/Screens.png"
import Filter from "../../assets/images/filter.png"
import downarrow from "../../assets/images/downicon.png"
import Card1 from "../../assets/images/card1.png"
import Card2 from "../../assets/images/card2.png"
import Card4 from "../../assets/images/card4.png"
import Card3 from "../../assets/images/card3.png"
import Card6 from "../../assets/images/card6.png"
import Card5 from "../../assets/images/card5.png"
import Card7 from "../../assets/images/card7.png"
import Card8 from "../../assets/images/card8.png"
import Card9 from "../../assets/images/card9.png"
import Cloud from "../../assets/images/cloud.png"
import Plus from "../../assets/images/plus.png"

import Select from "../../assets/images/select.png"
import Header from '../Header/Header'
import ReactPlayer from 'react-player'
import Footer from "../Footer/Footer"
import $ from "jquery";

const AppPage = () => {
    const [color, setColor] = useState(1)
    const [select, setSelect] = useState({ open: false })
    const [arrow, setArrow] = useState(true)

    const handleShow = () => {
        setSelect(!select)
    }
    const hndleImage = () => {
        console.log("Click")
        setArrow(!arrow)
    }
    console.log("arrow---->", arrow)

    const vedioCard = [
        {
            img: Card1,
            text: "Log Out"
        },
        {
            img: Card2,
            text: "Onboarding"
        },
        {
            img: Card3,
            text: "Playing a song"
        },
        {
            img: Card4,
            text: "Searching for a song"
        },
        {
            img: Card5,
            text: "Sign Up"
        },
        {
            img: Card6,
            text: "Exploring Settings"
        },
        {
            img: Card7,
            text: "Exploring Library (W..."
        },
        {
            img: Card8,
            text: "Exploring Library"
        },
        {
            img: Card9,
            text: "Exploring an Artist "
        },

    ]
    const Stream = [
        {
            img: Stream1,

        },
        {
            img: Stream2,

        },
        {
            img: Stream3,
            text: "Playing a song"
        },
        {
            img: Stream4,
            text: "Searching for a song"
        },
        {
            img: Stream5,
            text: "Sign Up"
        },

        {
            img: Stream7,
            text: "Exploring Library (W..."
        },
        {
            img: Stream8,
            text: "Exploring Library"
        },
        {
            img: Stream9,
            text: "Exploring an Artist "
        },


    ]
    const UxSecreen = [
        {
            img: Secreen1,

        },
        {
            img: Secreen2,

        },
        {
            img: Secreen3,
            text: "Playing a song"
        },
        {
            img: Secreen4,
            text: "Searching for a song"
        },
        {
            img: Secreen5,
            text: "Sign Up"
        },
        {
            img: Secreen6,
            text: "Exploring Settings"
        },
        {
            img: Secreen7,
            text: "Exploring Library (W..."
        },
        {
            img: Secreen8,
            text: "Exploring Library"
        },
        {
            img: Secreen9,
            text: "Exploring an Artist "
        },
        {
            img: Secreen10,
            text: "Exploring an Artist "
        },
        {
            img: Secreen11,
            text: "Exploring an Artist "
        },
        {
            img: Secreen12,
            text: "Exploring an Artist "
        },


    ]
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    return (
        <>
            <Header />
            <div className='App_page_container'>
                <div className='sound_cloud_wrapper'>
                    <div className='sound_cloud_content'>
                        <div className='hero_section_wraper'>
                            <div className='hero_section_content'>
                                <div>
                                    <img src={Sound} className='img-fluid' />
                                </div>
                                <div>
                                    <div className='sound_cloud_text'>
                                        <div className='d-flex align-items-center justify-content-center music_audio'>
                                            music & audio
                                        </div>
                                        <div className='sound_cloud_heading'>SoundCloud</div>
                                        <div className='d-flex'>
                                            <div className='ux10'>10 UX Videos</div>
                                            <div className='ui93'>93  UI Screens</div>
                                        </div>
                                        <div className='_copy'>© SoundCloud</div>
                                    </div>

                                </div>

                            </div>
                            <div className='copy_download'>
                                <div className='copy_wrap ' data-toggle="tooltip" data-placement="bottom" title="Copy">
                                    <img src={Copy} />
                                </div>
                                <div className='download_wrap'><img src={Down} /></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='sound_cloud_filter_wrapper'>
                    <div className='filter'><div><img src={Filter} /></div>&nbsp;&nbsp;&nbsp;Filter</div>
                    <div className='filter_content_wrapper'>
                        <div className={color == 1 ? 'filter_active ui_vedio' : 'ui_vedio'} onClick={() => {
                            setColor(1)
                        }}><div><img src={Videos} /></div>UX Videos</div>
                        <div className={color == 2 ? 'filter_active ui_vedio' : 'ui_vedio'} onClick={() => {
                            setColor(2)
                        }}><div><img src={secreen} /></div>UI Screens</div>
                    </div>

                    <div className='dropdown hide_by_feature' >
                        <div className='by_feature dropdown-toggle' data-toggle="dropdown"
                            onClick={hndleImage}>
                            <div>By Feature </div><div> <img src={arrow ? downarrow : aUp} /> </div>
                        </div>

                        <div class="dropdown-menu by_feature_dropdown">
                            <a class="dropdown-item" href="#">By Feature </a>
                            <a class="dropdown-item" href="#">Random Order</a>


                        </div>
                    </div>
                </div>
                {
                    color == 1 ? <div className='soud_cloud_vedio_section'>
                        <div className='vedio_card_wrapper'>
                            {
                                vedioCard.map((data, index) => {
                                    return (
                                        <>
                                            <div key={index}>
                                                <div className='vedio_card'>

                                                    <img src={data.img} />
                                                    <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }}>
                                                        <div className='select_content_wrapper_1'>
                                                            <div className='d-flex align-items-center'
                                                            >
                                                                <div><img src={Plus} /></div>
                                                                <div className='add_to_col'>Add to Collection</div>
                                                            </div>
                                                            <div className='d-flex align-items-center mt-2'
                                                            >
                                                                <div><img src={Down} style={{ marginLeft: "-7px" }} /></div>
                                                                <div className='select_download'>Download</div>
                                                            </div>
                                                            <div className='d-flex align-items-center mt-2'
                                                            >
                                                                <div><img src={Copy} /></div>
                                                                <div className='add_to_col'>Copy Share Link</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='vedio_time'><div className='vedio_time_wrapper'>12:40</div></div>

                                                    <div className="card_content">
                                                        <div className='card_content_show'>
                                                            <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                            <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={Select} /> </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='card_botom_text'>{data.text}</div>
                                            </div>
                                        </>
                                    )

                                })
                            }

                        </div>
                    </div> : color == 2 ?
                        <>
                            <div className='UI_Secreen_Streem'>
                                <div className='Ui_heading'>
                                    <div>
                                        <div className='create_play_list'>Create a Playlist</div>
                                        <div className='screens14'>14 screens</div>
                                    </div>

                                    <div className='line'></div>
                                </div>

                                <div className='UI_Secreen_vedio_card_wrapper'>
                                    {
                                        UxSecreen.map((data, index) => {
                                            return (
                                                <>
                                                    <div key={index}>
                                                        <div className='vedio_card'>
                                                            <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }}>
                                                                <div className='select_content_wrapper_1'>
                                                                    <div className='d-flex align-items-center'
                                                                    >
                                                                        <div><img src={Plus} /></div>
                                                                        <div className='add_to_col'>Add to Collection</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Down} style={{ marginLeft: "-7px" }} /></div>
                                                                        <div className='select_download'>Download</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Copy} /></div>
                                                                        <div className='add_to_col'>Copy Share Link</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* <div className='vedio_time'><div className='vedio_time_wrapper'>12:40</div></div> */}

                                                            <div className="card_content">
                                                                <div className='card_content_show'>
                                                                    <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                                    <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={Select} /> </div>
                                                                </div>

                                                            </div>

                                                            <img src={data.img} />
                                                        </div>

                                                    </div>
                                                </>
                                            )

                                        })
                                    }

                                </div>


                            </div>
                            <div className='UI_Secreen'>
                                <div className='Ui_heading'>
                                    <div>
                                        <div className='create_play_list'>Exploring Stream</div>
                                        <div className='screens14'>9 screens</div>
                                    </div>

                                    <div className='line'></div>
                                </div>

                                <div className='UI_Secreen_vedio_card_wrapper'>
                                    {
                                        Stream.map((data, index) => {
                                            return (
                                                <>
                                                    <div key={index}>
                                                        <div className='vedio_card'>
                                                            <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }}>
                                                                <div className='select_content_wrapper_1'>
                                                                    <div className='d-flex align-items-center'
                                                                    >
                                                                        <div><img src={Plus} /></div>
                                                                        <div className='add_to_col'>Add to Collection</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Down} style={{ marginLeft: "-7px" }} /></div>
                                                                        <div className='select_download'>Download</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Copy} /></div>
                                                                        <div className='add_to_col'>Copy Share Link</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* <div className='vedio_time'><div className='vedio_time_wrapper'>12:40</div></div> */}

                                                            <div className="card_content">
                                                                <div className='card_content_show'>
                                                                    <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                                    <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={Select} /> </div>
                                                                </div>

                                                            </div>

                                                            <img src={data.img} />
                                                        </div>

                                                    </div>
                                                </>
                                            )

                                        })
                                    }

                                </div>


                            </div>

                        </> : ""
                }


                {/* ..........................UI Secreen................ */}



            </div>
            <Footer />
        </>
    )
}

export default AppPage
