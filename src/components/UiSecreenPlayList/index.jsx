import React, { useState } from 'react'
import "./uisecreenplaylist.css"
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
import Copy from "../../assets/images/copy.png"
import Down from "../../assets/images/Download.png"
import Cloud from "../../assets/images/cloud.png"
import Plus from "../../assets/images/plus.png"
import option from "../../assets/images/select.png"
import UiSecreenFilter from "../UiSecreenFilter"
import SelectByFeature from '../SelectByFeature'

const UiSecreenPlayList = () => {

    const [select, setSelect] = useState({ open: false })

    const Playlist = [
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
    return (
        <>
            <div className='mobile_View_Filter_section'>
                <div><UiSecreenFilter /></div>
                <div><SelectByFeature /></div>
            </div>
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
                        Playlist.map((data, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <div className='vedio_card'>
                                            <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }} >
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
                                            <div className="card_content">
                                                <div className='card_content_show'>
                                                    <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                    <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={option} /> </div>
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
        </>
    )
}

export default UiSecreenPlayList
